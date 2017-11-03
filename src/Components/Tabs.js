import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';// IDEA:
import Options from './Options.js';
import Table from './Table.js';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div style={{width: '80%', marginLeft: '10%', marginRight: '10%', border: '3px solid #e5e5e5'}}>
        <Tabs
        style={{color: 'black'}}
          onChange={this.handleChange}
        >
          <Tab style={{backgroundColor: 'black', fontSize: 20, fontWeight: 'bold'}} label={this.props.myLabel} value={0} />
        </Tabs>
        <SwipeableViews
        >
          <div>
          <Options  />
          <Table pro={this.props}/>
          </div>
          <div style={styles.slide}>
          <Options  />
          <Table pro={this.props}/>

          </div>
          <div style={styles.slide}>
          <Options  />
          <Table pro={this.props}/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
