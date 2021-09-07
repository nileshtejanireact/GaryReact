import React, { useState } from 'react'

import EmployeesData from '../batch-3/dashboardtrainee01innerAll/dashboarddata'
import Programtable from '../batch-3/dashboardtrainee01innerAll/dashboardtable'
import { Assessmentstable } from '../batch-3/dashboardtrainee01innerAll/dashboardtable'
import TrainersLeaderchart from '../batch-3/dashboardtrainee01innerAll/dashboardchart'
import Trainingzone from '../batch-3/dashboardtrainee02innerAll/trainingzone'
import { training_zone } from '../batch-3/dashboardtrainee01innerAll/dashboarddata'

import resize_icon from '../../assets/images/dashboard/resize-icon.svg'
import ifst from '../../assets/images/dashboard/ifst.png'
import shape from '../../assets/images/dashboard/shape.svg'
import rectangle from '../../assets/images/dashboard/rectangle.png'
import wise_1 from '../../assets/images/dashboard/wise-1.svg'
import wise_2 from '../../assets/images/dashboard/wise-2.png'


const Dashboardtrainee02 = () => {
    const [seemore, setseemore] = useState(false);

    const seemorefn = (event) => {
        // event
        setseemore(true);
    }

    return (
        <div className="main-content-wrapper dashboard-page-2 common-dashboard-page">
            <div className="common-padding-content">
                <div className="common-dashboard-good-afternoon-wrapper">
                    <div className="good-afternoon-title">
                        <h2>Good Afternoon, Ajit</h2>
                    </div>

                    <div className="common-good-afternoon-details">
                        <div className="row">
                        {
                            EmployeesData.map((val, index) => {
                                return(
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="good-afternoon-details-wrapper">
                                            <div className="media good-afternoon-media align-items-center">
                                                <div className="media-body">
                                                    <p className="good-afternoon-media-sub-title">{val.employeestitle}</p>
                                                    <h2 className="good-afternoon-media-title">{val.employeenumber} <sub>{index === 0 ? `(${val.employees} Employees)` : ""}</sub></h2>
                                                </div>
                                                <div className="media-image">
                                                    <img src={val.employeeimage} alt="afternoon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-12 data-trainer-wrapper">
                            <div className="data-table-wrapper">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6 col-12 data-table-1-wrapper">
                                        <div className="data-table-details">
                                            <div className="common-section-title">
                                                <h4><span>My Programs</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                            </div>

                                            <div className="data-table-block">
                                                <Programtable />

                                                <div className="pagination-wrapper">
                                                    <div className="pagination-inner-wrapper">
                                                        <div className="previous-btn"><a href="#0" className="pagination-btn-w">Previous</a></div>
                                                        <div className="pagination-text">Page 1 of 1</div>
                                                        <div className="next-btn"><a href="#0" className="pagination-btn-w">Next</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-lg-6 col-12 data-table-2-wrapper">
                                        <div className="data-table-details">
                                            <div className="common-section-title">
                                                <h4><span>My Assessments</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                            </div>

                                            <div className="data-table-block">
                                                <Assessmentstable />

                                                <div className="pagination-wrapper">
                                                    <div className="pagination-inner-wrapper">
                                                        <div className="previous-btn"><a href="#0" className="pagination-btn-w">Previous</a></div>
                                                        <div className="pagination-text">Page 1 of 1</div>
                                                        <div className="next-btn"><a href="#0" className="pagination-btn-w">Next</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="trainer-latest-wrapper">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="common-section-title">
                                            <h4><span>Trainer’s Leader Board</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                        </div>  

                                        <TrainersLeaderchart />
                                    </div>

                                    <div className="col-12 mt_5">
                                        <div className="common-section-title">
                                            <h4><span>Latest in Training Zone</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                        </div>

                                        <div className="row latest-in-training-zone">

                                            {
                                                training_zone.map((val, index) => {
                                                    return(
                                                        <div className="fl-col col-12 col-sm-6 col-lg-6 col-xl-3">
                                                            <Trainingzone 
                                                                id={val.id}
                                                                article={val.article}
                                                                training_zone_img={val.training_zone_img}
                                                                training_zone_icon={val.training_zone_icon}
                                                                training_zone_title={val.training_zone_title}
                                                                training_zone_dec={val.training_zone_dec}
                                                                key={index}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 newsfeed-main-wrapper">
                            <div className="common-right-bar">
                                <div className="right-bar-wrapper">
                                    <div className="newsfeed">
                                        <h3 className="newsfeed-title">
                                            Newsfeed
                                        </h3>
                                        <div className="recommended-course">
                                            <p className="right-side-bar-secion-sub-title">Recommended Course</p>
                                            <h6 className="right-side-bar-secion-title">Christy, check out this course for you</h6>
                                            <div className="induction-for-sales-team">
                                                <div className="media induction-media">
                                                    <div className="media-induction-image">
                                                        <img src={ifst} alt="afternoon" />
                                                    </div>
                                                    <div className="media-body induction-media-body">
                                                        <div className="induction-details">
                                                            <h3>Induction for Sales Team</h3>
                                                            <p>Induction for Sales Team</p>
                                                        </div>
                                                        <p>60 credits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="articles-and-videos">
                                        <p className="right-side-bar-secion-sub-title">Articles and videos from knowledge shelf</p>
                                        <h6 className="right-side-bar-secion-title">You might like</h6>

                                        <div className="kickstarting-your active">
                                            <div className="media kickstarting-your-media">
                                                <div className="media-body kickstarting-your-media-body">
                                                    <h3>Kickstarting your entrepreneurial journey in your late 30s</h3>
                                                </div>
                                                <div className="kickstarting-media-img">
                                                    <div className="kickstarting-img-wrapper">
                                                        <img src={shape} alt="afternoon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="entrepreneurship-is-the-ability">Entrepreneurship is the ability and readiness to develop, organize and run a business enterprise, along with any of …</p>
                                        </div>
                                        <div className={seemore === true ? `kickstarting-your active` : `kickstarting-your`} >
                                            <div className="media kickstarting-your-media">
                                                <div className="media-body kickstarting-your-media-body">
                                                    <h3>Kickstarting your entrepreneurial journey in your late 30s</h3>
                                                </div>
                                                <div className="kickstarting-media-img">
                                                    <div className="kickstarting-img-wrapper">
                                                        <img src={shape} alt="afternoon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="entrepreneurship-is-the-ability">Entrepreneurship is the ability and readiness to develop, organize and run a business enterprise, along with any of …</p>
                                        </div>
                                        <div className={seemore === true ? `kickstarting-your active` : `kickstarting-your`}>
                                            <div className="media kickstarting-your-media">
                                                <div className="media-body kickstarting-your-media-body">
                                                    <h3>Kickstarting your entrepreneurial journey in your late 30s</h3>
                                                </div>
                                                <div className="kickstarting-media-img">
                                                    <div className="kickstarting-img-wrapper">
                                                        <img src={shape} alt="afternoon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="entrepreneurship-is-the-ability">Entrepreneurship is the ability and readiness to develop, organize and run a business enterprise, along with any of …</p>
                                        </div>
                                        <div className="see-more-wrapper">
                                            {
                                                !seemore && <a href="javascriptVoid(0)" id="seeMore" className="see-more" onClick={seemorefn} >See more</a>
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="anita-sharma-wrapper">
                                        <h6 className="anita-sharma-title"><b>Anita Sharma</b> from Sales Department recently completed a module</h6>
                                        <div className="induction-for-sales-team">
                                            <div className="media induction-media align-items-center">
                                                <div className="media-induction-image">
                                                    <img src={rectangle} alt="afternoon" />
                                                </div>
                                                <div className="media-body induction-media-body">
                                                    <div className="induction-details">
                                                        <h3>Key to winning clients</h3>
                                                        <p>HSE Business Academy - Sales 2.0</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-achievement">
                                        <p className="right-side-bar-secion-sub-title">NEW ACHIEVEMENT</p>
                                        <h6 className="right-side-bar-secion-title">You’re doing awesome! First out of 10 in your department to finish the module</h6>
                                        <div className="new-achievement-inner-wrapper text-center">
                                            <div className="wise-image-wrapper">
                                                <div className="wise-image-box">
                                                    <img src={wise_2} alt="afternoon" />
                                                </div>
                                                <div className="wise-image-box">
                                                    <img src={wise_1} alt="afternoon" />
                                                </div>
                                            </div>
                                            <h2 className="Heres-to-working">Here’s to working hard and making it to #1, Christy! Keep it up</h2>
                                            <p className="working-date">29 Feb 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Dashboardtrainee02
