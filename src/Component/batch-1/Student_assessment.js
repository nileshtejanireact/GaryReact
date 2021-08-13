import React from 'react';

import flag_ic from '../../assets/images/batch-1/flag_ic.svg';

const Student_assessment = () => {
  return (
    <div className="main-content-wrapper full-content-wrapper">
        <div className="exit-finish-test-block">
            <div className="common-exit-btn">
                <a href="#0">Exit</a>
            </div>
            <div className="save-finish-btn">
                <a href="#0" className="save-continue-btn">Save and continue later</a>
                <a href="#0" className="finish-test-btn">Finish Test</a>
            </div>
        </div>

        <div className="time-management-wrapper">
            <div className="time-management-title">
                <h3>Time Management Test Series</h3>
            </div>
            <div className="time-section-block">
                <div className="time-col-left">
                    <div className="time-section-box">
                        <div className="time-seat-content">
                            <div className="time-inner-common-title">
                                <h4>Section A</h4>
                            </div>
                            <div className="time-seat-ul">
                                <ul>
                                    <li>
                                        <div className="tm-seat-box seat-green">1</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box seat-green">2</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box seat-orange">3</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box seat-blue">4</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">5</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">6</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">7</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">8</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="time-seat-content">
                            <div className="time-inner-common-title">
                                <h4>Section B</h4>
                            </div>
                            <div className="time-seat-ul">
                                <ul>
                                    <li>
                                        <div className="tm-seat-box">1</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">2</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">3</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box ">4</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">5</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">6</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">7</div>
                                    </li>
                                    <li>
                                        <div className="tm-seat-box">8</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="time-col-right">
                    <div className="time-question-box">
                        <div className="time-inner-common-title">
                            <h4>Section A - Question 4</h4>
                        </div>
                        <div className="question-content">
                            <div className="question-hold-draw">
                                <h3>What’s the one thing that doesn’t belong to a to-do list?</h3>
                            </div>
                            <div className="question-answer-block">
                                <ul>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="radio" id="qa1" name="qa1" defaultChecked />
                                            <label htmlFor="qa1">
                                                The movie you want to watch
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="common-checkbox">
                                            <input type="radio" id="qa2" name="qa1" />
                                            <label htmlFor="qa2">
                                                A detailed list of all tasks htmlFor the day
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flag-pagination-block">
                            <div className="que-line-draw"></div>
                            <div className="flag-attempt-latter">
                                <p>
                                    <img src={flag_ic} alt="flag" />
                                    Want to revisit it later? &nbsp;&nbsp;
                                    <a href="#0">Flag and Attempt later</a>
                                </p>
                            </div>
                            <div className="question-pagination">
                                <a className="que-prev-btn" href="#0">Previous</a>
                                <p><span>4</span> of 8</p>
                                <a className="que-next-btn" href="#0">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Student_assessment;