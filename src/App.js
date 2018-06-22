import React, { Component } from 'react';
import './App.css';
import ChartContainer from './components/chart/ChartContainer';
import data from '../src/mock/legacyDataDump';
import NavBar from './components/Nav/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ChartContainer data={data} />
      </div>
    );
  }
}

export default App;
