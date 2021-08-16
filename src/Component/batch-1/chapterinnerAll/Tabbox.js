import React from 'react';

import Tab from 'react-bootstrap/Tab';

function Tabbox(props) {
    return (  
        <Tab eventKey={props.eventKey} title={props.tabtitle}>
            <div className="ph-tab-content-block">
                <div className="tab-common-content">
                    <div className="tab-common-title">
                        <h3>{props.tab_common_titles}</h3>
                    </div>
                    <div className="tab-common-desc">
                        <p>{props.tab_common_descs}</p>
                    </div>
                </div>
            </div>
        </Tab>
    );
  }
  
export default Tabbox;
