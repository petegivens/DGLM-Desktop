import React, { Component } from 'react';
import WOW from 'wowjs';

import './ComponentStyles.css';


export default class Footer extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div id='header' style={{height: 100, width: '100%', marginTop: 20, marginBottom: 0, paddingBottom: 0, fontFamily: 'Robot Condensed',  fontSize: 20, backgroundImage: 'url("http://cdn.shopify.com/s/files/1/0250/5422/files/ios_linen_texture___black_by_vegardhw-d3ddll5_copy.jpg?2614")', textAlign: 'center'}}>
        <h4 style={{textAlign: 'center', color: '#ededed', paddingTop: 35}}>Copywrite 2017 <div className="wow pulse">A D-Boys Product</div></h4>
      </div>
    );
  }
}
