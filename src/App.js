import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './site.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Subheader } from './components/Subheader';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subheader />
        <MainContent />
      </div>
    );
  }
}

export default App;
