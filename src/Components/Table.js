import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */


 export default class Tables extends Component {
   constructor(props){
     super(props);
     this.state={

     }
   }

   render() {
     console.log('#################', this.props)
     return (
       <MuiThemeProvider>
       <Table>
         <TableHeader headerStyle={{fontSize: 60}} displaySelectAll={false} >
           <TableRow  style={{color: 'grey', fontWeight: 'bold', fontSize: 35}}>
             <TableRowColumn>Park Name</TableRowColumn>
             <TableRowColumn>Season Name</TableRowColumn>
             <TableRowColumn>Address</TableRowColumn>
             <TableRowColumn>Total Rounds</TableRowColumn>
             <TableRowColumn>Round Status</TableRowColumn>
           </TableRow>
         </TableHeader>
         <TableBody style={{textAlign: 'center', paddingLeft: 20, fontSize: 25, fontWeight: 'bold'}} displayRowCheckbox={false}>
          {
            this.props.pro.seasons.map((season, i) => {
              return (
                <TableRow>
                <TableRowColumn style={{width: 20}}></TableRowColumn>
                  <TableRowColumn>{this.props.pro.parkName}</TableRowColumn>
                  <TableRowColumn>{season.name}</TableRowColumn>
                  <TableRowColumn>{this.props.pro.address}</TableRowColumn>
                  <TableRowColumn>{this.props.pro.holeCount}</TableRowColumn>
                  <TableRowColumn>{season.currentRound}/{season.roundCount}</TableRowColumn>
                </TableRow>
              )
            })
          }
         </TableBody>
       </Table>
       </MuiThemeProvider>
     );
   }
 }
