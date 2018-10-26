import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <div className='form-authorization'>
        <div>
          <TextField
            id="standard-dense"
            label="Email"
            fullWidth="true"
            onKeyUp={(e) => this.setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-dense"
            label="Password"
            type = "password"
            fullWidth="true"
            onKeyUp={(e) => this.setPassword(e.target.value)}
          />
        </div>
        <Button onClick={() => {this.login(this.state.email, this.state.password)}} color="primary" size="large">
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
