import React from 'react';

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
  return (
    <div className="main-content-wrapper">
        <div className="common-padding-content">

            <div className="common-breadcrumb-block">
                <div className="breadcrumb-left-col">
                    <div className="breadcrumb-ul">
                        <ul>
                            <li>
                                <a><img src={home_svg} alt="home" /></a>
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
                                                Name
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">A to Z</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Z to A</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Long</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">Short</Dropdown.Item>
                                                <Dropdown.Item href="#/action-5">Something else here</Dropdown.Item>
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
                                                Name
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">A to Z</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Z to A</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Long</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">Short</Dropdown.Item>
                                                <Dropdown.Item href="#/action-5">Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="filter-list-wrapper assess-list-wrapper">
                <div class="row">
                    {
                        assessments_data.map((val) => {
                            return(
                                <div class="fl-col col-sm-6 col-md-4 col-lg-3" key="{val.id}">
                                    <div class="filter-list-box">
                                        <div class="filter-list-img">
                                            <a href="#0">
                                                <img src={val.assessments_blog_img} alt="Filter list" />
                                                <h3 class="assess-item-name">{val.assess_item_name}</h3>
                                                <span class="modules-label">{val.modules_label}</span>
                                            </a>
                                        </div>
                                        <div class="filter-list-desc">
                                            <div class="filter-item-post-date">
                                                <p>{val.filter_item_post_name}</p>
                                            </div>
                                            <div class="filter-item-name">
                                                <h3><a href="#0">{val.filter_item_name}</a></h3>
                                            </div>
                                            <div class="starts-due-date-block">
                                                <div class="starts-date-hold">
                                                    <p>{val.starts_text}</p>
                                                    <p>{val.starts_date}</p>
                                                </div>
                                                <div class="starts-date-hold due-date-hold">
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