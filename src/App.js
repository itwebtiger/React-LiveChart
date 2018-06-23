import React, { Component } from 'react';
import './App.css';
import ChartContainer from './components/chart/ChartContainer';
import NavBar from './components/NavBar/NavBar';
import SideNavContainer from './components/SideNav/SideNavContainer';
import configureStore from './appStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <NavBar />
            <SideNavContainer />
            <ChartContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
