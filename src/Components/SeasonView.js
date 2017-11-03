import React, { Component } from 'react';
import Tabs from './Tabs.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {
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
        <div style={{width: '60%', marginRight: '20%', marginLeft: '20%'}}>

          <div style={{backgroundColor: 'silver', border: '3px solid black' }}>
            <h2 style={{textAlign: 'center'}}>{this.props.clubName}</h2><div id="sign-up" style={{fontSize: 20, width: '7%', marginRight: '45%', marginLeft: '45%', marginTop: 4}} ><Link className='start-club' to="/app3">Add Season</Link></div>
          </div>
          <div style={{display: 'flex', marginTop: -23}}>
            <h3 style={{flex: 1, textAlign: 'center', border: '3px solid black', backgroundColor: 'silver'}}>{this.props.parkName}</h3>
            <h3 style={{flex: 1, textAlign: 'center', border: '3px solid black', backgroundColor: 'silver'}}>{this.props.address}</h3>
            <h3 style={{flex: 1, textAlign: 'center', border: '3px solid black', backgroundColor: 'silver'}}>{this.props.holeCount} Holes</h3>
          </div>

          {
            this.props.seasons.length === 0 ?
                    (
                      <div style={{backgroundColor: 'silver', marginTop: -23, display: 'flex', marginBottom: 40}}>
                      <div style={{flex: 1, textAlign: 'center', border: '2px solid black'}}><h2>You Have No Active Seasons</h2></div>
                      </div>
                    )
                    :
            this.props.seasons.map((season, i)=>{
                    return (
                      <div style={{backgroundColor: 'silver', marginTop: -23, display: 'flex', marginBottom: 20}}>
                      <div style={{flex: 1, textAlign: 'center', border: '2px solid black'}}><h2>{season.name}</h2></div>
                      <div style={{flex: 1, textAlign: 'center', border: '2px solid black'}}><h2>Round {season.currentRound}/{season.roundCount}</h2></div>
                      </div>
                    )
                })
            }
          }

        </div>

      )
  }
}
