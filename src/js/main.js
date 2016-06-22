import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import About from './pages/About'
import Layout from './pages/Layout'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import Profiles from './pages/Profiles'
import ProfileDetails from './components/profiles/ProfileDetails'
import Slider from './pages/Slider'


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="profiles" name="profiles">
        <IndexRoute component={Profiles}></IndexRoute>
        <Route path="profile(/:profiledetails)" name="profiledetails" component={ProfileDetails}></Route>
      </Route>
      <Route path="about" name="about" component={About}></Route>
      <Route path="todolist" name="todolist" component={TodoList}></Route>
      <Route path="slider" name="slider" component={Slider}></Route>
    </Route>
  </Router>,
  app);
