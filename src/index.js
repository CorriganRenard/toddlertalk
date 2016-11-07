
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadBeeHives} from './actions/beeHiveActions';
import {loadHiveTypes} from './actions/hiveTypeActions';

import {loadSuperTypes} from './actions/superTypeActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
// import '../node_modules/jquery/dist/jquery.min';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';

const store = configureStore();

store.dispatch(loadBeeHives());

store.dispatch(loadHiveTypes());
store.dispatch(loadSuperTypes());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')

);
