import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import { userLogin } from '../Actions/AuthAction.js';

import { connect } from 'react-redux';


import { Link } from 'react-browser-router';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: false,
      username: '',
      password: '',
      userInfo: null
    }
  }

  userLogin() {
    axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/login', {
        email: this.state.username,
        password: this.state.password
      })
      .then((res)=>{
        this.props.userLogin(res);
        if (res) {
          this.setState({ loggedIn: true })
        }
      })
  }

  render(){
       console.log('state is this', this.props)
    return (
      <MuiThemeProvider>
      <div style={{textAlign: 'center'}}>
      <h1>Login</h1>
      <TextField
      id='username'
        hintText="email"
        // errorText={this.state.attempt ? " " : null}
        underlineFocusStyle={{borderColor: 'black'}}
        floatingLabelStyle={{color: 'silver'}}
        onChange={ ()=>{this.setState({username: document.getElementById('username').value})} }
        floatingLabelText="Email"
      /><br />
      <TextField
      id='password'
      // errorText={this.state.attempt ? "Incorrect Email or Pass" : null}

      onChange={ ()=>{this.setState({password: document.getElementById('password').value})} }
        type="password"
        underlineFocusStyle={{borderColor: 'black'}}
        floatingLabelStyle={{color: 'silver'}}
        hintText="password"
        floatingLabelText="Password"
      /><br />
      <Link to={this.state.loggedIn ? '/admin-panel' : '/login'}>
        <RaisedButton onClick={
          ()=>{ this.userLogin(), this.setState({attempt: true}) }

         } label="Login" backgroundColor = 'black' labelColor='rgb(255,255,255)' style={{color: 'white', border: '2px solid #498fff'}}  />
      </Link>
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    userData: state.newSeasonReducer,
    userId: state.newSeasonReducer.userId
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    userLogin: (userData) =>{
      dispatch(userLogin(userData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
