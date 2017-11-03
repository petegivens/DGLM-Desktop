import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux';
import axios from 'axios';

import SeasonView from './SeasonView.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from './Tabs.js'
import Options from './Options.js';
import Table from './Table.js'


import {
    Link
} from "react-browser-router";

import './ComponentStyles.css';


class AdminPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      user_id: '',
      clubs: '',
      seasons: [],
      clubs: [
        {
          clubName: 'D Boys DG Club',
          parkName: 'Peasly Park',
          address: "123 Abc Drive",
          holeCount: 6,
          seasons: [
            {name: "Fall Season"},

          ]
        },
      ]
    }
  }

  addClub(name, pname, add, holes) {
    this.state.clubs.push(
      {
        clubName: name,
        parkName: pname,
        address: add,
        holeCount: holes,
        seasons: []
      }
    )
  }

  addSeason(index, seasonName, current, count) {
    var copy = this.state.clubs[index];
    copy.seasons.push(
      {
        name: seasonName,
        currentRound: current,
        roundCount: count,
      }
    )
  }

  componentDidMount() {
    axios.get('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/getSeasonsByPlayer/'+this.props.userDetails)
    .then((res)=>{
      console.log(res)
    })
  }


  render() {
    // this.addClub('fdsa','fdsa','fdsda',13)
    // this.addSeason(0, 'test', 'test', 4);
    return (
      <MuiThemeProvider>
      <div style={{display: 'flex'}}>
      <div style={{flex: 3}}><h1 style={{textAlign: 'center'}}>My Clubs</h1></div>
      <div style={{flex: 1}}><Link to="/app1"><RaisedButton style={{border: '2px solid #498fff', height: 30}} label="Add Club" backgroundColor= 'black' labelColor= 'rgb(255,255,255)'/></Link></div>
      <div style={{flex: 1}}><Link to="/app2"><RaisedButton style={{border: '2px solid #498fff', height: 30}} label="Add Course" backgroundColor= 'black' labelColor= 'rgb(255,255,255)'/></Link></div>
      </div>
      <div>
        {this.state.clubs.map((club, i)=>{
          return (
            <div>
              <Tabs holeCount={club.holeCount} seasons={club.seasons} clubName={club.clubName} parkName = {club.parkName} address={club.address} myLabel={club.clubName} />
            </div>
          )
        })}
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    userDetails: state.newSeasonReducer.userData
  }
}

export default connect(mapStateToProps, null)(AdminPanel)
