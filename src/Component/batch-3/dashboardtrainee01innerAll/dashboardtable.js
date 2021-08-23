import React from 'react'
import { ProgramsData, Assessments } from '../../batch-3/dashboardtrainee01innerAll/dashboarddata'

const toparrow = <svg viewBox="0 0 10 6" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-expand_arrow-copy-6" transform="matrix(1 0 0 -1 0 6)" opacity="0.3"> <path d="M5 3.67964L8.65249 0.118091C8.81526 -0.0407046 9.07569 -0.0390844 9.23845 0.121331L9.87813 0.758133C10.0409 0.92179 10.0409 1.18429 9.8765 1.34632L5.29461 5.87847C5.21322 5.95949 5.10743 6 5 6C4.89257 6 4.78678 5.95949 4.70539 5.87847L0.1235 1.34632C-0.0408944 1.18429 -0.0408944 0.92179 0.121873 0.758133L0.761547 0.121331C0.924314 -0.0390844 1.18474 -0.0407046 1.34751 0.118091L5 3.67964Z" id="Path" fill="#20A6D2" stroke="none"/> </g> </svg>
const downarrow = <svg viewBox="0 0 10 6" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"> <g id="icons8-expand_arrow"> <path d="M5 3.67964L8.65249 0.118091C8.81526 -0.0407046 9.07569 -0.0390844 9.23845 0.121331L9.87813 0.758133C10.0409 0.92179 10.0409 1.18429 9.8765 1.34632L5.29461 5.87847C5.21322 5.95949 5.10743 6 5 6C4.89257 6 4.78678 5.95949 4.70539 5.87847L0.1235 1.34632C-0.0408944 1.18429 -0.0408944 0.92179 0.121873 0.758133L0.761547 0.121331C0.924314 -0.0390844 1.18474 -0.0407046 1.34751 0.118091L5 3.67964Z" id="Path" fill="#20A6D2" stroke="none"/> </g> </svg>

const Programtable = () => {
    return(
        <div className="table-responsive">
            <table>
                <tbody>
                    <tr>
                        <th className="width_50">
                            <div className="table_heading">
                                <a href="#0" className="active">Group</a>
                                <div className="top_bottom_arrow">
                                    <a href="#0">{toparrow}</a>
                                    <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                        <th className="width_22">
                            <div className="table_heading">
                                <a href="#0">Employees</a>
                                <div className="top_bottom_arrow">
                                <a href="#0">{toparrow}</a>
                                <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                        <th className="width_28">
                            <div className="table_heading">
                                <a href="#0">Topic</a>
                                <div className="top_bottom_arrow">
                                    <a href="#0">{toparrow}</a>
                                    <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                    </tr>

                    {
                        ProgramsData.map((val, index) => {
                                {console.log(val)}
                            return(
                                <tr key={index}>
                                    <td className="width_50">{val.group}</td>
                                    <td className="width_22">{val.employees}</td>
                                    <td className="width_28">{val.Topic}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const Assessmentstable = () => {
    return (
        <div className="table-responsive">
            <table>
                <tbody>
                    <tr>
                        <th className="width_35">
                            <div className="table_heading">
                                <a href="#0" className="active">Program</a>
                                <div className="top_bottom_arrow">
                                    <a href="#0">{toparrow}</a>
                                    <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                        <th className="width_28">
                            <div className="table_heading">
                                <a href="#0">Assessment</a>
                                <div className="top_bottom_arrow">
                                <a href="#0">{toparrow}</a>
                                <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                        <th className="width_20">
                            <div className="table_heading">
                                <a href="#0">End By</a>
                                <div className="top_bottom_arrow">
                                    <a href="#0">{toparrow}</a>
                                    <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                        <th className="width_17">
                            <div className="table_heading">
                                <a href="#0">Progress</a>
                                <div className="top_bottom_arrow">
                                    <a href="#0">{toparrow}</a>
                                    <a href="#0">{downarrow}</a>
                                </div>
                            </div>
                        </th>
                    </tr>

                    {
                        Assessments.map((val, index) => {
                            return(
                                <tr key={index}>
                                    <td className="width_35">{val.program}</td>
                                    <td className="width_28">{val.assessment}</td>
                                    <td className="width_20">{val.endby}</td>
                                    <td className="width_17">{val.lastprogress}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Programtable;
export { Assessmentstable };


