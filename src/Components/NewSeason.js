import React, { Component } from 'react';
import WOW from 'wowjs';

import { connect } from 'react-redux';
import { updateNewSeason, updateSeason } from '../Actions/NewSeasonActions';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import Button from './Button.js';
import { Link } from 'react-browser-router';

import './ComponentStyles.css';


class NewSeason extends Component {
  constructor(props){
    super(props);
    this.state={
      holeData: [],
      numberOfHoles: [],
      open: false,
      seasonName: '',
      roundTotal: 4
    }

  }

  handleOpen = () => {
    // Add season name and total rounds to redux store
    var newSeason = {
      seasonName: this.state.seasonName,
      roundTotal: this.state.roundTotal
    };
    this.props.updateNewSeason(newSeason)
    this.setState({open: true});
    console.log('test', this.props)
  };

  handleClose = () => {
    this.setState({open: false});
  };
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    this.state.numberOfHoles = [];
    for (var j = 1;j<=this.state.roundTotal;j++) {
      this.state.numberOfHoles.push(j+1);
    }


    return (

      <MuiThemeProvider>
      <div className="wow slideInRight">

        <h1 style={{textAlign: 'center'}}>New Season</h1>

        <div style={{textAlign: 'center'}}>
        <TextField
          hintText="Season Name"
          floatingLabelText="Season Name"
          id="seasonName"
          onChange={ ()=>{ this.setState({seasonName: document.getElementById('seasonName').value}) } }
        /><br />
        <TextField
          id="roundTotal"
          onChange={ ()=>{ this.setState({roundTotal: document.getElementById('roundTotal').value}) } }
          hintText="Total Number of Rounds"
          floatingLabelText="Total Number of Rounds"
        /><br />
        <Link to="/admin-panel">
        </Link>
        </div>
           <div style={{width: "10%", marginLeft: '45%', marginRight: '45%'}}>
            <RaisedButton label="Submit" onClick={this.handleOpen} />
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <p style={{color: 'black', textAlign: 'center', borderBottom: '3px solid black', fontSize: 22, fontWeight: 'bold'}}>Round Details</p>
              <div style={{display: 'flex'}}>
              <div style={{flex: 1,color: 'black', marginLeft: 15}}>Round #</div>
              <div style={{flex: 1, color: 'black', marginLeft: -10}}>Date</div>
              <div style={{flex: 1, color: 'black'}}>Course</div>
              </div>
              {
                this.state.numberOfHoles.map((ele, i)=>{
                  return (
                    <div style={{display: 'flex', marginTop: 5}}>
                      <div style={{flex: 1,  color: 'black', marginLeft: 25}}>{i+1}</div>
                      <div style={{width: 60}} style={{flex: 1}}><DatePicker
                      id={'pick'+i}
                      onChange = { (none, date )=>{ this.props.newSeason.rounds[i].date = date.toString().slice(0,16) } }
                      textFieldStyle={{width: 140}}
                      hintText="Enter Date" style={{width: 20}} mode="landscape" /></div>
                      <div style={{flex: 1, color: 'black'}}><input onChange={ ()=>{ this.props.newSeason.rounds[i].course = document.getElementById('course'+i).value } } id={'course'+i} /></div>
                      {console.log(this.props.newSeason)}
                    </div>
                  )
                })
              }
              {console.log(this.props)}

            </Dialog>
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    newSeason: state.newSeasonReducer.newSeason
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateNewSeason: (newSeason) =>{
      dispatch(updateNewSeason(newSeason))
    },
    updateSeason: (newDetails)=>{
      dispatch(updateSeason(newDetails))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSeason)
