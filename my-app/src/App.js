import React from 'react';
import './App.css';
import About from './About';
import DiaryList from './DiaryList';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <DiaryList />
      <header className="App-header">
        <p>
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
    </div>
  );
}

export default App;
