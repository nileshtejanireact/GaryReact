import React, {useRef} from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

import watch_ic from '../../../assets/images/batch-1/watch_ic.svg';
import ph_img_done_ic from '../../../assets/images/batch-1/ph-img-done-ic.svg';


function Postright(props) { 
    
    function getindexdata(indexdata) {
       props.onsaveindexdata(indexdata);
    }

    function getindexdata2(indexdata2) {
        console.log(indexdata2)
        props.onsaveindexdata2(indexdata2)
     }
    
  return (
    <div className={props.activeclasses}  onClick = {() => {getindexdata(props.index); getindexdata2(props.keys)}} >
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
                    <img src={ph_img_done_ic} alt="icon" />
                </span>
            </div>
            <div className="ph-title-hold">
                <h3>{props.title}</h3>
                <p>ASSIGNED: {props.assigneddate}</p>
            </div>
        </div>
        <div className="ph-progress-bar">
            <ProgressBar now={props.progressbar} className="common-progress"/>

            <div className="ph-process-completed">
                <p>COMPLETED: {props.completeddate}</p>
                <p>{props.progressbar}% COMPLETED</p>
            </div>
        </div>
    </div>
  );
}

export default Postright;