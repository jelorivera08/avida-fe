import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div>login</div>
        </Route>
        <Route path='/home'>
          <div>home</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
