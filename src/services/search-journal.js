import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class searchJournal extends Component {

  componentDidMount() {
    axios.get('http://localhost:8090/journal',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(results => console.log(results.data[0]))
    }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default searchJournal;
