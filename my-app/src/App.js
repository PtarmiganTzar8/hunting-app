import React, { useState, useEffect } from 'react';
import './App.css';
import About from './About';
import JournalList from './JournalList';
import Navbar from './Navbar';
import JournalForm from './JournalForm';


function App() {
const [excursionList, setExcursionList] = useState([])

useEffect(()=> {
  fetch("http://localhost:3000/excursions")
  .then((r) => r.json())
  .then((data) => setExcursionList(data));
}, []);

function handleNewExcursion(newExcursion) {
  setExcursionList([...excursionList, newExcursion])
}

  return (
    <div className="App">
      <Navbar />
      <About />
      <JournalList excursions={excursionList} />
      <JournalForm onNewExcursion={handleNewExcursion} />
    </div>
  );
}

export default App;



{/* <div className="App">
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
    </div> */}