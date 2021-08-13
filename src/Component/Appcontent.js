
import React,  { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import Loader from '../Component/Loader/Loader';
import routes from '../Routes';

function Appcontent(props) {
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

export default Appcontent;
