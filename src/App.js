
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/css/style.css';
import '../src/assets/css/new_style.css';
import '../src/assets/css/responsive.css';



//Main Directory Component
import Header from '../src/Component/Header'
import Siderbar from '../src/Component/Siderbar'
import Appcontent from '../src/Component/Appcontent'


import routes from './Routes';

function App(props) {
  


  return (
    <>
        <Header />
        <Siderbar />
        <Appcontent />
    </>
  );
}

export default App;
