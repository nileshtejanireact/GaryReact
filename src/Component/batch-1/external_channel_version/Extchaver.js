import React from 'react';


const Externalchaversion1 = (props) => {
  return (
    <div class="fl-col col-sm-6 col-md-4 col-lg-3">
        <div class="filter-list-box ext-cha-version1">
            <div class="ext-cha-name">
                <a href="#0">{props.ext_cha_name}</a>
            </div>
            <div class="ext-cha-ic">
                <img src={props.ext_cha_icon} alt="icon" />
            </div>
            <div class="ext-img-desc">
                <div class="ext-cha-img">
                    <img src={props.ext_cha_img} alt="image" />
                </div>
                <p>{props.ext_cha_v1_dec}</p>
            </div>
        </div>
    </div>
  );
}

const Externalchaversion2 = (props) => {
    return (
        <div class="fl-col col-sm-6 col-md-4 col-lg-3">
            <div class="filter-list-box ext-cha-version2">
                <div class="ext-cha-name">
                    <a href="#0">{props.ext_cha_name}</a>
                </div>
                <div class="ext-cha-ic">
                    <img src={props.ext_cha_icon} alt="icon"/>
                </div>
                <div class="ext-cha-v2-img">
                    <img src={props.ext_cha_img} alt="image"/>
                </div>
                <div class="ext-common-desc">
                    <p>{props.ext_cha_v1_dec}</p>
                </div>
            </div>
        </div>
    );
}

const Externalchaversion3 = (props) => {
    return (
        <div class="fl-col col-sm-6 col-md-4 col-lg-3">
            <div class="filter-list-box ext-cha-version2">
                <div class="ext-cha-name">
                    <a href="#0">{props.ext_cha_name}</a>
                </div>
                <div class="ext-cha-ic">
                    <img src={props.ext_cha_icon} alt="icon" />
                </div>
                <div class="ext-common-desc">
                    <p>{props.ext_cha_v1_dec}</p>
                </div>
            </div>
        </div>
    );
}

const Externalchaversion4 = (props) => {
    return (
        <div class="fl-col col-sm-6 col-md-4 col-lg-3">
            <div class={props.imagclass}>
                <div class="filter-list-img">
                    <a href="#0">
                        <img src={props.ext_cha_img} alt="Filter list" />
                        <div class="ext-cha-ic">
                            <img src={props.ext_cha_icon} alt="icon" />
                        </div>
                    </a>
                </div>
                <div class="ext-common-content">
                    <div class="ext-cha-name">
                        <a href="#0">{props.ext_cha_name}</a>
                    </div>
                    <div class="ext-common-desc">
                        <p>{props.ext_cha_v1_dec}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Externalchaversion1;
export {Externalchaversion2, Externalchaversion3, Externalchaversion4}