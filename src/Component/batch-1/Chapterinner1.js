import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


import Tabbox from '../../Component/batch-1/chapterinnerAll/Tabbox';
import Tabs from 'react-bootstrap/Tabs';


import PhysicsImagebox from './chapterinnerAll/PhysicsImagebox';

import PhysicsBoxData from '../batch-1/chapterinnerAll/ChapterData';
import PostRightsbox from '../batch-1/chapterinnerAll/Postright';

const Chapterinner1 = (props) => {
    const [bigimages, setbigimages] = useState(0);
    const [allbigimages, setallbigimages] = useState(0);

    const [key, setKey] = useState('home');
    
    var chapterdata = PhysicsBoxData;
    var indexdata = chapterdata.[bigimages]
    
    var imagespath = indexdata.images[allbigimages];
    var totalimages = indexdata.images.length;
    

    const saveindexhandler = (currentindex) => {
        setbigimages(currentindex);
    }

    const previmages = () => {
        setallbigimages(allbigimages === 0 ? 0 : allbigimages - 1);
    }

    const nextimages = () => {
        setallbigimages(totalimages - 1  === allbigimages ? allbigimages : allbigimages + 1);
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
                <div className="physics-col-left">
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
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <React.Fragment>
                                        <TransformComponent>
                                            <img src={imagespath} alt="test1" />
                                        </TransformComponent>
                                        <div className="tools bottom_images_tools">
                                            <div className="bottom_images_tools_inner">
                                                <button onClick={() => zoomOut()} className="images_plus_button">
                                                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icons8-minus">
                                                            <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0478 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0478 15.0478 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0478 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM4.78261 9.56522L4.78261 10.4348L15.2174 10.4348L15.2174 9.56522L4.78261 9.56522Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                        </g>
                                                    </svg>
                                                </button>

                                                {/* <div className="images_pogressbar">

                                                </div> */}

                                                <button onClick={() => zoomIn()} className="images_plus_button">
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
                                            
                                            <div className="">
                                                <span>123</span>
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
                                {
                                    indexdata.tabs.map((val, index) => {
                                        console.log(val.tab_common_title);
                                        return(
                                            <Tabbox 
                                                key = {index}
                                                eventKey = {val.eventKey}
                                                title={val.tabtitle}
                                                tab_common_titles = {val.tab_common_title}
                                                tab_common_descs = {val.tab_common_desc}
                                            />
                                        )
                                    })
                                }

                                {/* /* {console.log(indexdata.tabs[0].eventKey)} */}
                            </Tabs>
                        </div>
                    </div>
                </div>
            
                <div className="physics-col-right">
                    <div className="physics-content-right">
                        {
                            PhysicsBoxData.map((val, index) => {
                                return(
                                    <PostRightsbox 
                                        title = {val.title}
                                        progressbar = {val.progressbar}
                                        image = {val.images[0]}
                                        indexs = {index}
                                        onsaveindexdata = {saveindexhandler}
                                        key = {index}
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