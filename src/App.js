import React, { Component } from 'react';
import { HomeBody,Footer, NavBar } from './containers'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomeBody />
        <Footer />
      </div>
    )
  }
}

export default App
