import React, { useState } from 'react';

interface Props {
  addEntry: AddEntry;
}

export const AddEntryForm: React.FC<Props> = ({addEntry}) => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [tools, setTools] = useState('');

  return (
    <form>
      Job:
      <input
        type="text"
        value={job}
        onChange={(e) =>{
          setJob(e.target.value)
        }}
      />
      <br/>
      Location:
      <input
        type="text"
        value={location}
        onChange={(e) =>{
          setLocation(e.target.value)
        }}
      />
      <br/>
      Start Date:
      <input
        type="text"
        value={startDate}
        onChange={(e) =>{
          setStartDate(e.target.value)
        }}
      />
      End Date:
      <input
        type="text"
        value={endDate}
        onChange={(e) =>{
          setEndDate(e.target.value)
        }}
      />
      <br/>
      Responsibilities:
      <input
        type="text"
        value={responsibilities}
        onChange={(e) =>{
          setResponsibilities(e.target.value)
        }}
      />
      <br/>
      Tools:
      <input
        type="text"
        value={tools}
        onChange={(e) =>{
          setTools(e.target.value)
        }}
      />
      <button
      type="submit"
        onClick={(e) => {
          e.preventDefault(); // this makes sure it doesn't handle like a normal button and refresh the page
          addEntry(job, location, startDate, endDate, responsibilities, tools);
          // setJob(''); // this blanks out the box in the form
        }}
      >
      Add Job
      </button>
    </form>
  );
};