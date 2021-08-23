import React from 'react'



const Trainingzone = (props) => {
    return (
        <div class="filter-list-box">
            <div class="filter-list-img">
                <a href="#0">
                    <img src={props.training_zone_img} alt="Filter list" />
                    <div class="ext-cha-ic">
                        <img src={props.training_zone_icon} alt="icon" />
                    </div>
                </a>
                <div class="min-and-hours-table">
                    <p class="a5m">45m</p>
                </div>
            </div>
            <div class="ext-common-content">
                <div class="ext-cha-name">
                    <p class="article-lable-text-box">{props.article}</p>
                    <a href="#0">{props.training_zone_title}</a>
                </div>
                <div class="ext-common-desc">
                    <p>{props.training_zone_dec}</p>
                </div>
            </div>
        </div>
    )
}

export default Trainingzone




