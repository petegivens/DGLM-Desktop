import React, { Component } from 'react';
import WOW from 'wowjs';
import RaisedButton from 'material-ui/RaisedButton';
import { addNewClub } from '../Actions/NewClubActions.js';
import { connect } from 'react-redux';

import {
    Link
} from "react-browser-router";
import './ComponentStyles.css';
import './animate.css'

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button.js';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      clubName: ''
    }
  }
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <MuiThemeProvider>
      <div style={{textAlign: 'center'}}>
      <h1>Register A Club</h1>
      <TextField
        id={'clubName'}
        onChange={ ()=>{ this.setState({ clubName: document.getElementById('clubName').value}) } }
        hintText="club name"
        floatingLabelText="Club Name"
      /><br />

      <Link to="/admin-panel">
      <RaisedButton onClick={ ()=>{ this.props.addNewClub(this.state.clubName), console.log('AAAAAAAAAAaa',this.props) } } label="Next" backgroundColor = '#00D6A1' labelColor='rgb(255,255,255)' style={{color: 'white'}}  />

      </Link>
      </div>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state, ownProps) =>{
  return {
    clubDetails: state.newSeasonReducer
  }
}

  const mapDispatchToProps = (dispatch) =>{
    return {
      addNewClub: (clubDetails) =>{
        dispatch(addNewClub(clubDetails))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
