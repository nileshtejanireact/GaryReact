
import React,  { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import Loader from '../Component/Loader/Loader';
import routes from '../Routes';

function Appcontent(props) {

  const onchagebody = () => {
    const student_as_location = window.location.pathname;
    const fullPageLayoutRoutes = ['/student_assessment', '/chapterinner1', '/chapterinner2', '/chapterinner3'];

    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ){
      if(student_as_location === fullPageLayoutRoutes[i]){
          document.body.classList.add('student_assessment_body');
          break;
      }
      else{
          document.body.classList.remove('student_assessment_body');
      }  
    }
  }
  
  useEffect(() => {
    onchagebody();
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
