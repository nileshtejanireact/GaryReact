import React, { useState } from 'react'

import { EmployeesData3, programsslider, Openassessments } from '../../Component/batch-3/dashboardtrainee01innerAll/dashboarddata'
import Programsslideritem, { Openassessmentscom } from '../../Component/batch-3/dashboardtrainee01innerAll/programsslideritem'
import $ from "jquery"
// import Programtable from '../batch-3/dashboardtrainee01innerAll/dashboardtable'
// import { Assessmentstable } from '../batch-3/dashboardtrainee01innerAll/dashboardtable'
// import TrainersLeaderchart from '../batch-3/dashboardtrainee01innerAll/dashboardchart'
// import Trainingzone from '../batch-3/dashboardtrainee02innerAll/trainingzone'
// import { training_zone } from '../batch-3/dashboardtrainee01innerAll/dashboarddata'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// import resize_icon from '../../assets/images/dashboard/resize-icon.svg'
import ifst from '../../assets/images/dashboard/ifst.png'
import shape from '../../assets/images/dashboard/shape.svg'
import rectangle from '../../assets/images/dashboard/rectangle.png'
import wise_1 from '../../assets/images/dashboard/wise-1.svg'
import wise_2 from '../../assets/images/dashboard/wise-2.png'
// import ph_image from '../../assets/images/dashboard/ph-image.png'
    

const Dashboardtrainee03 = (props) => {
    const [seemore, setseemore] = useState(false);

    const seemorefn = (event) => {
        // event
        setseemore(true);
    }


    var data1 = JSON.stringify(programsslider);
    var data2 = JSON.parse(data1);
    var groupedData1 = [];

    while(data2.length) {
        groupedData1.push(data2.splice(0, 2));
    }

    var assessmentsdata1 = JSON.stringify(Openassessments);
    var assessmentsdata2 = JSON.parse(assessmentsdata1);
    var groupedData2 = [];

    while(assessmentsdata2.length) {
        groupedData2.push(assessmentsdata2.splice(0, 2));
    }

    function startTimer(duration, display) {
        var timer = duration,
            minutes,
            seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        var fiveMinutes = 60 * 15,
            display = document.querySelector("#time");
        startTimer(fiveMinutes, display);
    };

    // $(function () {
    //     $(".circle-graph").easyPieChart({
    //         scaleColor: false,
    //         lineWidth: 25,
    //         lineCap: "butt",
    //         barColor: "#a6cee3",
    //         trackColor: "#1f78b4",
    //         size: 160,
    //         animate: 800,
    //     });
    // });

    return (
        
        <div className="main-content-wrapper dashboard-page-2 common-dashboard-page dashboard-page-03">
            <div className="common-padding-content">
                <div className="common-dashboard-good-afternoon-wrapper">
                    <div className="good-afternoon-title">
                        <h2>Good Afternoon, Ajit</h2>
                    </div>

                    <div className="common-good-afternoon-details">
                        <div className="row">
                        {
                            EmployeesData3.map((val, index) => {
                                return(
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 after-border-right" key={index} >
                                        <div className="good-afternoon-details-wrapper">
                                            <div className="media good-afternoon-media align-items-center">
                                                <div className="media-body">
                                                    <p className="good-afternoon-media-sub-title">{val.employeestitle}</p>
                                                    <h2 className="good-afternoon-media-title">{val.employeenumber} 
                                                        <sub>
                                                            {index === 0 ? `  (${val.employees} Employees)` : ""} 
                                                            {index === 1 ? `/ ${val.employesubnumber}` : ""}
                                                        </sub>
                                                    </h2>
                                                    {index === 1 ? <span className="last-week-text"><svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <path d="M3 0L0 2.84298L0.64186 3.43802L2.55349 1.62645L2.55349 8L3.44651 8L3.44651 1.62645L5.35814 3.43802L6 2.84298L3 0Z" transform="matrix(0.70710665 0.7071069 -0.7071069 0.70710665 5.6568604 0)" id="Path" fill="#1DA712" stroke="none"/> </svg>10+ last week</span> : " "}
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
                            <div className="open-programs-open-assessments">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="common-section-title">
                                            <h4>My Open Programs</h4>
                                        </div>
                                        <div className="my-open-programs">
                                            <OwlCarousel className='open-programs-owl owl-theme' items={1} loop margin={10} nav navText= {['<i className="fa fa-angle-left" aria-hidden="true"></i>','<i className="fa fa-angle-right" aria-hidden="true"></i>']} >
                                                {
                                                    groupedData1.map((val, index) => {
                                                        return(
                                                            <div className="item" key={'item' + index}>
                                                                {
                                                                    val.map((newval, index) => {
                                                                        return(
                                                                            <Programsslideritem 
                                                                                key={index}
                                                                                sliderimg = {newval.sliderimg}
                                                                                slidertitle = {newval.slidertitle}
                                                                                sliderdec = {newval.sliderdec}
                                                                                time = {newval.time}
                                                                                sliderprogress = {newval.sliderprogress}
                                                                            />
                                                                        )
                                                                    })    
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 col-12 open-assessments-main-wrapper">
                                        <div className="common-section-title">
                                            <h4>Open Assessments</h4>
                                        </div>
                                        <div className="open-assessments-wrapper">
                                            <OwlCarousel className='open-programs-owl owl-theme' items={1} loop margin={10} nav navText= {['<i className="fa fa-angle-left" aria-hidden="true"></i>','<i className="fa fa-angle-right" aria-hidden="true"></i>']} >
                                                {
                                                    groupedData2.map((val, index) => {
                                                        return(
                                                            <div className="item" key={index}>
                                                                {
                                                                    val.map((newval, index) => {
                                                                        return(
                                                                            <Openassessmentscom 
                                                                                key={index}
                                                                                assessmentstitle = {newval.assessmentstitle}
                                                                                assessmentsdate = {newval.assessmentsdate}
                                                                                assessmentsdue = {newval.assessmentsdue}
                                                                            />
                                                                        )
                                                                    })    
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="other-useful-info">
                                <div className="common-section-title">
                                    <h4>My Open Programs</h4>
                                </div>
                                <div className="other-useful-info-wrapper">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-sm-3 col-6 text-center">
                                            <div className="graph-circle">
                                                <div className="circle-graph-container justify-content-center">
                                                <div className="circle-graph easyPieChart" data-percent="62">
                                                    <p className="circle-graph-text">14</p>
                                                    <canvas width="0" height="0"></canvas>
                                                </div>

                                                <div className="chart" data-percent="73">73%</div>
                                                </div>
                                                <div className="other-useful-section-title">
                                                    <h5>Badges Achieved</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-sm-3 col-6 text-center">
                                            <div className="other-useful-info-timer">
                                                <div className="ten-countdown-timer">
                                                    <div id="ten-countdown">
                                                        <div id="time">
                                                            14:50
                                                        </div>
                                                        <div className="time-mr-m d-flex align-items-center justify-content-around">
                                                            <p>HR</p>
                                                            <p>M</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="other-useful-section-title">
                                                    <h5>Total Course Time Attended</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-sm-3 col-6 text-center">
                                            <div className="graph-circle">
                                                <div className="circle-graph-container justify-content-center">
                                                    <div className="circle-graph easyPieChart" data-percent="62">
                                                        <p className="circle-graph-text">14</p>
                                                        <canvas width="0" height="0"></canvas>
                                                    </div>
                                                </div>
                                                <div className="other-useful-section-title">
                                                    <h5>Badges Achieved</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-sm-3 col-6 text-center">
                                            <div className="other-useful-info-timer">
                                                <div className="ten-countdown-timer">
                                                    <div id="ten-countdown">
                                                        <h6>4</h6>
                                                    </div>
                                                </div>
                                                <div className="other-useful-section-title">
                                                    <h5>Total Attempts For Assessments</h5>
                                                </div>
                                            </div>
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

export default Dashboardtrainee03
