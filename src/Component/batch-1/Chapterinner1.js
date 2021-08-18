import React, { useState, useRef } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Dropdown from 'react-bootstrap/Dropdown'

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import PhysicsImagebox from './chapterinnerAll/PhysicsImagebox';

import PhysicsBoxData from '../batch-1/chapterinnerAll/ChapterData';
import Postright from '../batch-1/chapterinnerAll/Postright';

const Chapterinner1 = (props) => {
    const [bigimages, setbigimages] = useState(0);
    const [allbigimages, setallbigimages] = useState(0);
    const [fullimages, setfullimages] = useState(false);
    const [ value, setValue ] = React.useState(0);
    const [key, setKey] = useState('home');
    const [imagescale, setimagescale] = useState(1);

    var chapterdata = PhysicsBoxData;
    var indexdata = chapterdata[bigimages];
    
    var imagespath = indexdata.images[allbigimages];
    var totalimages = indexdata.images.length;
    
    function openFullscreen() {
        var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !==     null) ||    // alternative standard method  
                (document.mozFullScreen || document.webkitIsFullScreen);
    
        var docElm = document.getElementById("myimage");

        if (!isInFullScreen) {
            if (docElm.requestFullscreen) { docElm.requestFullscreen(); }
            else if (docElm.mozRequestFullScreen) { docElm.mozRequestFullScreen(); }
            else if (docElm.webkitRequestFullScreen) { docElm.webkitRequestFullScreen(); }
        }
    }

    const saveindexhandler = (currentindex) => {
        setbigimages(currentindex);
    }
    const saveindexhandler2 = (currentindex2) => {
        setallbigimages(0);
    }

    const previmages = () => {
        setallbigimages(allbigimages === 0 ? 0 : allbigimages - 1);
    }

    const nextimages = () => {
        setallbigimages(totalimages - 1  === allbigimages ? allbigimages : allbigimages + 1);
    }

    const fullimagesfn = () => {
        setfullimages(!fullimages);
    }

    const imgscaleref = useRef()
    const setvaluePogressfn = (pogressdata) => {
        setValue(pogressdata);
        if(pogressdata !== 0){   
            let pogressnumber = pogressdata / 10;
            setimagescale(pogressnumber);         
            imgscaleref.current.parentNode.style.transform = `scale(${imagescale})`
            imgscaleref.current.parentNode.style.transformOrigin = "center center"
            imgscaleref.current.parentNode.style.transition = "0.2s all ease"
        }
        else{
            imgscaleref.current.parentNode.style.transform = "scale(1)";
            imgscaleref.current.parentNode.style.transformOrigin = "center center"
            imgscaleref.current.parentNode.style.transition = "0.2s all ease"   
        }
    }

    const zoomIndata = () => {
        imgscaleref.current.parentNode.style.transformOrigin = "0 0"
    }

  return (
    <div className="main-content-wrapper full-content-wrapper">
        <div className="common-inner-padding-block">
            <div className="common-back-nav-block">
                <div className="common-back-btn">
                    <a href="#0">
                        <svg width="13px" height="23px" viewBox="0 0 13 23" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00475 8.88178e-16C0.597827 0.000106867 0.231542 0.246755 0.0784196 0.62377C-0.0747024 1.00078 0.0158736 1.43298 0.307485 1.7168L9.60045 11.0098L0.307485 20.3027C0.0462457 20.5536 -0.058988 20.926 0.032369 21.2764C0.123726 21.6269 0.397398 21.9006 0.747839 21.9919C1.09828 22.0833 1.47073 21.978 1.72155 21.7168L11.7215 11.7168C12.1119 11.3263 12.1119 10.6933 11.7215 10.3027L1.72155 0.302734C1.53328 0.109202 1.27475 1.57931e-05 1.00475 8.88178e-16Z" transform="matrix(-1 0 0 1 12.014323 0)" id="Path" fill="#20A6D2" stroke="none" />
                        </svg>
                        Back
                    </a>
                </div>
                <div className="hide-course-btn">
                    <a href="#0" className="common-btn">
                        Hide Course Content
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
                            <path d="M.585,0a.584.584,0,0,0-.54.34.52.52,0,0,0,.133.6L5.594,6,.179,11.062a.522.522,0,0,0-.16.531.565.565,0,0,0,.417.39A.61.61,0,0,0,1,11.832L6.829,6.384a.52.52,0,0,0,0-.77L1,.165A.6.6,0,0,0,.585,0Z" transform="translate(0 0)" fill="#fff"/>
                        </svg>
                    </a>
                </div>
            </div>


            <div className="physics-inner-block ">
                <div className={fullimages ? "physics-col-left fullscreen" : "physics-col-left"}>
                    <div className="physics-inner-box">
                        <PhysicsImagebox
                            category = {indexdata.category} 
                            title = {indexdata.title}
                            progressbar = {indexdata.progressbar}
                        />

                        <div className="physics-video-block">
                            <div className="physics-video-img">
                                <TransformWrapper
                                    initialScale={1}
                                    initialPositionX={0}
                                    initialPositionY={0}
                                    wheel={{ step: 0}}
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <React.Fragment>
                                        <TransformComponent>
                                            <img src={imagespath} alt="test1" ref={imgscaleref} id="myimage" />  
                                        </TransformComponent>
                                        <div className="tools bottom_images_tools">
                                            <div className="bottom_images_tools_inner">
                                                <button onClick={() => { zoomOut(); zoomIndata()}} className="images_plus_button">
                                                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icons8-minus">
                                                            <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0478 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0478 15.0478 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0478 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM4.78261 9.56522L4.78261 10.4348L15.2174 10.4348L15.2174 9.56522L4.78261 9.56522Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                        </g>
                                                    </svg>
                                                </button>

                                                <div className="images_pogressbar">
                                                    <input type="range" 
                                                        value={value}
                                                        onChange={changeEvent => setvaluePogressfn(changeEvent.target.value)}
                                                        step={10} 
                                                        className="slider" 
                                                        id="myRange">    
                                                    </input>
                                                </div>

                                                <button onClick={() => { zoomIn(); zoomIndata()}} className="images_plus_button">
                                                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icons8-plus">
                                                            <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0478 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0478 15.0478 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0478 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM9.56522 4.78261L9.56522 9.56522L4.78261 9.56522L4.78261 10.4348L9.56522 10.4348L9.56522 15.2174L10.4348 15.2174L10.4348 10.4348L15.2174 10.4348L15.2174 9.56522L10.4348 9.56522L10.4348 4.78261L9.56522 4.78261Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="chage_center_btn">
                                                <div className="prev_next_img_btn" onClick={previmages}>
                                                    <svg width="11px" height="20px" viewBox="0 0 11 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icons8-more_than-copy-2" transform="matrix(-1 0 0 1 10.8411255 0)">
                                                            <path d="M0.859813 0L0 0.859813L9.14019 10L0 19.1402L0.859813 20L10.4299 10.4299L10.8411 10L10.4299 9.57009L0.859813 0Z" id="Path" fill="#FFFFFF" stroke="none" />
                                                        </g>
                                                    </svg>
                                                </div>

                                                <div className="total_images">
                                                    <p>{allbigimages + 1} </p>
                                                    <span> / </span>
                                                    <p> {totalimages}</p>
                                                </div>

                                                <div className="prev_next_img_btn" onClick={nextimages}>
                                                    <svg width="11px" height="20px" viewBox="0 0 11 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icons8-more_than-copy">
                                                            <path d="M0.859813 0L0 0.859813L9.14019 10L0 19.1402L0.859813 20L10.4299 10.4299L10.8411 10L10.4299 9.57009L0.859813 0Z" id="Path" fill="#FFFFFF" stroke="none" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            <div className="ph_images_other_tools">
                                                <div className="full_page_section">
                                                    <p className="event_poiter" onClick={fullimagesfn}>
                                                        <svg width="26px" height="16px" viewBox="0 0 26 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                            <defs>
                                                                <path d="M0 0L26 0L26 16L0 16L0 0Z" id="path_1" />
                                                                <clipPath id="clip_1">
                                                                <use xlinkHref="#path_1" />
                                                                </clipPath>
                                                            </defs>
                                                            <g id="Rectangle">
                                                                <g clipPath="url(#clip_1)">
                                                                <use xlinkHref="#path_1" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </p>

                                                    <p className="event_poiter" onClick={openFullscreen}>
                                                        <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons8-fit_to_width">
                                                                <path d="M0.000106102 6.20534e-05L0.000106102 6.31581C-0.00194967 6.50496 0.0967339 6.68176 0.261207 6.77839C0.425679 6.87296 0.627158 6.87296 0.791631 6.77839C0.956103 6.68176 1.05479 6.50496 1.05273 6.31581L1.05273 1.79693L5.94374 6.68793C6.03008 6.77839 6.14522 6.8339 6.26651 6.84829C6.28502 6.84829 6.30146 6.85035 6.31997 6.85035C6.33847 6.85035 6.35492 6.84829 6.37342 6.84829C6.38987 6.84624 6.40837 6.84418 6.42482 6.84007C6.61807 6.80306 6.77227 6.6612 6.82778 6.47206C6.88329 6.28292 6.82983 6.07938 6.68797 5.94369L1.79697 1.05269L6.31586 1.05269C6.505 1.05474 6.68181 0.956059 6.77844 0.791587C6.87301 0.627114 6.87301 0.425635 6.77844 0.261163C6.68181 0.0966899 6.505 -0.00199372 6.31586 6.20534e-05L0.000106102 6.20534e-05ZM13.6842 6.20534e-05C13.4951 -0.00199372 13.3183 0.0966899 13.2217 0.261163C13.1271 0.425635 13.1271 0.627114 13.2217 0.791587C13.3183 0.956059 13.4951 1.05474 13.6842 1.05269L18.2031 1.05269L13.3121 5.94369C13.1744 6.07527 13.1189 6.27264 13.1682 6.45561C13.2155 6.64065 13.3594 6.78456 13.5444 6.83185C13.7274 6.88119 13.9248 6.82568 14.0564 6.68793L18.9474 1.79693L18.9474 6.31581C18.9432 6.5913 19.155 6.82362 19.4305 6.84829C19.4469 6.84829 19.4634 6.85035 19.4819 6.85035C19.7718 6.84418 20.0041 6.6057 20 6.31581L20 6.20534e-05L13.6842 6.20534e-05ZM0.518195 13.1497C0.228312 13.1558 -0.00400545 13.3943 0.000106102 13.6842L0.000106102 19.9999L6.31586 19.9999C6.505 20.002 6.68181 19.9033 6.77844 19.7388C6.87301 19.5744 6.87301 19.3729 6.77844 19.2084C6.68181 19.0439 6.505 18.9453 6.31586 18.9473L1.79697 18.9473L6.68798 14.0563C6.84422 13.9042 6.88945 13.6739 6.80516 13.4745C6.72087 13.273 6.5235 13.1455 6.30558 13.1517C6.16783 13.1558 6.03831 13.2134 5.94374 13.3121L1.05273 18.2031L1.05273 13.6842C1.05479 13.5423 0.999278 13.4046 0.898538 13.3038C0.797798 13.2031 0.660053 13.1476 0.518195 13.1497ZM19.4654 13.1497C19.4469 13.1517 19.4305 13.1517 19.414 13.1538C19.3791 13.1579 19.3441 13.1661 19.3092 13.1764C19.0913 13.2483 18.9432 13.4539 18.9474 13.6842L18.9474 18.2031L14.0564 13.3121C13.9577 13.2093 13.822 13.1538 13.6781 13.1517C13.4725 13.1538 13.2833 13.2751 13.199 13.4642C13.1147 13.6533 13.1476 13.8754 13.2874 14.0296C13.2957 14.0378 13.3039 14.0481 13.3121 14.0563L18.2031 18.9473L13.6842 18.9473C13.4005 18.9453 13.1661 19.1714 13.1559 19.4551C13.1456 19.7388 13.3635 19.9794 13.6472 19.9999C13.6596 19.9999 13.6719 19.9999 13.6842 19.9999L20 19.9999L20 13.6842C20.002 13.5423 19.9465 13.4046 19.8458 13.3038C19.745 13.2031 19.6073 13.1476 19.4654 13.1497Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                            </g>
                                                        </svg>
                                                    </p>

                                                    <div className="common-dropdown">
                                                        <Dropdown >
                                                            <Dropdown.Toggle id="dropdown-basic2" className="event_poiter" >
                                                                <p>
                                                                    <svg width="4px" height="20px" viewBox="0 0 4 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="icons8-menu_vertical">
                                                                            <path d="M2 0C0.894531 0 0 0.894531 0 2C0 3.10547 0.894531 4 2 4C3.10547 4 4 3.10547 4 2C4 0.894531 3.10547 0 2 0ZM2 8C0.894531 8 0 8.89453 0 10C0 11.1055 0.894531 12 2 12C3.10547 12 4 11.1055 4 10C4 8.89453 3.10547 8 2 8ZM2 16C0.894531 16 0 16.8945 0 18C0 19.1055 0.894531 20 2 20C3.10547 20 4 19.1055 4 18C4 16.8945 3.10547 16 2 16Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                                        </g>
                                                                    </svg>
                                                                </p>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1" >A to Z</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2" >Z to A</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3" >Long</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-4" >Short</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-5" >Something else here</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>
                        </div>
                    </div>


                    <div className="physics-tab-block">
                        <div className="ph-tab-nav-block">
                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                                 {/* {
                                    indexdata.tabs.map((val) => {
                                        return(
                                            <Tabbox
                                               eventKey= {val.eventKey}
                                               title={val.tabtitle}
                                               tab_common_title={val.tab_common_title}
                                               tab_common_desc={val.tab_common_desc}>
                                               </Tabbox>
                                        )
                                    })
                                 } */}

                                 {
                                    indexdata.tabs.map((val, index) => {
                                        return(
                                            <Tab eventKey={val.eventKey} title={val.tabtitle} key={index}>
                                                <div className="ph-tab-content-block">
                                                    <div className="tab-common-content">
                                                        <div className="tab-common-title">
                                                            <h3>{val.tab_common_title}</h3>
                                                        </div>
                                                        <div className="tab-common-desc">
                                                            <p>{val.tab_common_desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        )
                                    })
                                 }
                            </Tabs>
                        </div>
                    </div>
                </div>
                
            
                <div className={fullimages ? "physics-col-right fullscreen" : "physics-col-right"} >
                    <div className="physics-content-right">
                        {
                            PhysicsBoxData.map((val, index) => {
                                return(
                                    <Postright 
                                        title = {val.title}
                                        progressbar = {val.progressbar}
                                        image = {val.images[0]}
                                        index = {index}
                                        onsaveindexdata = {saveindexhandler}
                                        onsaveindexdata2 = {saveindexhandler2}
                                        key = {index}
                                        assigneddate = {val.assigneddate}
                                        completeddate = {val.completeddate}
                                        activeclasses = {index === bigimages ? "physics-details-box ph-done-process active" : "physics-details-box ph-done-process"}
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

export default Chapterinner1;