import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';

// class SearchBar extends React.Component {
//     render() {
//         return (
//             <input type="text" placeholder="Enter your search term" name="" />
//         )
//     }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <SearchBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
