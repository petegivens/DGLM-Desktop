import React, { Component } from 'react';
import WOW from 'wowjs';

import './ComponentStyles.css';

export default class Services extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id='services-background'>
        <h1 style={{color: "#498fff"}}>Cutting Edge Features</h1>

        <div style={{display: 'flex'}}>
          <div className="jqueryIcons">
            <div><img style={{border: '2px solid black', borderRadius: 20, height: 150, width: 150}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/83852-200.png" /></div>
          </div>
          <div className="jqueryIcons">
            <div><img style={{border: '2px solid black', borderRadius: 20, height: 150, width: 150}} src="http://www.hdrelay.com/wp-content/uploads/2015/09/hdrelay-clear-icons-for-ichd-live-streaming-black.png" /></div>
          </div>
          <div className="jqueryIcons">
            <div><img style={{border: '2px solid black', borderRadius: 20,  height: 150, width: 150}} src="https://image.flaticon.com/icons/png/128/35/35422.png" /></div>
          </div>
        </div>


        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <p style={{fontSize: 20}}>Keep Track Of Your Scores</p>
          </div>
          <div style={{flex: 1}}>
          <p style={{fontSize: 20}}>Live Scoring Updates</p>
          </div>
          <div style={{flex: 1}}>
          <p style={{fontSize: 20}}>Available for both iOS and Android</p>
          </div>
        </div>
      </div>
    );
  }
}
