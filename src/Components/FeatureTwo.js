import React, { Component } from 'react';
import WOW from 'wowjs';
import pic from './exampleTwo.png';

import './ComponentStyles.css'
import './animate.css'

export default class FeatureOne extends Component {
  componentDidMount() {
      new WOW.WOW().init();
  }
  render() {
    return (
      <div >
        <div style={{display: 'flex', textAlign: 'center'}}>
        <div style={{flex: 1}}>
          <div className="wow slideInLeft"><img alt="example one" src={pic} style={{ marginTop: 20, marginBottom: 20, height:700, width: 700}}/></div>
        </div>
        <div style={{flex: 1}}>
          <div className="wow slideInRight"><h1 style={{textAlign: 'center', marginLeft: 55, color: "#498fff"}}>League Standings</h1></div>
        </div>
        </div>
      </div>
    );
  }
}
