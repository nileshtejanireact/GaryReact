import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

import homesvg from '../../assets/images/batch-1/home.svg';
import searchicon from '../../assets/images/batch-1/search-icon.svg';
import filtericon from '../../assets/images/batch-1/filter-icon.svg';
import hselogo from '../../assets/images/batch-1/hse-logo.svg';
import Card from "react-bootstrap/Card";

function Externalchannels() {
  return (
    <div className="main-content-wrapper main-external-channels-wrapper">
        <div className="common-padding-content">

            <div className="common-breadcrumb-block">
                <div className="breadcrumb-left-col">
                    <div className="breadcrumb-ul">
                        <ul>
                            <li>
                                <a><img src={homesvg} alt="home" /></a>
                            </li>
                            <li className="active">
                                <span>Knowledge Shelves</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="breadcrumb-right-col"></div>
            </div>

            <div className="common-filter-block">
                <div className="cm-filter-left-col">
                    <div className="common-head-logo-title">
                        <img src={hselogo} alt="Hse" />
                        <h3>HSE Regulations & Trends</h3>
                    </div>
                </div>

                <div className="cm-filter-right-col">
                    <div className="filter-content-block">
                        <div className="filter-box">
                            <ul>
                                <li>
                                    <div className="common-search-hold">
                                        <input type="text" placeholder="Search by keyword" />
                                        <span className="search-icon"><img src={searchicon} alt="search" /></span>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="common-dropdown">
                                        <div className="cm-dropdown filter-show-trigger">
                                            <button className="btn dropdown-toggle" type="button" >
                                                <img src={filtericon} alt="filter-icon" />
                                                Filter
                                            </button>
                                        </div>
                                    </div> */}
                                    
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Click me!
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Externalchannels;