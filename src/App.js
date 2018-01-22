import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Subheader } from './components/Subheader';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Subheader />
      </div>
    );
  }
}
