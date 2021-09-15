import React, {useState, useRef} from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Moduleinfoblock from '../../Component/batch-2/contentuploadAll/moduleinfoblock';


import home_svg from '../../assets/images/batch-1/home.svg';

const Contentupload = () => {
    const [ value, setValue ] = React.useState(0);
    const [imagescale, setimagescale] = useState(1);

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

    const setActive = event => {
        [...event.currentTarget.parentElement.children].forEach(sib => sib.classList.remove('active'))
        event.currentTarget.classList.add("active");
    }

    return (
        <div className="main-content-wrapper">
            <div className="common-padding-content">
                <div className="content_upload_section">

                    <div className="common-breadcrumb-block">
                        <div className="breadcrumb-left-col">
                            <div className="breadcrumb-ul">
                                <ul>
                                    <li>
                                        <a href="javascriptVoid(0)"><img src={home_svg} alt="home" /></a>
                                    </li>
                                    <li className="active">
                                        <span>Courses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="breadcrumb-right-col"></div>
                    </div>

                    <Moduleinfoblock />

                    <div className="content_block">
                        <div className="content_format_block">
                            <h3>Content Format <span className="text-danger">*</span> </h3>
                            
                            <div className="content_format_bar">
                                <div className="format_box" onClick={setActive}>
                                    <a href="#0">
                                        <span>
                                            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-circled_play-copy-4"> <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM8 14.5L8 5.5L14 10L8 14.5Z" id="Shape" fill="#20A6D2" stroke="none"/> </g> </svg>
                                        </span>
                                        <span>Video</span>
                                    </a>
                                </div>
                                <div className="format_box" onClick={setActive}>
                                    <a href="#0">
                                        <span>
                                            <svg width="26px" height="20px" viewBox="0 0 26 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-audio_wave-copy-7"> <path d="M6.64626 0.00153927C6.11002 0.0610614 5.70784 0.524925 5.72003 1.06884L5.72003 18.9337C5.71394 19.3134 5.91096 19.6644 6.23596 19.8553C6.55892 20.0482 6.9611 20.0482 7.28406 19.8553C7.60905 19.6644 7.80608 19.3134 7.79999 18.9337L7.79999 1.06884C7.80405 0.783539 7.69436 0.510557 7.49531 0.309413C7.29625 0.108269 7.0261 -0.00256545 6.74376 0.00153927C6.71126 -0.00051309 6.67876 -0.00051309 6.64626 0.00153927ZM19.126 0.00153927C18.5897 0.0610614 18.1876 0.524925 18.1998 1.06884L18.1998 18.9337C18.1937 19.3134 18.3907 19.6644 18.7157 19.8553C19.0386 20.0482 19.4408 20.0482 19.7638 19.8553C20.0888 19.6644 20.2858 19.3134 20.2797 18.9337L20.2797 1.06884C20.2838 0.783539 20.1741 0.510557 19.975 0.309413C19.776 0.108269 19.5058 -0.00256545 19.2235 0.00153927C19.191 -0.00051309 19.1585 -0.00051309 19.126 0.00153927ZM3.52633 4.73048C2.99009 4.79 2.58791 5.25387 2.6001 5.79778L2.6001 14.2048C2.59401 14.5845 2.79103 14.9355 3.11603 15.1264C3.43899 15.3193 3.84117 15.3193 4.16413 15.1264C4.48912 14.9355 4.68615 14.5845 4.68005 14.2048L4.68005 5.79778C4.68412 5.51248 4.57443 5.2395 4.37537 5.03836C4.17632 4.83721 3.90617 4.72638 3.62383 4.73048C3.59133 4.72843 3.55883 4.72843 3.52633 4.73048ZM22.2459 4.73048C21.7097 4.79 21.3075 5.25387 21.3197 5.79778L21.3197 14.2048C21.3136 14.5845 21.5106 14.9355 21.8356 15.1264C22.1586 15.3193 22.5608 15.3193 22.8837 15.1264C23.2087 14.9355 23.4057 14.5845 23.3996 14.2048L23.3996 5.79778C23.4037 5.51248 23.294 5.2395 23.095 5.03836C22.8959 4.83721 22.6258 4.72638 22.3434 4.73048C22.3109 4.72843 22.2784 4.72843 22.2459 4.73048ZM9.76619 5.25592C9.22995 5.31544 8.82778 5.77931 8.83996 6.32322L8.83996 13.6793C8.83387 14.0591 9.0309 14.41 9.35589 14.6009C9.67885 14.7939 10.081 14.7939 10.404 14.6009C10.729 14.41 10.926 14.0591 10.9199 13.6793L10.9199 6.32322C10.924 6.03792 10.8143 5.76494 10.6152 5.56379C10.4162 5.36265 10.146 5.25182 9.86369 5.25592C9.83119 5.25387 9.79869 5.25387 9.76619 5.25592ZM16.0061 5.25592C15.4698 5.31544 15.0676 5.77931 15.0798 6.32322L15.0798 13.6793C15.0737 14.0591 15.2708 14.41 15.5958 14.6009C15.9187 14.7939 16.3209 14.7939 16.6439 14.6009C16.9688 14.41 17.1659 14.0591 17.1598 13.6793L17.1598 6.32322C17.1638 6.03792 17.0542 5.76494 16.8551 5.56379C16.656 5.36265 16.3859 5.25182 16.1036 5.25592C16.0711 5.25387 16.0386 5.25387 16.0061 5.25592ZM0.471398 7.88311C0.449054 7.88722 0.426711 7.89337 0.406399 7.89953C0.164686 7.95495 -0.0059355 8.17456 0.00015814 8.42497L0.00015814 11.5776C-0.00187306 11.7664 0.0956249 11.9429 0.258121 12.0394C0.420618 12.1338 0.619676 12.1338 0.782172 12.0394C0.944668 11.9429 1.04217 11.7664 1.04014 11.5776L1.04014 8.42497C1.04623 8.27308 0.985292 8.12736 0.877639 8.02473C0.767954 7.92006 0.619676 7.86874 0.471398 7.88311ZM12.8861 7.88311C12.3499 7.94263 11.9477 8.4065 11.9599 8.95041L11.9599 11.0522C11.9538 11.4319 12.1508 11.7828 12.4758 11.9737C12.7988 12.1667 13.201 12.1667 13.5239 11.9737C13.8489 11.7828 14.0459 11.4319 14.0398 11.0522L14.0398 8.95041C14.0439 8.66511 13.9342 8.39213 13.7352 8.19098C13.5361 7.98984 13.266 7.87901 12.9836 7.88311C12.9511 7.88106 12.9186 7.88106 12.8861 7.88311ZM25.4308 7.88311C25.4085 7.88722 25.3862 7.89337 25.3658 7.89953C25.1241 7.95495 24.9535 8.17456 24.9596 8.42497L24.9596 11.5776C24.9576 11.7664 25.0551 11.9429 25.2176 12.0394C25.3801 12.1338 25.5791 12.1338 25.7416 12.0394C25.9041 11.9429 26.0016 11.7664 25.9996 11.5776L25.9996 8.42497C26.0057 8.27308 25.9447 8.12736 25.8371 8.02473C25.7274 7.92006 25.5791 7.86874 25.4308 7.88311Z" id="Shape" fill="#20A6D2" stroke="none"/> </g> </svg>
                                        </span>
                                        <span>Audio</span>
                                    </a>
                                </div>
                                <div className="format_box active" onClick={setActive}>
                                    <a href="#0">
                                        <span>
                                            <svg width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-pdf"> <path d="M0 0L0 20L15.6522 20L15.6522 5.8305L9.64504 0L0 0ZM0.869565 0.869565L9.13043 0.869565L9.13043 6.52174L14.7826 6.52174L14.7826 19.1304L0.869565 19.1304L0.869565 0.869565ZM10 1.55571L14.2204 5.65217L10 5.65217L10 1.55571ZM7.2911 7.77174C6.96501 7.77174 6.62704 7.95686 6.47928 8.232C6.32982 8.50543 6.31963 8.79925 6.357 9.10496C6.41474 9.5873 6.63383 10.1325 6.91746 10.6912C6.77649 11.1668 6.70856 11.5812 6.49626 12.089C6.22622 12.7361 5.89504 13.249 5.57745 13.7874C5.16304 13.981 4.63995 14.1542 4.33424 14.3546C3.99117 14.5805 3.71943 14.7826 3.55978 15.1036C3.48166 15.2632 3.4409 15.4908 3.51902 15.6963C3.59715 15.9018 3.76019 16.036 3.92833 16.1226C4.28499 16.3111 4.69599 16.194 4.99321 15.9935C5.29042 15.7931 5.55537 15.4993 5.82201 15.141C5.95618 14.9592 6.06318 14.6654 6.19565 14.4531C6.62194 14.2646 6.92425 14.0693 7.40829 13.9029C8.06216 13.677 8.6447 13.5819 9.25611 13.4494C9.76732 13.7942 10.3108 14.0625 10.9052 14.0625C11.2415 14.0625 11.5014 14.0472 11.7544 13.9096C12.0092 13.7721 12.162 13.4409 12.162 13.1878C12.162 12.9823 12.072 12.7632 11.9293 12.6223C11.785 12.4813 11.6151 12.4066 11.4402 12.359C11.0938 12.2656 10.6997 12.2724 10.2463 12.3183C10.0068 12.3438 9.6858 12.4711 9.41916 12.5204C9.38349 12.4932 9.34952 12.4813 9.31386 12.4507C8.77208 11.9837 8.26427 11.3383 7.88723 10.6963C7.86515 10.6573 7.86855 10.6301 7.84647 10.591C7.93818 10.248 8.11821 9.84885 8.15897 9.54823C8.21501 9.13213 8.2269 8.76868 8.1267 8.4358C8.07575 8.26936 7.99083 8.10122 7.84307 7.97215C7.69531 7.84307 7.48641 7.77174 7.2911 7.77174ZM7.25543 8.63791C7.26053 8.63791 7.26902 8.6413 7.27582 8.643C7.27751 8.6464 7.28091 8.6447 7.2945 8.68716C7.31827 8.76698 7.30469 8.99287 7.2962 9.19327C7.28601 9.14232 7.22656 9.04721 7.22147 9.00136C7.19599 8.79925 7.22826 8.67018 7.24185 8.6481C7.24524 8.63961 7.25034 8.63791 7.25543 8.63791ZM7.51868 11.6882C7.78702 12.0737 8.08424 12.4338 8.41712 12.7649C7.97215 12.8838 7.57303 12.9263 7.12466 13.0808C7.02955 13.1131 6.9752 13.159 6.88179 13.1929C7.01427 12.9161 7.17901 12.7106 7.29789 12.4253C7.40659 12.1654 7.42527 11.9463 7.51868 11.6882Z" id="Shape" fill="#20A6D2" stroke="none"/> </g> </svg>
                                        </span>
                                        <span>Pdf</span>
                                    </a>
                                </div>
                                <div className="format_box" onClick={setActive}>
                                    <a href="#0">
                                        <span>
                                            <svg width="21px" height="16px" viewBox="0 0 21 16" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-source_code"> <path d="M10.5 0L8.75 16L10.5 16L12.25 0L10.5 0ZM4.99365 2.92708L0 8L4.99365 13.0729L6.23096 11.816L2.47461 8L6.23096 4.18403L4.99365 2.92708ZM16.0063 2.92708L14.769 4.18403L18.5254 8L14.769 11.816L16.0063 13.0729L21 8L16.0063 2.92708Z" id="Shape" fill="#20A6D2" stroke="none"/> </g> </svg>
                                        </span>
                                        <span>Webpage</span>
                                    </a>
                                </div>
                            </div>
                            <h3>Select Content</h3>
                            <div className="select_content_block">
                                <input type="url" className="url_inputbox" placeholder="External URL" />
                                <div className="file_upload_section">
                                    <div className="upload_file">
                                        <p className="file_name">Drag and drop file here</p>
                                        <p className="extraction">Or <span> browse</span> your file to upload</p>
                                        <i className="file_icon"></i>
                                        <span className="file_size"></span>
                                        <a href="#0" className="remove_btn"> Remove</a>
                                        <input type="file" name="photo" className="preview_img" />
                                    </div>
                                </div>
                                <div className="incorrect_file">
                                    <p className="text-danger" style={{fontSize: '10px'}}>Incorrect file type, please upload PDF</p>
                                </div>
                            </div>
                            <h3>Transcript</h3>
                            <div className="transcript_box">
                                <textarea rows="6"></textarea>
                            </div>
                        </div>

                        <div className="content_img_block">
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
                                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="test1" ref={imgscaleref} id="myimage" />  
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
                                            
                                            <div className="ph_images_other_tools">
                                                <div className="full_page_section">
                                                    <p className="event_poiter" onClick={openFullscreen}>
                                                        <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons8-fit_to_width">
                                                                <path d="M0.000106102 6.20534e-05L0.000106102 6.31581C-0.00194967 6.50496 0.0967339 6.68176 0.261207 6.77839C0.425679 6.87296 0.627158 6.87296 0.791631 6.77839C0.956103 6.68176 1.05479 6.50496 1.05273 6.31581L1.05273 1.79693L5.94374 6.68793C6.03008 6.77839 6.14522 6.8339 6.26651 6.84829C6.28502 6.84829 6.30146 6.85035 6.31997 6.85035C6.33847 6.85035 6.35492 6.84829 6.37342 6.84829C6.38987 6.84624 6.40837 6.84418 6.42482 6.84007C6.61807 6.80306 6.77227 6.6612 6.82778 6.47206C6.88329 6.28292 6.82983 6.07938 6.68797 5.94369L1.79697 1.05269L6.31586 1.05269C6.505 1.05474 6.68181 0.956059 6.77844 0.791587C6.87301 0.627114 6.87301 0.425635 6.77844 0.261163C6.68181 0.0966899 6.505 -0.00199372 6.31586 6.20534e-05L0.000106102 6.20534e-05ZM13.6842 6.20534e-05C13.4951 -0.00199372 13.3183 0.0966899 13.2217 0.261163C13.1271 0.425635 13.1271 0.627114 13.2217 0.791587C13.3183 0.956059 13.4951 1.05474 13.6842 1.05269L18.2031 1.05269L13.3121 5.94369C13.1744 6.07527 13.1189 6.27264 13.1682 6.45561C13.2155 6.64065 13.3594 6.78456 13.5444 6.83185C13.7274 6.88119 13.9248 6.82568 14.0564 6.68793L18.9474 1.79693L18.9474 6.31581C18.9432 6.5913 19.155 6.82362 19.4305 6.84829C19.4469 6.84829 19.4634 6.85035 19.4819 6.85035C19.7718 6.84418 20.0041 6.6057 20 6.31581L20 6.20534e-05L13.6842 6.20534e-05ZM0.518195 13.1497C0.228312 13.1558 -0.00400545 13.3943 0.000106102 13.6842L0.000106102 19.9999L6.31586 19.9999C6.505 20.002 6.68181 19.9033 6.77844 19.7388C6.87301 19.5744 6.87301 19.3729 6.77844 19.2084C6.68181 19.0439 6.505 18.9453 6.31586 18.9473L1.79697 18.9473L6.68798 14.0563C6.84422 13.9042 6.88945 13.6739 6.80516 13.4745C6.72087 13.273 6.5235 13.1455 6.30558 13.1517C6.16783 13.1558 6.03831 13.2134 5.94374 13.3121L1.05273 18.2031L1.05273 13.6842C1.05479 13.5423 0.999278 13.4046 0.898538 13.3038C0.797798 13.2031 0.660053 13.1476 0.518195 13.1497ZM19.4654 13.1497C19.4469 13.1517 19.4305 13.1517 19.414 13.1538C19.3791 13.1579 19.3441 13.1661 19.3092 13.1764C19.0913 13.2483 18.9432 13.4539 18.9474 13.6842L18.9474 18.2031L14.0564 13.3121C13.9577 13.2093 13.822 13.1538 13.6781 13.1517C13.4725 13.1538 13.2833 13.2751 13.199 13.4642C13.1147 13.6533 13.1476 13.8754 13.2874 14.0296C13.2957 14.0378 13.3039 14.0481 13.3121 14.0563L18.2031 18.9473L13.6842 18.9473C13.4005 18.9453 13.1661 19.1714 13.1559 19.4551C13.1456 19.7388 13.3635 19.9794 13.6472 19.9999C13.6596 19.9999 13.6719 19.9999 13.6842 19.9999L20 19.9999L20 13.6842C20.002 13.5423 19.9465 13.4046 19.8458 13.3038C19.745 13.2031 19.6073 13.1476 19.4654 13.1497Z" id="Shape" fill="#FFFFFF" stroke="none" />
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contentupload
