import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddEntryForm } from './components/AddEntryForm';
// import { EntryItem } from './components/EntryItem';

const initialEntries: Entry[] = [];

function App() {
  // Initializing the list of entries
  const [entries, setEntries] = useState(initialEntries);

  interface EntryListProps {
    entries: Entry[];
  }

  // functional component for the main part of the app down below
  const EntryList: React.FC<EntryListProps> = ({ entries}) => {
    return (
      <div>
        {entries.map((entry) => (
          <EntryItem key={entry.job} entry={entry}/>
        ))}
      </div>
    )
  }

  interface EntryItemProps {
    entry: Entry;
  }

  const EntryItem: React.FC<EntryItemProps> = ({ entry }) => {
    // code for each of the job entries to work right
    // still need to modify so the edit button works

    // delete button functionality
    function removeEntry(EntryToRemove: string): void {
      const itemList = entries.filter((entry: Entry) => {
        return entry.job !== EntryToRemove
      })
      setEntries(itemList);
    };

    return (
      <div className='job'>
        <div className='row'>
          <div className='jobtitle col'>{entry.job}</div>
          <div className='col-auto'/>
          <div className='col icons'>
            {/* could be prettier */}
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img className='icon' src='./edit.svg'/>
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                removeEntry(entry.job);
              }}
            >
              <img className='icon trashicon' src='./trash.svg'/>
            </button>
          </div>
        </div>
        <div>{entry.location}</div>
        <div>{entry.startDate} - {entry.endDate}</div>
        <div>Responsibilities: {entry.responsibilities}</div>
        <div>Tools: {entry.tools}</div>
      </div>
    )
  }

  // code to add a new entry using the setEntries hook
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
  
  // main app body
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
