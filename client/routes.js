import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Home from '../common/components/Home/Home'
import Layout from '../common/components/Layout/Layout'
import Register from '../common/containers/Register'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/join" component={Register} />
  </Route>
);
