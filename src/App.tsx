import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddEntryForm } from './components/AddEntryForm';
import { EntryListItem } from './components/EntryListItem';
import { EntryList } from './components/EntryList';

const initialEntries: Entry[] = [];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry: AddEntry = (
    job: string,
    location: string,
    startDate: string,
    endDate: string,
    responsibilities: string,
    tools: string
  ) => {
    const newEntry = {job, location, startDate, endDate, responsibilities, tools};
    setEntries([...entries, newEntry]);
  };
  
  return (
    <div className="App">
      <header className="headerbar">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Logo goes Here
            </div>
            <div className="col-md">
              React Router link 1 here
            </div>
            <div className="col-md">
            React Router link 2 here
            </div>
          </div>
        </div>
      </header>
      <body>
        Welcome to resume builder 9000, enter your information:
        <EntryList entries={entries} />
        <AddEntryForm addEntry={addEntry} />
      </body>
    </div>
  );
}

export default App;
