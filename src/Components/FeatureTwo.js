import React, { Component } from 'react';
import WOW from 'wowjs';

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
          <div className="wow slideInLeft"><img alt="" src="https://www.lookout.com/uploads/images/products/personal/ios/ios-1-2-appmonitor-844x1200.png" style={{ marginTop: 20, marginBottom: 20, height:600, width: 500}}/></div>
        </div>
        <div style={{flex: 1}}>
          <div className="wow slideInRight"><h1 style={{textAlign: 'center', marginLeft: 55, color: "#498fff"}}>League Standings</h1></div>
        </div>
        </div>
      </div>
    );
  }
}
