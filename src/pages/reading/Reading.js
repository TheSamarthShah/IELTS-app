import React from 'react';
import './reading.css'
export default function Reading() {
  return (
    <>
    <div className="body">
      <div className="container">
        <div className="card">
          <div className="circle">
          <h2>Level 01</h2>
          </div>
          <div className="content"><p>
            In Level 01 you will be going to learn basic concepts and how to approach this section in eaxm and real world too!
          </p>
          <a href="/reading/level1">Go</a>
          
          </div>
          </div>

          <div className="card">
          <div className="circle">
          <h2>Level 02</h2>
          </div>
          <div className="content"><p>
          In Level 02 you will be going to learn the advance concepts and the quality of the questions will be high!
          </p>
          <a href="/reading/level2">Go</a>
          
          </div>
          </div>

          <div className="card">
          <div className="circle">
          <h2>Level 03</h2>
          </div>
          <div className="content"><p>
          In Level 03 you will be facing tough questions and more focus will be on speed of solving!
          </p>
          <a href="/reading/level3">Go</a>
          </div>
          </div>
      </div>
      </div>
    </>
  );
}
