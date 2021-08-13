import React, { useState } from 'react';

import homesvg from '../../assets/images/batch-1/home.svg';
import searchicon from '../../assets/images/batch-1/search-icon.svg';
import filtericon from '../../assets/images/batch-1/filter-icon.svg';
import hselogo from '../../assets/images/batch-1/hse-logo.svg';

// filter type icon images
import filter_type_ic1 from '../../assets/images/batch-1/filter_type_ic1.svg';
import filter_type_ic2 from '../../assets/images/batch-1/filter_type_ic2.svg';
import filter_type_ic3 from '../../assets/images/batch-1/filter_type_ic3.svg';

// external_channel_version 2 images
import ext_cha_ic1 from '../../assets/images/batch-1/ext_cha_ic1.svg';
import ext_cha_ic2 from '../../assets/images/batch-1/ext_cha_ic2.svg';
import ext_cha_ic3 from '../../assets/images/batch-1/ext_cha_ic3.svg';
import ext_cha_v1_img from '../../assets/images/batch-1/ext-channels-img1.png';

// external_channel_version 2 images
import filter_list_img from '../../assets/images/batch-1/filter-list1.png';

// external_channel_version Components
import Externalchaversion1 from './external_channel_version/Ext_cha_ver';
import {Externalchaversion2, Externalchaversion3, Externalchaversion4} from './external_channel_version/Extchaver';


const ext_cha_v1_data = [
    {
        id: "ext_cha_v1_data1",
        ext_cha_name: "4.1 Eucildean Geometry Treatment",
        ext_cha_icon: ext_cha_ic1,
        ext_cha_img: ext_cha_v1_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas. that follows a set of propositions that are bas that follows a set of propositions that are bas. that follows sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas.",
    }
]

const ext_cha_v2_data = [
    {
        id: "ext_cha_v2_data1",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic1,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas… that follows a set of propositions.",
    }
]

const ext_cha_v3_data = [
    {
        id: "ext_cha_v3_data1",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic1,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas… that follows a set of propositions that are bas. that followsthat follows a set of propositions that are bas. that follows.",
    }
]

const ext_cha_v4_data = [
    {
        id: "ext_cha_v3_data1",
        imagclass: `filter-list-box ext-cha-version3`,
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic2,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas a geometry that follows a set of…",
    },
    {
        id: "ext_cha_v3_data2",
        imagclass: "filter-list-box",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic3,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas a geometry that follows a set of…",
    },
    {
        id: "ext_cha_v3_data3",
        imagclass: "filter-list-box",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic1,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas a geometry that follows a set of…",
    },
    {
        id: "ext_cha_v3_data4",
        imagclass: "filter-list-box",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic2,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas a geometry that follows a set of…",
    },
    {
        id: "ext_cha_v3_data5",
        imagclass: "filter-list-box",
        ext_cha_name: "Engage your students with Hands on 2D Geometry",
        ext_cha_icon: ext_cha_ic3,
        ext_cha_img: filter_list_img,
        ext_cha_v1_dec: "Euclidean Geometry, sometimes called parabolic geometry is a geometry that follows a set of propositions that are bas a geometry that follows a set of…",
    },
]


function Externalchannels() {

    const [filter_box_toggle, setfilter_box_toggle] = useState(false);

    const filter_box_toggle_fn = () => {
        setfilter_box_toggle(!filter_box_toggle);
    }

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
                                    <div className="common-dropdown">
                                        <div className="cm-dropdown filter-show-trigger">
                                            <button className={filter_box_toggle ? "btn dropdown-toggle active": "btn dropdown-toggle"} type="button" onClick={filter_box_toggle_fn}>
                                                <img src={filtericon} alt="filter-icon"/>
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={filter_box_toggle ? "common-filter-show active": "common-filter-show"}>
                    <div className="filter-show-row">
                        <div className="fs-col-1">
                            <div className="filter-box-inner-title">
                                <h3>Filter by Category</h3>
                            </div>
                            <div className="filter-category-ul">
                                <ul>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs1" defaultChecked />
                                            <label htmlFor="fs1">
                                                HSE Regulations & Trends
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs2" />
                                            <label htmlFor="fs2">
                                                HR Trends and Best Practices
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs3" />
                                            <label htmlFor="fs3">
                                                Fire safety Tips
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs4" />
                                            <label htmlFor="fs4">
                                                Workplace Risk Management
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs5" />
                                            <label htmlFor="fs5">
                                                Anchor Handling Best Practices
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs6" />
                                            <label htmlFor="fs6">
                                                Leadership Courses
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs7" />
                                            <label htmlFor="fs7">
                                                AI / ML Trends
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="checkbox" id="fs8" />
                                            <label htmlFor="fs8">
                                                Soft Skill Courses
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fs-col-2">
                            <div className="filter-box-inner-title">
                                <h3>Filter by Popular Tags</h3>
                            </div>
                            <div className="filter-tag-ul">
                                <ul>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag1" defaultChecked />
                                            <label htmlFor="tag1">Chemicals</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag2" />
                                            <label htmlFor="tag2">Fumes</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag3" />
                                            <label htmlFor="tag3">Construction</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag4" />
                                            <label htmlFor="tag4">COSHH</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag5" />
                                            <label htmlFor="tag5">Fumes</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag6" />
                                            <label htmlFor="tag6">Construction</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag7" />
                                            <label htmlFor="tag7">COSHH</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag8" defaultChecked />
                                            <label htmlFor="tag8">Fumes</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-tag-check">
                                            <input type="checkbox" id="tag9" />
                                            <label htmlFor="tag9">Construction</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fs-col-3">
                            <div className="filter-box-inner-title">
                                <h3>Filter by Type</h3>
                            </div>
                            <div className="filter-by-type">
                                <label>
                                    <input type="checkbox" />
                                    <span>All</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span><img src={filter_type_ic1} alt="filter type" /></span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span><img src={filter_type_ic2} alt="filter type" /></span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span><img src={filter_type_ic3} alt="filter type" /></span>
                                </label>
                            </div>
                            <div className="apply-filter-btn">
                                <button className="common-btn" type="button">Apply Filters</button>
                            </div>
                        </div>
                    </div>
               </div>
                

               <div class="filter-list-wrapper ">
                    <div class="row">
                        {
                            ext_cha_v1_data.map((val) => {
                                return(
                                    <Externalhaversion1 
                                        id = {val.id}
                                        ext_cha_name = {val.ext_cha_name}
                                        ext_cha_icon = {val.ext_cha_icon}
                                        ext_cha_img = {val.ext_cha_img}
                                        ext_cha_v1_dec = {val.ext_cha_v1_dec}
                                    />
                                )
                            })
                        }

                        {
                            ext_cha_v2_data.map((val) => {
                                return(
                                    <Externalchaversion2 
                                        id = {val.id}
                                        ext_cha_name = {val.ext_cha_name}
                                        ext_cha_icon = {val.ext_cha_icon}
                                        ext_cha_img = {val.ext_cha_img}
                                        ext_cha_v1_dec = {val.ext_cha_v1_dec}
                                    />
                                )
                            })
                        }

                        {
                            ext_cha_v3_data.map((val) => {
                                return(
                                    <Externalchaversion3 
                                        id = {val.id}
                                        ext_cha_name = {val.ext_cha_name}
                                        ext_cha_icon = {val.ext_cha_icon}
                                        ext_cha_img = {val.ext_cha_img}
                                        ext_cha_v1_dec = {val.ext_cha_v1_dec}
                                    />
                                )
                            })
                        }

                        {
                            ext_cha_v4_data.map((val) => {
                                return(
                                    <Externalchaversion4 
                                        id = {val.id}
                                        imagclass = {val.imagclass}
                                        ext_cha_name = {val.ext_cha_name}
                                        ext_cha_icon = {val.ext_cha_icon}
                                        ext_cha_img = {val.ext_cha_img}
                                        ext_cha_v1_dec = {val.ext_cha_v1_dec}
                                    />
                                )
                            })
                        }  
                    </div>
                </div>
                              
                
            </div>
        </div>
    </div>
  );
}

export default Externalchannels;