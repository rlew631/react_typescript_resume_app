import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JobExperience } from './components/JobExperience';

function App() {
  // main app body
  const steps = [
    {name: 'StepOne', component: <div>hi1</div>},
    {name: 'StepTwo', component: <div>hi2</div>},
    {name: 'StepThree', component: <div>hi3</div>},
    {name: 'StepFour', component: <div>hi4</div>}
  ];
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
        <JobExperience/>
      </body>
    </div>
  );
}

export default App;
