import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { getUser } from './actions/root';
import { logout } from './actions/auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
    componentDidMount(){
      if (!this.props.loaded) {
        this.props.getUser();
      }
    }

  render() {
    if (this.props.loaded) {
      return (
        <div className="App">
          <Header loggedIn={this.props.loggedIn} handleLogout={this.props.logout}/>
          <Main/>
        </div>
      );
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.root.loggedIn,
  loaded: state.root.loaded
})

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout())
});


export default withRouter (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App),
);
