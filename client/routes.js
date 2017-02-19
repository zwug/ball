import React from 'react'
import { IndexRoute, Route } from 'react-router'
import About from '../common/containers/About/About'
import Home from '../common/containers/Home/Home'
import Layout from '../common/components/Layout/Layout'
import Register from '../common/containers/Register'
import Gallery from '../common/containers/Gallery/Gallery'
import Admin from '../common/containers/Admin/Admin'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/join" component={Register} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/admin" component={Admin} />
  </Route>
);
