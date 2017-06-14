import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Sidebar from './Sidebar'
import Ads from './Ads'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />
          <Sidebar />
          <Ads />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
