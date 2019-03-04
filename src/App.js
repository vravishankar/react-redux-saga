// @flow

import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './services/history'
import PostsPage from './components/PostsPage'

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/posts" />}/>
            <Route path="/posts" component={ PostsPage } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
