import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import CoursesList from './CoursesList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <CoursesList />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
