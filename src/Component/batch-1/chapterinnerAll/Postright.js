import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

import ph_img_done_ic from '../../../assets/images/batch-1/ph-img-done-ic.svg';
import watch_ic from '../../../assets/images/batch-1/watch_ic.svg';


function PostRightsbox(props) {
  return (
    <div className="physics-details-box ph-done-process">
        <div className="ph-post-time">
        <p>
            <img src={watch_ic} alt="Watch" />
            <p>0:40</p>
        </p>
        </div>
        <div className="ph-image-title-block ">
            <div className="ph-image-hold">
                <img src={"http://localhost:3000/" + props.image}  alt="image" />
                <span className="ph-process-done-ic">
                    <img src={props.clockicon} alt="icon" />
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