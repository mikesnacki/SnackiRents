import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import {FetchPropData} from './components/FetchProperty'
import { AdminForm } from './components/Admin';
import './style.scss'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route path='/FetchProperty' component={FetchPropData}/>
        <Route path='/counter' component={Counter}/>
        <Route path='/admin' component={AdminForm}/>
      </Layout>
    );
  }
}
