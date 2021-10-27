import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import User from './User';

const Users = (props) => {
  console.log(props);
  const path = props.match.url
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${path}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${path}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/users/:userId" component={User} />
        <Route exact path={`${path}/:userId`}>
          <span>Select user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
