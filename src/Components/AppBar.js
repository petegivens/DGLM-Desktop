import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Link
} from "react-browser-router";

import { connect } from 'react-redux';


import './ComponentStyles.css';


class AppBar extends Component {
  constructor(props){
    super(props);
    this.state={
      test: 'tes43t'
    }
  }

  render() {
    console.log('appbar', this.props)
    return (
      <MuiThemeProvider>
      <div id='header' style={{display: 'flex', marginTop: 20, fontFamily: 'Cizel', fontWeight: 'bold', fontSize: 20, borderBottom: '3px solid #ddd'}}>
        <div style={{flex: 5, marginTop: 10, marginLeft: 30, fontFamily: 'Fredoka One'}}>D.G. League Manager</div>
        <div style={{flex: .7, marginTop: 10}}><Link id="selected" to="/">Home</Link></div>
        <div className="tab-button" style={{flex: .8}}>About</div>
        <div className="tab-button" style={{flex: 1}}>Download</div>
        <div ><Link to={ this.props.userData ? "/admin-panel" : "/Login"}><RaisedButton style={{marginBottom: 10}} label={ this.props.userData ? "My Clubs" : "Login"} backgroundColor= '#00D6A1' labelColor= 'rgb(255,255,255)'/></Link></div>
        <div style={{flex: .5, borderBottom: ''}}></div>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    newCourse: state,
    userData: state.newSeasonReducer.userData
  }
}

export default connect(mapStateToProps)(AppBar)
