
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/css/style.css';
import '../src/assets/css/new_style.css';
import '../src/assets/css/responsive.css';



//Main Directory Component
import Header from '../src/Component/Header'
import Siderbar from '../src/Component/Siderbar'
import Appcontent from '../src/Component/Appcontent'

function App(props) {
  const [fullpage, setfullpage] = useState(true)

  const fullpagestate = (data) => {
    setfullpage(data);
  } 

  return (
    <>
        <Header fullpagep = {fullpage}/>
        {fullpage && <Siderbar />}
        <div className="cm-overlay"></div>
        <Appcontent onfullpagestate = {fullpagestate}/> 
    </>
  );
}

export default App;
