import React, { Component } from 'react';
import WOW from 'wowjs';

import './animate.css'

export default class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <h1 className="wow jackInTheBox">The Team</h1>
        </div>

        <div style={{paddingLeft: 120, display: 'flex'}}>
        <div style={{flex: .4}}></div>
          <div className="wow jackInTheBox" style={{flex: 1, fontWeight: 'bold'}}><p style={{borderBottom: '3px solid #498fff', width: '60%', fontSize: 29}}>Tristyn<br/> Leos</p></div>
          <div className="wow jackInTheBox" style={{flex: 1, fontWeight: 'bold'}}><p style={{borderBottom: '3px solid #498fff', width: '60%', fontSize: 29}}>Robert Hunter</p></div>
          <div className="wow jackInTheBox" style={{flex: 1, fontWeight: 'bold'}}><p style={{borderBottom: '3px solid #498fff', width: '60%', fontSize: 29}}>Pete<br/> Givens</p></div>
          <div className="wow jackInTheBox" style={{flex: 1, fontWeight: 'bold'}}><p style={{borderBottom: '3px solid #498fff', width: '60%', fontSize: 29}}>A.J. Caporicci</p></div>
          <div style={{flex: .4}}></div>
        </div>

        <div style={{paddingLeft: 120, display: 'flex'}}>
        <div style={{flex: .4}}></div>
          <div className="wow jackInTheBox" style={{flex: 1}}><p style={{width: '60%', color: '#498fff', marginTop: -7, fontSize: 20}}>Full-Stack Software Engineer</p></div>
          <div className="wow jackInTheBox" style={{flex: 1}}><p style={{width: '60%', color: '#498fff', marginTop: -7, fontSize: 20}}>Full-Stack Software Engineer</p></div>
          <div className="wow jackInTheBox" style={{flex: 1}}><p style={{width: '60%', color: '#498fff', marginTop: -7, fontSize: 20}}>Full-Stack Software Engineer</p></div>
          <div className="wow jackInTheBox" style={{flex: 1}}><p style={{width: '60%', color: '#498fff', marginTop: -7, fontSize: 20}}>Full-Stack Software Engineer</p></div>
          <div style={{flex: .4}}></div>
        </div>
      </div>
    );
  }
}
