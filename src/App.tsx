import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JobExperience } from './components/JobExperience';
import { Steps, StepsProvider, useSteps } from "react-step-builder";

function App() {
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
        <StepsProvider>
          <MySteps />
        </StepsProvider>
      </body>
    </div>
  );
}
const MySteps = () => {
  // const { next, prev } = useSteps();
  // see: https://codesandbox.io/s/react-step-builder-v3-5625v?file=/src/App.tsx:146-212
  const { prev, next, jump, total, current, progress } = useSteps();

  return (
    <div className="steps_wrapper">
      <Steps>
        <div className="step">
          <JobExperience/>
        </div>
        <div className="step">
          <h1>Step 2</h1>
        </div>
        <div className="step">
          <h1>Step 3</h1>
        </div>
      </Steps>
      <div className="navigation">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
        {/* <button onClick={() => jump(2)}>Jump to Step 2</button> */}
      </div>
      <div className="steps_data">
        <span className='step_progress'>Total Steps: {total}</span>
        <span className='step_progress'>Current Step: {current}</span>
        <span className='step_progress'>Progress: {progress * 100}%</span>
      </div>
    </div>
  );
};

export default App;
