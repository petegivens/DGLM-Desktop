import React, { Component } from 'react';
import WOW from 'wowjs';

import { addNewCourse, addCourseData } from '../Actions/NewCourseAction.js';

import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import TextField from 'material-ui/TextField';
import Button from './Button.js';
import { Link } from 'react-browser-router';

import './ComponentStyles.css';


class AddCourse extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      courseName: '',
      location: '',
      numberOfHoles: [1,2,3,4,5],
      holeTotal: 0
    }

  }

  handleOpen = () => {
    var newCourse = {
      seasonName: this.state.courseName,
      holeTotal: this.state.holeTotal,
      location: this.state.location,
    };
    this.props.addNewCourse(newCourse)
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.addCourseData(this.props.newCourse)
    this.setState({open: false});
  };
  componentDidMount() {
    new WOW.WOW().init().sync;
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
    for (var j = 1;j<=this.state.holeTotal;j++) {
      this.state.numberOfHoles.push(j+1);
    }

    console.log('mine',this.props)
    return (
      <MuiThemeProvider>

      <div className="wow slideInRight">

        <h1 style={{textAlign: 'center'}}>Add A Course</h1>

        <div style={{textAlign: 'center'}}>
        <TextField
          onChange={ ()=>{ this.setState({courseName: document.getElementById('courseName').value}) } }
          id='courseName'
          hintText="course name"
          floatingLabelText="Course Name"
        /><br />
        <TextField
          onChange={ ()=>{ this.setState({ location: document.getElementById('location').value }) } }
          id='location'
          hintText="location"
          floatingLabelText="Location"
        /><br />
        <TextField
          id='numOfHoles'
          id='textField'
          onChange={ ()=>{ this.setState({holeTotal: document.getElementById('textField').value}) } }
          hintText="number of holes"
          floatingLabelText="Number of Holes"
        /><br />
        <Link to="/admin-panel">
        </Link>
        </div>
       <div style={{width: "10%", marginLeft: '45%', marginRight: '45%'}}>
              <RaisedButton label="Submit" backgroundColor="black" style={{border: '2px solid blue'}} labelColor="rgb(255,255,255)"  onClick={this.handleOpen} />
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <p style={{color: 'black', textAlign: 'center', borderBottom: '3px solid black', fontSize: 22, fontWeight: 'bold'}}>Hole Details</p>
                <div style={{display: 'flex'}}>
                  <div style={{flex: 1, marginLeft: 75, color: 'black'}}>Hole Number</div>
                  <div style={{flex: 1, color: 'black'}}>Par</div>
                  <div style={{flex: 1, color: 'black'}}>Length(ft)</div>
                </div>

                {this.state.numberOfHoles.map((ele, i)=>{
                  return (
                    <div style={{display: 'flex', marginTop: 5}}>
                      <div style={{flex: 1, marginLeft: 75, color: 'black'}}>{i+1}</div>
                      <div style={{flex: 1, color: 'black'}}>
                        <input onChange={ ()=>{this.props.newCourse.holeData[i]['par'] = document.getElementById('par'+i).value} } id={'par'+i} />
                      </div>
                      <div style={{flex: 1, color: 'black'}}>
                        <input onChange={ ()=>{this.props.newCourse.holeData[i]['length'] = document.getElementById('length'+i).value} } id={'length'+i}  />
                      </div>
                    </div>
                  )
                })}

              </Dialog>
            </div>
      </div>
      </MuiThemeProvider>
    );
  }
}



const mapStateToProps = (state, ownProps) =>{
  return {
    newCourse: state.newSeasonReducer.newCourse
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addCourseData: (courseDetails) =>{
      dispatch(addCourseData(courseDetails))
    },
    addNewCourse: (courseDetails) =>{
      dispatch(addNewCourse(courseDetails))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)
