import React, { useState } from 'react';
import { AddEntryForm } from './AddEntryForm';

const initialEntries: Entry[] = [];

interface Props {
}

export const JobExperience: React.FC<Props> = () => {
  // Initializing the list of entries
  const [entries, setEntries] = useState(initialEntries);

  interface EntryListProps {
    entries: Entry[];
  }

  const EntryList: React.FC<EntryListProps> = ({ entries}) => {
    // this maps out all of the entries
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
    // code for each of the job entries
    const [isEditing, setIsEditing] = useState(false);

    const [job, setJob] = useState(entry.job);
    const [location, setLocation] = useState(entry.location);
    const [startDate, setStartDate] = useState(entry.startDate);
    const [endDate, setEndDate] = useState(entry.endDate);
    const [responsibilities, setResponsibilities] = useState(entry.responsibilities);
    const [tools, setTools] = useState(entry.tools);

    function submitEdit(
      oldJobName:string,
      job:string,
      location:string,
      startDate:string,
      endDate:string,
      responsibilities:string,
      tools:string ) {
      setEntries(
        [...entries.filter((e: Entry) => {return e.job !== oldJobName}),
          {job ,location,startDate,endDate,responsibilities,tools} // new entry
        ]
      );
    }

    return isEditing ? (
      // isEditing === True
    <div className='job'>
      <form>
        <div className='formrow row'>
          <div className='col-sm-3'>Job:</div>
          <input
            className='col-sm-3'
            type="text"
            value={job}
            onChange={(e) =>{
              setJob(e.target.value)
            }}
          />
        </div>
        <div className='formrow row'>
          <div className='col-sm-3'>Location:</div>
          <input
            className='col-sm-3'
            type="text"
            value={location}
            onChange={(e) =>{
              setLocation(e.target.value)
            }}
          />
        </div>
        <div className='formrow row'>
          <div className='col-sm-3'>Start Date:</div>
          <input
            className='col-sm-3'
            type="text"
            value={startDate}
            onChange={(e) =>{
              setStartDate(e.target.value)
            }}
          />
          <div className='col-sm-3'>End Date:</div>
          <input
            className='col-sm-3'
            type="text"
            value={endDate}
            onChange={(e) =>{
              setEndDate(e.target.value)
            }}
          />
        </div>
        <div className='formrow row'>
          <div className='col-sm-3'>Responsibilities:</div>
          <input
            className='col-sm-3'
            type="text"
            value={responsibilities}
            onChange={(e) =>{
              setResponsibilities(e.target.value)
            }}
          />
        </div>
        <div className='formrow row'>
          <div className='col-sm-3'>Tools:</div>
          <input
            className='col-sm-3'
            type="text"
            value={tools}
            onChange={(e) =>{
              setTools(e.target.value)
            }}
          />
          <div className='col-sm-3'>
            <button
            type="submit"
            onClick={(e) => {
              e.preventDefault() // this makes sure it doesn't handle like a normal button and refreshes the page
              submitEdit(
                entry.job,
                job,
                location,
                startDate,
                endDate,
                responsibilities,
                tools)
            }}>
            Update
            </button>
          </div>
        </div>
      </form>
    </div>
    ) : (
      // isEditing === false
      <div className='job'>
        <div className='row'>
          <div className='jobtitle col'>{entry.job}</div>
          <div className='col icons'>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setEntries( // remove the entry using filter
                  entries.filter((e: Entry) => {
                    return e.job !== entry.job
                  })
                );
              }}
            >
              <img className='icon trashicon' src='./trash.svg'/>
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true)
              }}
            >
              <img className='icon editicon' src='./edit.svg'/>
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

  // add a new entry using the setEntries hook
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
    <div>
      <h2 className='col'>Enter your information:</h2>
      <EntryList entries={entries} />
      <AddEntryForm addEntry={addEntry} />
    </div>
  );
}