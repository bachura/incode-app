import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="email"/>
            <input type="password"/>
            <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
