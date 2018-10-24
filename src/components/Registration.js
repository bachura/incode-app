import React, { Component } from 'react';


class Register extends Component {
  
  state = {
    email: "",
    token: ""
  }

  register = async (email, token) => {
    console.log("Register")
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onKeyUp={ e => this.setEmail(e.target.value)}
            />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                onKeyUp={e => this.setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button onClick={() => {this.register(this.state.email, this.state.token)}} className="btn btn-primary">
                Registeration
              </button>
            </div>
        </form>
      </div>
    );
  }
}

export default Register;
