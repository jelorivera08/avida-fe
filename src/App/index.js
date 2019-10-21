import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const renderLogin = lazy(() => import('./containers/Login'));

const App = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' exact component={renderLogin}></Route>
          <Route path='/home' component={() => <div>home</div>}></Route>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
