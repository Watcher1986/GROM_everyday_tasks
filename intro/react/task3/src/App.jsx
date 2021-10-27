import React from 'react';
import Users from './Users';
import Home from './Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/names">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/names" component={Users} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
