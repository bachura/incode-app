import React, { Component } from 'react';
import axios from 'axios';
import * as actionTypes from '../actions/actionsTypes';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Register extends Component {

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

  register = async (email, password) => {
    console.log("Register")
    try {
      let res = await axios.post('http://localhost:3001/api/auth/registration', {
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
        <div>
          <Button onClick={() => {this.register(this.state.email, this.state.password)}} color="primary" size="large">
            Registeration
          </Button>
        </div>
      </div>
    );
  }
}

export default Register;
