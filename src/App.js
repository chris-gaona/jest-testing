import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({ text }) => <div>{text}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='paragraph'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Welcome to React</h1>
      <Title text='some title' />
      <ul className='unordered-list'>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
      </ul>
    </div>
  );
}

class Link extends Component {
  render() {
    return (
      this.props.hide ? null : <a href={this.props.address}>Click</a>
    )
  }
}

export { App, Link }