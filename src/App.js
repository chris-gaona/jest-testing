import React from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>

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
      <ul className='unordered-list'>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
      </ul>
      <Test />
    </div>
  );
}

export default App;
