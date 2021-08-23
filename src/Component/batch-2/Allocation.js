import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Moduleinfoblock from '../batch-2/contentuploadAll/moduleinfoblock';

import home_svg from '../../assets/images/batch-1/home.svg';
import input_close_ic from '../../assets/images/batch-4/input-close-ic.svg';
import searchicon from '../../assets/images/batch-1/search-icon.svg';



const checkboxdata = [
    {
        id: "Mongiello",
        label: "Arla Mongiello"
    },
    {
        id: "individual",
        label: "Almeta Calles"
    },
    {
        id: "Weiskopf",
        label: "Valerie Weiskopf"
    },
    {
        id: "Turrentine",
        label: "Marsha Turrentine"
    },
    {
        id: "Buster",
        label: "Buster Poydras"
    },
    {
        id: "Poydras",
        label: "Margarett Mclauchlin"
    },
    {
        id: "Shirly",
        label: "Jestine Mckinnis"
    },
    {
        id: "Truett",
        label: "Lissa Truett"
    },
    {
        id: "Mabery",
        label: "Temeka Mabery"
    },
    {
        id: "Wood",
        label: "Wan Wood"
    },
    {
        id: "Margarett",
        label: "Margarett Mclauchlin"
    },
    {
        id: "Paluch",
        label: "Shirly Paluch"
    },
    {
        id: "Mckinnis",
        label: "Jestine Mckinnis"
    },
    {
        id: "Lissa",
        label: "Lissa Truett"
    },
    {
        id: "Temeka",
        label: "Temeka Mabery"
    }
]


const Allocation = () => {
    const [dropdownData, setdropdownData] = useState('Filter');
    const [dropdownData2, setdropdownData2] = useState('Filter');
    const [searchic, setsearchic] = useState(true);

    const toggleData = (data) => {
        setdropdownData(data);
    }

    const toggleData2 = (data) => {
        setdropdownData2(data);
    }

    const searchChangehandler = (event) => {
        var inputlength = event.target.value.length;
        if(inputlength > 0){
            setsearchic(false);
        }
        else{
            setsearchic(true);
        }
    }

    const checkall = () => {
        var checkall = document.getElementById('Check_All');
        var allchecelement = document.getElementsByClassName('individual');

        if(checkall.checked === true){
            [...allchecelement].forEach(element => {
                element.checked = false;
            });
        }
        else{
            [...allchecelement].forEach(element => {
                element.checked = true;
            });
        }
    }

    const uncheckall = () => {
        var checkall = document.getElementById('Check_All');
        var allchecelement = document.getElementsByClassName('individual');
        
        if(checkall.checked === true){
            checkall.checked = false;
            [...allchecelement].forEach(element => {
                element.checked = false;
            });
        }
    }

    const checkall2 = () => {
        var checkall = document.getElementById('Check_All_2');
        var allchecelement = document.getElementsByClassName('individual_two');

        if(checkall.checked === true){
            [...allchecelement].forEach(element => {
                element.checked = false;
            });
        }
        else{
            [...allchecelement].forEach(element => {
                element.checked = true;
            });
        }
    }

    const uncheckall2 = () => {
        var checkall = document.getElementById('Check_All_2');
        var allchecelement = document.getElementsByClassName('individual_two');
        
        if(checkall.checked === true){
            checkall.checked = false;
            [...allchecelement].forEach(element => {
                element.checked = false;
            });
        }
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
                                        <a><img src={home_svg} alt="home" /></a>
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

                    <div class="allocate_three_block">
                        <div class="main_audience_block">
                            <div class="audience_block">
                                <h3>Audience <span class="text-danger">*</span></h3>
                                <div class="open_close_block">
                                    <a href="#0">open</a>
                                    <a href="#0">close</a>
                                </div>
                            </div>
                            
                            <div class="delivery_blog">
                                <h3>Select Delivery Groups</h3>
                                <div class="delivery_box">
                                    <form class="common_checkbox">
                                        <div class="form-group">
                                            <input type="checkbox" id="Classes" />
                                            <label for="Classes">Classes</label>
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" id="Batches" />
                                            <label for="Batches">Batches</label>
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" id="Individuals" />
                                            <label for="Individuals">Individuals</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="filter_by_block">
                            <div class="filter_box">
                                <div class="top_filter">
                                    <h3>Filter By</h3>
                                    <div class="all_filters_block">
                                        <ul class="all_filter_ul">
                                            <li>
                                                <div className="common-dropdown">
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic" >
                                                            {dropdownData}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1" onClick={() => toggleData('A to Z')}>A to Z</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" onClick={() => toggleData('Z to A')}>Z to A</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3" onClick={() => toggleData('Long')}>Long</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4" onClick={() => toggleData('Short')}>Short</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-5" onClick={() => toggleData('Something else here')}>Something else here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="common-dropdown">
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic2" >
                                                            {dropdownData2}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1" onClick={() => toggleData2('A to Z')}>A to Z</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" onClick={() => toggleData2('Z to A')}>Z to A</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3" onClick={() => toggleData2('Long')}>Long</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4" onClick={() => toggleData2('Short')}>Short</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-5" onClick={() => toggleData2('Something else here')}>Something else here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="common-search-hold input-value-close">
                                                    <input type="text" placeholder="Search by keyword" onChange={searchChangehandler}/>
                                                    {
                                                        !searchic && <span class=  "input-close-text"><img src={input_close_ic} alt="icon" /></span>
                                                    }
                                                    {
                                                        searchic && <span class="search-icon"><img src={searchicon} alt="search" /></span>
                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="select_filter">
                                    <form action="">
                                        <h3>Select From</h3>
                                        <div class="select_filter_box">
                                            <div class="common_checkbox">
                                                <div class="check_all">
                                                    <div class="form-group">
                                                        <input type="checkbox" class="check_all_btn" id="Check_All" />
                                                        <label for="Check_All" onClick={checkall}>Check All</label>
                                                    </div>
                                                    <div class="uncheck_span">
                                                        <a href="#0" class="uncheck_all" onClick={uncheckall}>Uncheck All</a>
                                                    </div>
                                                </div>

                                                <div class="all_checkboxes">
                                                    {
                                                        checkboxdata.map((val, index) => {
                                                            return(
                                                                <div class="form-group" key={index}>
                                                                    <input type="checkbox" class="individual" id={val.id} />
                                                                    <label for={val.id}>{val.label}</label>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div class="select_filter_btn">
                                            <a href="#0">
                                                <span>Add to Selection</span>
                                                <span>
                                                    <svg width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-right"> <path d="M6.08733 0L5.25724 0.848619L7.78642 3.43425L0 3.43425L0 4.56575L7.78642 4.56575L5.25724 7.15138L6.08733 8L10 4L6.08733 0Z" id="Path" fill="#FFFFFF" stroke="none"/> </g> </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    
                        <div class="selected_block">
                            <form action="">
                                <h3>Selected</h3>
                                <div class="select_filter_box">
                                    <div class="common_checkbox">
                                        <div class="check_all">
                                            <div class="form-group">
                                                <input type="checkbox" id="Check_All_2" class="uncheck_all_btn"/>
                                                <label for="Check_All_2" onClick={checkall2}>Check All</label>
                                            </div>
                                            <div class="uncheck_span">
                                                <a href="#0" class="uncheck_all_2" onClick={uncheckall2}>Uncheck All</a>
                                            </div>
                                        </div>
                                        <div class="all_checkboxes">
                                            {
                                                checkboxdata.map((val, index) => {
                                                    return(
                                                        <div class="form-group" key={index}>
                                                            <input type="checkbox" class="individual_two" id={`${val.id}${index}`} />
                                                            <label for={`${val.id}${index}`}>{val.label}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                checkboxdata.map((val, index) => {
                                                    return(
                                                        <div class="form-group" key={index}>
                                                            <input type="checkbox" class="individual_two" id={`new${val.id}${index}`} />
                                                            <label for={`new${val.id}${index}`}>{val.label}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div class="select_filter_btn selected_btn">
                                    <a href="#0">
                                    <span>Remove</span></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allocation;
