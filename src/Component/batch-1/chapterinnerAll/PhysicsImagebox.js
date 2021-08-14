import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'

function PhysicsImagebox(props) {
  return (
    <div className="physics-header-nav">
        <div className="physics-title">
            <p>Physics {props.main_title}</p>
            <h3>Newton’s Laws{props.description}</h3>
        </div>
        <div className="physics-file-process">
            <p>{props.progressbar}% COMPLETED</p>
            <ProgressBar now={props.progressbar} className="common-progress"/>
        </div>
    </div>
  );
}

export default PhysicsImagebox;