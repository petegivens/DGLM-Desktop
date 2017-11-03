import React, { Component } from 'react';
import $ from 'jquery';

import './ComponentStyles.css'
import './animate.css'

export default class Header extends Component {
  render() {
    $(function() {
      $("#background").hide();
    });
    setTimeout(()=>{$("#background").fadeIn(1300)}, 1000)
    return (
      <div id='background'>
        <div className='background-filter'>
          <div>
            <h1 id='img-text'>D.G. League Manager</h1>
          </div>
          <h2 className='img-text'>The Future of DiscGolf is</h2>
          <ul>
          <li>Cross Platform</li>
          <li id='devices' className="bounceInLeft"><img alt="" style={{height: 45, width:150, padding: 0, margin: 0, marginRight: 10, paddingTop: 12}} alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" /><img alt="" style={{height: 45, width: 160, padding: 0, margin: 0}} src="https://www.oakgov.com/sheriff/PublishingImages/Pages/Mobile-Patrol-Application/googlePlay.png" /></li>
          <li className="bounceInLeft"></li>
          </ul>
        </div>
      </div>
    );
  }
}
