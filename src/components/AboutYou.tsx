import React, { useState } from 'react';

interface Props {
}

const initialAbout: String[] = [];

export const AboutYou: React.FC<Props> = () => {
  const [name, setname] = useState('');
  const [location, setlocation] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const keys = ['name', 'location', 'email', 'number']
  const rendered = keys.map((key) =>
    <div className='formrow row'>
      <div className='col-sm-2'>
        {key}:
        </div>
      <input className='col-sm-4' type='text' value={eval(key)} onChange={(e) =>{eval('set'+key+'(e.target.value)')}}/>
    </div>
  );
  return(
    <div>
      <h2 className='col'>About You:</h2>
      <form>
        {rendered}
        <div className='formrow row justify-content-end'>
          <button
          type="submit"
            onClick={(e) => {
              e.preventDefault(); // this makes sure it doesn't handle like a normal button and refresh the page
              // addEntry(job, location, startDate, endDate, responsibilities, tools); // need to change this
            }}
          >
          Submit
          </button>
        </div>
      </form>
    </div>
  )
}