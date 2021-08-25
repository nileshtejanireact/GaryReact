import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Programsslideritem = (props) => {
    return (
        <div className="physics-details-box ph-under-process mb-3-new" >
            <div className="ph-image-title-block align-items-start">
                <div className="ph-image-hold">
                    <img src={ props.sliderimg } alt="image" />
                </div>
                <div className="ph-title-hold">
                    <h3>{ props.slidertitle }</h3>
                    <p>{props.sliderdec }</p>
                </div>
            </div>
            <div className="ph-progress-bar">
                <div className="ph-process-completed justify-content-end">
                    <p>{props.time}</p>
                </div>
                <ProgressBar now={props.sliderprogress} className="common-progress"/>
            </div>
        </div>
    )
}

export default Programsslideritem
