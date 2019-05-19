import React from 'react';
import { renderRoutes } from 'react-router-config';
import {Route, Switch, NavLink} from 'react-router-dom'
import Home from './Home';
import Posts from './Posts'
import Todos from './Todos'
import NotFound from './NotFound'
import Routes from './routes';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        {renderRoutes(Routes)}
        {/* <Route exact path="/" render={
          props => <Home name="Abhishek Bharti" {...props}/>
        }/>
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/posts" component={Posts} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

