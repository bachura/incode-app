import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {

  state = {
    email : "",
    password : ""
  }

  setEmail = (email) => {
    this.setState({
      ...this.state,
      email
    })
  }

  setPassword = (password) => {
    this.setState({
      ...this.state,
      password
    })
  }

  login = async (email, password) => {
    console.log("Login")
    try {
      let res = await axios.post('http://localhost:3001/api/auth/login', {
        email : email,
        password : password
      })
      const token = res.data.token
    } catch(e) {
      console.log(e)
    }
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
              <button onClick={() => {this.login(this.state.email, this.state.password)}} className="btn btn-primary">
                Login
              </button>
            </div>
        </form>
      </div>
    );
  }
}

export default Login;
