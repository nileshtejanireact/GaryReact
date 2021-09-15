import React from 'react'



const Trainingzone = (props) => {
    return (
        <div className="filter-list-box">
            <div className="filter-list-img">
                <a href="#0">
                    <img src={props.training_zone_img} alt="Filter list" />
                    <div className="ext-cha-ic">
                        <img src={props.training_zone_icon} alt="icon" />
                    </div>
                </a>
                <div className="min-and-hours-table">
                    <p className="a5m">45m</p>
                </div>
            </div>
            <div className="ext-common-content">
                <div className="ext-cha-name">
                    <p className="article-lable-text-box">{props.article}</p>
                    <a href="#0">{props.training_zone_title}</a>
                </div>
                <div className="ext-common-desc">
                    <p>{props.training_zone_dec}</p>
                </div>
            </div>
        </div>
    )
}

export default Trainingzone




