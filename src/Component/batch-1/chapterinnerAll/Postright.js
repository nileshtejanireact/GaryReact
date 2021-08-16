import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

import watch_ic from '../../../assets/images/batch-1/watch_ic.svg';


function PostRightsbox(props) { 
    
    function getindexdata(indexdata) {
        const childindex = indexdata;
       props.onsaveindexdata(childindex);
    }
    

  return (
    <div className={props.activeclasses} onClick = {() => getindexdata(props.indexs)} >
        <div className="ph-post-time">
        <p>
            <img src={watch_ic} alt="Watch" />
            <span>0:40</span>
        </p>
        </div>
        <div className="ph-image-title-block ">
            <div className="ph-image-hold">
                <img src={props.image}  alt="bigimage" />
                <span className="ph-process-done-ic">
                    <img src={watch_ic} alt="icon" />
                </span>
            </div>
            <div className="ph-title-hold">
                <h3>{props.title}</h3>
                <p>ASSIGNED: MAR 31, 2021</p>
            </div>
        </div>
        <div className="ph-progress-bar">
            <ProgressBar now={props.progressbar} className="common-progress"/>

            <div className="ph-process-completed">
                <p>COMPLETED: APR 16, 2021</p>
                <p>{props.progressbar}% COMPLETED</p>
            </div>
        </div>
    </div>
  );
}

export default PostRightsbox;