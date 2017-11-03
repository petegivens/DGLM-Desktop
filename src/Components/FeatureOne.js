import React, { Component } from 'react';
import WOW from 'wowjs';
import pic from './exampleThree.png'

import './ComponentStyles.css'
import './animate.css'

export default class FeatureOne extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div style={{backgroundColor: '#cccccc'}}>
        <div style={{display: 'flex', textAlign: 'center'}}>
        <div style={{flex: 1}}>
        <div className="wow slideInLeft"><h1 style={{textAlign: 'center', marginLeft: 55}}>Live Score Updates</h1></div>
        </div>
          <div style={{flex: 1}}>
          <div className="wow slideInRight"><img alt="" src={pic} style={{ marginTop: 20, marginBottom: 20, height:700, width: 700}}/></div>
          </div>
        </div>
      </div>
    );
  }
}
