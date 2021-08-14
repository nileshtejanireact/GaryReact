import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


import Tabbox from '../../Component/batch-1/chapterinnerAll/Tabbox';

import PhysicsImagebox from './chapterinnerAll/PhysicsImagebox';
import physicsImages1 from '../../assets/images/batch-1/physics-video-img.png';

import post_image from '../../assets/images/batch-1/ph-image.png';

import PhysicsBoxData from '../batch-1/chapterinnerAll/ChapterData';
import PostRightsbox from '../batch-1/chapterinnerAll/Postright';


const Chapterinner1 = (props) => {
    const [bigimages, setbigimages] = useState(physicsImages1);



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
                            main_title = "Physics"
                            description = "Newton’s Laws"
                            progressbar = "34"
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
                                            <img src={bigimages} alt="test" />
                                        </TransformComponent>
                                        <div className="tools bottom_images_tools">
                                            <button onClick={() => zoomOut()} className="images_plus_button">
                                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons8-minus">
                                                        <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0478 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0478 15.0478 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0478 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM4.78261 9.56522L4.78261 10.4348L15.2174 10.4348L15.2174 9.56522L4.78261 9.56522Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                    </g>
                                                </svg>
                                            </button>

                                            <div className="images_pogressbar">

                                            </div>

                                            <button onClick={() => zoomIn()} className="images_plus_button">
                                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons8-plus">
                                                        <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0478 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0478 15.0478 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0478 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM9.56522 4.78261L9.56522 9.56522L4.78261 9.56522L4.78261 10.4348L9.56522 10.4348L9.56522 15.2174L10.4348 15.2174L10.4348 10.4348L15.2174 10.4348L15.2174 9.56522L10.4348 9.56522L10.4348 4.78261L9.56522 4.78261Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>
                        </div>
                    </div>


                    <div class="physics-tab-block">
                        <Tabbox />
                    </div>


                </div>
            
                <div class="physics-col-right">
                    <div class="physics-content-right">
                        {
                        
                            PhysicsBoxData.map((val, index) => {
                                return(
                                    <PostRightsbox 
                                        title = {val.title}
                                        progressbar = {val.progressbar}
                                        image = {val.images[0]}
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