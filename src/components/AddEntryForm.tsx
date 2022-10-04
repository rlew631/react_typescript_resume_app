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
            e.preventDefault(); // this makes sure it doesn't handle like a normal button and refresh the page
            addEntry(job, location, startDate, endDate, responsibilities, tools);
            // setJob(''); // this blanks out the box in the form
          }}>
          Add Job
          </button>
        </div>
      </div>
    </form>
  );
};