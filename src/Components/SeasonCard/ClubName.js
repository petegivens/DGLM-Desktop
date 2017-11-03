import React, { Component } from 'react';

import {
    BrowserRouter,
    Route,
    Link
} from "react-browser-router";


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      club: {
        name: 'Club Name',
        course: 'Course Name',
        location: '505 meadow park drive',
        holes: 18
      }
    }
  }

  pageChange(page) {
    this.setState({ page: page })
  }

  render() {
      return (
        <div style={{backgroundColor: 'silver', border: '3px solid black'}}>
          <h1 style={{textAlign: 'center'}}>ClubName</h1>
        </div>

      )
  }
}
