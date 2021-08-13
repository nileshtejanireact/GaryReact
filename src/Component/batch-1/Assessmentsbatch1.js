import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'

import top_to_bottom_icon from '../../assets/images/batch-1/top-to-bottom-icon.svg';
import bottom_to_top_icon from '../../assets/images/batch-1/botton-to-top-icon.svg';
import asse_item_bg from '../../assets/images/batch-1/asse-item-bg.png';

import home_svg from '../../assets/images/batch-1/home.svg';

const assessments_data = [
    {
        id: "assessments_blog_1",
        assessments_blog_img: asse_item_bg,
        assess_item_name: "Physics",
        modules_label: "IN PROGRESS",
        filter_item_post_name: "Quiz",
        filter_item_name: "Formative Assessment 1",
        starts_text: "STARTS",
        starts_date: "Sun, 31 Mar | 9:30 AM",
        starts_hold: "DUE",
        starts_date_hold: "Sun, 6 Apr | 10:00 AM"
    },
    {
        id: "assessments_blog_2",
        assessments_blog_img: asse_item_bg,
        assess_item_name: "Mathematics",
        modules_label: "YET TO START",
        filter_item_post_name: "Quiz",
        filter_item_name: "Weekly Math Quiz",
        starts_text: "STARTS",
        starts_date: "Sun, 31 Mar | 9:30 AM",
        starts_hold: "DUE",
        starts_date_hold: "Sun, 6 Apr | 10:00 AM"
    }
]


const Assessments = (props) => {

    const [dropdownData, setdropdownData] = useState('Name');
    const [filterdropdownData, setfilterdropdownData] = useState('In Progres…');

    const toggleData = (data) => {
        setdropdownData(data);
    }
    
    const filtertoggleData = (data) => {
        setfilterdropdownData(data);
    }

  return (
    <div className="main-content-wrapper">
        <div className="common-padding-content">

            <div className="common-breadcrumb-block">
                <div className="breadcrumb-left-col">
                    <div className="breadcrumb-ul">
                        <ul>
                            <li>
                                <a href="#0"><img src={home_svg} alt="home" /></a>
                            </li>
                            <li className="active">
                                <span>Assessments</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="breadcrumb-right-col"></div>
            </div>
        
            <div className="common-filter-block">
                <div className="cm-filter-left-col">
                    <div className="filter-note">
                        <p><span>Filter:</span> In Progress and Yet to Start</p>
                    </div>
                </div>
                <div className="cm-filter-right-col">
                    <div className="filter-content-block">
                        <div className="filter-sort-label">
                            <h3>Sort by</h3>
                        </div>
                        <div className="filter-box">
                            <ul>
                                <li>
                                    <div className="common-dropdown">
                                        <Dropdown >
                                            <Dropdown.Toggle id="dropdown-basic">
                                                {dropdownData}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" onClick={() => toggleData('A to Z')}>A to Z</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2" onClick={() => toggleData('Z to A')}>Z to A</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3" onClick={() => toggleData('Long')}>Long</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4" onClick={() => toggleData('Short')}>Short</Dropdown.Item>
                                                <Dropdown.Item href="#/action-5" onClick={() => toggleData('Something else here')}>Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                                <li>
                                    <div className="filter-up-down-check filter-trigger">
                                        <button className="up-down-box ">
                                            <img src={top_to_bottom_icon} alt="top icon" />
                                        </button>
                                        <button className="up-down-box">
                                            <img src={bottom_to_top_icon} alt="top icon" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-box">
                            <ul>
                                <li>
                                    <div className="common-dropdown">
                                        <Dropdown >
                                            <Dropdown.Toggle id="dropdown-basic2">
                                                {filterdropdownData}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" onClick={() => filtertoggleData('A to Z')}>A to Z</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2" onClick={() => filtertoggleData('Z to A')}>Z to A</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3" onClick={() => filtertoggleData('Long')}>Long</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4" onClick={() => filtertoggleData('Short')}>Short</Dropdown.Item>
                                                <Dropdown.Item href="#/action-5" onClick={() => filtertoggleData('Something else here')}>Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter-list-wrapper assess-list-wrapper">
                <div className="row">
                    {
                        assessments_data.map((val) => {
                            return(
                                <div className="fl-col col-sm-6 col-md-4 col-lg-3" key={val.id}>
                                    <div className="filter-list-box">
                                        <div className="filter-list-img">
                                            <a href="#0">
                                                <img src={val.assessments_blog_img} alt="Filter list" />
                                                <h3 className="assess-item-name">{val.assess_item_name}</h3>
                                                <span className="modules-label">{val.modules_label}</span>
                                            </a>
                                        </div>
                                        <div className="filter-list-desc">
                                            <div className="filter-item-post-date">
                                                <p>{val.filter_item_post_name}</p>
                                            </div>
                                            <div className="filter-item-name">
                                                <h3><a href="#0">{val.filter_item_name}</a></h3>
                                            </div>
                                            <div className="starts-due-date-block">
                                                <div className="starts-date-hold">
                                                    <p>{val.starts_text}</p>
                                                    <p>{val.starts_date}</p>
                                                </div>
                                                <div className="starts-date-hold due-date-hold">
                                                    <p>{val.starts_hold}</p>
                                                    <p>{val.starts_date_hold}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Assessments;