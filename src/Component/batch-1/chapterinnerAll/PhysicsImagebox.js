import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'

function PhysicsImagebox(props) {
  return (
    <div className="physics-header-nav">
        <div className="physics-title">
            <p>{props.category}</p>
            <h3>{props.title}</h3>
        </div>
        <div className="physics-file-process">
            <p>{props.progressbar}% COMPLETED</p>
            <ProgressBar now={props.progressbar} className="common-progress"/>
        </div>
    </div>
  );
}

export default PhysicsImagebox;