import Profile from './react/profile.jsx'
import React from 'react'
import Router from 'react-router'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router'

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="profile">Profile</Link>

        <RouteHandler/>
      </div>
    );
  }
});

let routes =  (
  <Route name="app" path="/" handler={App}>
    <Route name="profile" handler={Profile}/>
  </Route>
)

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'))
})
