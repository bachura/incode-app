import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLogin, handleRegistration } from '../../actions/auth';
import AuthForm from '../../components/AuthForm';

class Login extends Component {
  state = {
    login: '',
    password: ''
  }
  constructor(props) {
    super(props);
  }
  onChange = (event) => {
    this.setState({ login: event.login, password: event.password })
  }
  onLogin = (e) => {
    e.preventDefault();
    this.props.handleLogin({ login:this.state.login, password:this.state.password})
  }

  onRegister = (e) => {
    e.preventDefault();
    this.props.handleRegistration({ login:this.state.login, password:this.state.password})
  }

  validate() {
    // const { name, password } = this.state
    // if (name.trim() && password.trim() && name.length>2 && password.length>2) {
    //   return true
    // }
    // return false
  }

  render(){
    const path = this.props.location.pathname;
    
    if (path === '/login') {
      return (
        <AuthForm
          login={this.state.login}
          password={this.state.password}
          isValid={this.props.isValid}
          hasChanges={this.props.hasChanges}
          onChange={this.onChange}
          onSubmit={this.onLogin}
          btnLabel={"Login"}/> 
      )
    } else if (path === '/auth') {
      return (
        <AuthForm
          login={this.state.login}
          password={this.state.password}
          isValid={this.props.isValid}
          hasChanges={this.props.hasChanges}
          onChange={this.onChange}
          onSubmit={this.onRegister}
          btnLabel={"Register"}/>
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.root.user,
  hasChanges: state.login.hasChanges,
  isValid: state.login.isValid,
  isSubmitting: state.login.isSubmitting
})

const mapDispatchToProps = {
  handleLogin,
  handleRegistration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)