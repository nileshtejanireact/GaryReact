
import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown'
import ProgressBar from 'react-bootstrap/ProgressBar'

import homesvg from '../../assets/images/batch-1/home.svg';
import top_to_bottom_icon from '../../assets/images/batch-1/top-to-bottom-icon.svg';
import bottom_to_top_icon from '../../assets/images/batch-1/botton-to-top-icon.svg';
import grid_view_icon from '../../assets/images/batch-1/grid_view-icon.svg';
import list_icon from '../../assets/images/batch-1/list-icon.svg';

import filter_list1 from '../../assets/images/batch-1/filter-list1.png';
import filter_list2 from '../../assets/images/batch-1/filter-list2.png';
import filter_list3 from '../../assets/images/batch-1/filter-list3.png';
import filter_list4 from '../../assets/images/batch-1/filter-list4.png';
import filter_list5 from '../../assets/images/batch-1/filter-list5.png';
import filter_list6 from '../../assets/images/batch-1/filter-list6.png';
import filter_list7 from '../../assets/images/batch-1/filter-list7.png';

const home_blog_data = [
    {
        id:"home_blog_data1",
        home_blog_img: filter_list1,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Force, Work and Energy",
        home_blog_pogress: 73
    },
    {
        id:"home_blog_data2",
        home_blog_img: filter_list2,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Evaporation",
        home_blog_pogress: 100
    },
    {
        id:"home_blog_data3",
        home_blog_img: filter_list3,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Static Electricity",
        home_blog_pogress: 41
    },
    {
        id:"home_blog_data4",
        home_blog_img: filter_list4,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Source of Energy",
        home_blog_pogress: 41
    },
    {
        id:"home_blog_data5",
        home_blog_img: filter_list5,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Mass and Weight",
        home_blog_pogress: 73
    },
    {
        id:"home_blog_data6",
        home_blog_img: filter_list6,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Fluids",
        home_blog_pogress: 100
    },
    {
        id:"home_blog_data7",
        home_blog_img: filter_list7,
        home_modules: 2,
        min_credits: 14,
        max_credits: 20,
        home_blog_title: "Physics Fundamentals",
        home_blog_pogress: 41
    }
]


function Home_batch_1(props) {
  return (
    <div className="main-content-wrapper">
        <div className="common-padding-content">
            <div className="common-breadcrumb-block">
                <div className="breadcrumb-left-col">
                    <div className="breadcrumb-ul">
                        <ul>
                            <li>
                                <a><img src={homesvg} alt="home" /></a>
                            </li>
                            <li>
                                <a>Subjects</a>
                            </li>
                            <li className="active">
                                <span>Physics</span>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="breadcrumb-right-col"></div>
        </div>

            <div className="common-filter-block">
                <div className="cm-filter-left-col"></div>

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
                                                Sequence
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
                                        <button className="up-down-box active">
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
                                                Filter by
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
                                    <div className="filter-up-down-check grid-list-trigger">
                                        <button className="up-down-box active">
                                            <img src={grid_view_icon} alt="top icon" />
                                        </button>
                                        <button className="up-down-box">
                                            <img src={list_icon} alt="top icon" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter-list-wrapper">
                <div className="row">

                    {
                        home_blog_data.map((val, index) => {
                            return(
                                <div className="fl-col col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="filter-list-box">
                                        <div className="filter-list-img">
                                            <a href="#0">
                                                <img src={val.home_blog_img} alt="Filter list"/>
                                                <span className="modules-label">{val.home_modules} MODULES</span>
                                            </a>
                                        </div>
                                        <div className="filter-list-desc">
                                            <div className="filter-item-post-date">
                                                <p>{val.min_credits} / {val.max_credits} CREDITS</p>
                                            </div>
                                            <div className="filter-item-name">
                                                <h3><a href="#0">{val.home_blog_title}</a></h3>
                                            </div>
                                            <div className="filter-item-progress">
                                                <ProgressBar now={val.home_blog_pogress} />
                                                <p><span>{val.home_blog_pogress}%</span> COMPLETED</p>
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

export default Home_batch_1;
