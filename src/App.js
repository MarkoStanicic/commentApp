import React, { Component } from 'react';
import logo from './logo.svg';
import CommentBox from './components/CommentBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Comenting simple App</h2>
        </div>
        <div className="comment-box">
					<CommentBox />
				</div>
      </div>
    );
  }
}

export default App;
