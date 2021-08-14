import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import PhysicsBoxData from '../../batch-1/chapterinnerAll/ChapterData';


function Tabbox(props) {
    return (
      <div className="ph-tab-nav-block">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

            {
                PhysicsBoxData.map((val) => {
                    return(
                        
                    )
                })
            }

            <Tab eventKey="home" title="Subject Details">
                <div className="ph-tab-content-block">
                    <div className="tab-common-content">
                        <div className="tab-common-title">
                            <h3>How does it work? </h3>
                        </div>
                        <div className="tab-common-desc">
                            <p>Physics is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab eventKey="profile" title="Module Details">
                 <div className="ph-tab-content-block">
                    <div className="tab-common-content">
                        <div className="tab-common-title">
                            <h3>How does it work?</h3>
                        </div>
                        <div className="tab-common-desc">
                            <p>Physics is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Notes">
                <div className="ph-tab-content-block">
                    <div className="tab-common-content">
                        <div className="tab-common-title">
                            <h3>How does it work?</h3>
                        </div>
                        <div className="tab-common-desc">
                            <p>Physics is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
      </div>
    );
  }
  
export default Tabbox;
