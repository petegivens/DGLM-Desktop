import React, { Component } from 'react';
import AppBar from './Components/AppBar.js';
import Footer from './Components/Footer.js';
import SignUp from './Components/SignUp.js';
import AddCourse from './Components/AddCourse.js';
import NewSeason from './Components/NewSeason.js';
import Login from './Components/Login.js';
import AdminPanel from './Components/AdminPanel.js';
import SeasonView from './Components/SeasonView.js';
import store from './store.js'
import Home from './Views/Home.js';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Redirect
} from "react-browser-router";


import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      page: 'main'
    }
  }

  pageChange(page) {
    this.setState({ page: page })
  }

  render() {
      return (
        <Provider store={store}>
        <BrowserRouter>
          <div>
          <AppBar />
            <div>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/admin-panel' component={AdminPanel} />
            <Route path='/season-view' component={SeasonView} />
            <Route path='/app1' component={SignUp} />
            <Route path='/app2' component={AddCourse} />
            <Route path='/app3' component={NewSeason} />
            </div>
          <Footer />
          </div>
        </BrowserRouter>
        </Provider>
      )
  }
}
