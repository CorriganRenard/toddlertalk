import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import BeeHivePage from './components/beeHive/BeeHivePage';
import ManageBeeHivePage from './components/beeHive/ManageBeeHivePage';
import BeeHiveDataPage from './components/beeHive/BeeHiveDataPage';
import ManageSuperPage from './components/beeHive/ManageSuperPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="beehives" component={BeeHivePage} />
    <Route path="beehive" component={ManageBeeHivePage} />
    <Route path="beehive/:id" component={ManageBeeHivePage} />
    <Route path="hivedata/:id/superbox" component={ManageSuperPage} />
    <Route path="hivedata/:id/superbox/:superid" component={ManageSuperPage} />
    <Route path="about" component={AboutPage} />
    <Route path="hivedata/:id" component={BeeHiveDataPage} />


  </Route>
);
