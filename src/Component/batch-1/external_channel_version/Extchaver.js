import React from 'react';


const Externalchaversion1 = (props) => {
  return (
    <div className="fl-col col-sm-6 col-md-4 col-lg-3">
        <div className="filter-list-box ext-cha-version1">
            <div className="ext-cha-name">
                <a href="#0">{props.ext_cha_name}</a>
            </div>
            <div className="ext-cha-ic">
                <img src={props.ext_cha_icon} alt="icon" />
            </div>
            <div className="ext-img-desc">
                <div className="ext-cha-img">
                    <img src={props.ext_cha_img} alt="image1"/>
                </div>
                <p>{props.ext_cha_v1_dec}</p>
            </div>
        </div>
    </div>
  );
}

const Externalchaversion2 = (props) => {
    return (
        <div className="fl-col col-sm-6 col-md-4 col-lg-3">
            <div className="filter-list-box ext-cha-version2">
                <div className="ext-cha-name">
                    <a href="#0">{props.ext_cha_name}</a>
                </div>
                <div className="ext-cha-ic">
                    <img src={props.ext_cha_icon} alt="icon"/>
                </div>
                <div className="ext-cha-v2-img">
                    <img src={props.ext_cha_img} alt="image2"/>
                </div>
                <div className="ext-common-desc">
                    <p>{props.ext_cha_v1_dec}</p>
                </div>
            </div>
        </div>
    );
}

const Externalchaversion3 = (props) => {
    return (
        <div className="fl-col col-sm-6 col-md-4 col-lg-3">
            <div className="filter-list-box ext-cha-version2">
                <div className="ext-cha-name">
                    <a href="#0">{props.ext_cha_name}</a>
                </div>
                <div className="ext-cha-ic">
                    <img src={props.ext_cha_icon} alt="icon" />
                </div>
                <div className="ext-common-desc">
                    <p>{props.ext_cha_v1_dec}</p>
                </div>
            </div>
        </div>
    );
}

const Externalchaversion4 = (props) => {
    return (
        <div className={props.imagclass}>
            <div className="filter-list-img">
                <a href="#0">
                    <img src={props.ext_cha_img} alt="Filter list" />
                    <div className="ext-cha-ic">
                        <img src={props.ext_cha_icon} alt="icon" />
                    </div>
                </a>
            </div>
            <div className="ext-common-content">
                <div className="ext-cha-name">
                    <a href="#0">{props.ext_cha_name}</a>
                </div>
                <div className="ext-common-desc">
                    <p>{props.ext_cha_v1_dec}</p>
                </div>
            </div>
        </div>
    );
}

export default Externalchaversion1;
export {Externalchaversion2, Externalchaversion3, Externalchaversion4}