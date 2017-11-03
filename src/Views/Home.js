import React, { Component } from 'react';

import Header from '.././Components/Header.js';
import Credits from '.././Components/Credits.js';
import FeatureOne from '.././Components/FeatureOne.js';
import FeatureTwo from '.././Components/FeatureTwo.js';
import FeatureThree from '.././Components/FeatureThree.js';
import Services from '.././Components/Services.js';




export default class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      username: 'test',
      password: 'test'
    }

  }



  render() {
      return (
          <div>
            <div id='app-background'>
              <Header />
            </div>
            <Services id='test' />
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />
            <Credits />
          </div>
      )
  }
}



// if (this.state.page === 'signup'){
//   return (
//     <div>
      // <AppBar />
      // <SignUp pageChange={this.pageChange.bind(this)} />
      // <Footer />
//     </div>
//   )
// } else if (this.state.page === 'main'){
//   return (
//     <div>
//       <AppBar pageChange={this.pageChange.bind(this)} style={{position: 'fixed'}} />
//
//       <div id='app-background'>
//         <Header />
//       </div>
//       <Services id='test' />
//       <FeatureOne />
//       <FeatureTwo />
//       <FeatureThree />
//       <Credits />
//
//       <Footer />
//     </div>
//   );
// } else if (this.state.page === 'add') {
//   return (
//     <div>
//       <AppBar />
//         <AddCourse  />
//       <Footer />
//     </div>
//   )
// } else {
//   return (
//     <div>
//       <AppBar />
//         <NewSeason />
//       <Footer />
//     </div>
//   )
// }
