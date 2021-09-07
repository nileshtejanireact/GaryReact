import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Programsslideritem = (props) => {
    return (
        <div className="physics-details-box ph-under-process mb-3-new" >
            <div className="ph-image-title-block align-items-start">
                <div className="ph-image-hold">
                    <img src={ props.sliderimg } alt="image1" />
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

const Openassessmentscom = (props) => {
    return(
        <div className="filter-list-box mb-3-new">
            <div className="filter-list-desc">
                <div className="filter-item-name">
                <h3><a href="#0">{props.assessmentstitle}</a></h3>
                </div>
                <div className="starts-due-date-block">
                <div className="starts-date-hold">
                    <p>STARTS</p>
                    <p>{props.assessmentsdate}</p>
                </div>
                <div className="starts-date-hold due-date-hold">
                    <p>DUE</p>
                    <p>{props.assessmentsdue}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Programsslideritem
export { Openassessmentscom };