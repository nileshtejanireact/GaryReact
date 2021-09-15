import React from 'react'

import EmployeesData from '../../Component/batch-3/dashboardtrainee01innerAll/dashboarddata'
import { ext_cha_v4_data } from '../../Component/batch-3/dashboardtrainee01innerAll/dashboarddata'
import Programtable from '../../Component/batch-3/dashboardtrainee01innerAll/dashboardtable'
import { Assessmentstable } from '../../Component/batch-3/dashboardtrainee01innerAll/dashboardtable'
import TrainersLeaderchart from '../../Component/batch-3/dashboardtrainee01innerAll/dashboardchart'

import resize_icon from '../../assets/images/dashboard/resize-icon.svg'

import {Externalchaversion4} from '../../Component/batch-1/external_channel_version/Extchaver';
    


const Dashboardtrainee01 = () => {
    return (
        <div className="main-content-wrapper dashboard-page-1 common-dashboard-page">
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
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 after-border-right" key={index}>
                                        <div className="good-afternoon-details-wrapper">
                                            <div className="media good-afternoon-media align-items-center">
                                                <div className="media-body">
                                                    <p className="good-afternoon-media-sub-title">{val.employeestitle}</p>
                                                    <h2 className="good-afternoon-media-title">{val.employeenumber} <sub>{index === 0 ? `(${val.employees} Employees` : ""})</sub></h2>
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
                                <div className="col-md-12 col-xl-6 col-12">
                                    <div className="common-section-title">
                                        <h4><span>Trainer’s Leader Board</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                    </div>  

                                    <TrainersLeaderchart />
                                </div>

                                <div className="col-md-12 col-xl-6 col-12 mt_5">
                                    <div className="common-section-title">
                                        <h4><span>Latest in Training Zone</span> <img src={resize_icon} alt="Gmes logo" /></h4>
                                    </div>

                                    <div className="row latest-in-training-zone">
                                        {
                                            ext_cha_v4_data.map((val, index) => {
                                                return(
                                                    <div className="fl-col col-sm-6 col-xl-6">
                                                        <Externalchaversion4 
                                                            key = {index}
                                                            id = {val.id}
                                                            imagclass = {val.imagclass}
                                                            ext_cha_name = {val.ext_cha_name}
                                                            ext_cha_icon = {val.ext_cha_icon}
                                                            ext_cha_img = {val.ext_cha_img}
                                                            ext_cha_v1_dec = {val.ext_cha_v1_dec}
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
                </div>
            </div>
        </div>
    )
}

export default Dashboardtrainee01
