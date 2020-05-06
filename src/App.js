import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: '' ,
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  };
    render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.handleChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
