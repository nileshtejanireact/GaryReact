
import React,  { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import Loader from '../Component/Loader/Loader';
import routes from '../Routes';

function Appcontent(props) {
  
  useEffect(() => {
    // const student_as_location = window.location.href;
    // if(student_as_location.indexOf("assessments")>-1){
    //     document.body.classList.add('student_assessment_body');
    // }
    // else{
    //     document.body.classList.remove('student_assessment_body');
    // }  
  })

  return (
    <>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
            <Redirect from="/" to="/Home_batch_1" />
          </Switch>
        </Suspense>
    </>
  );
}

export default withRouter(Appcontent);
