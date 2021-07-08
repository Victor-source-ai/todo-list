import React, { Component } from 'react';

// material-ui components
import { Grid } from '@material-ui/core';

// react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Todo from './pages/Todo';
import EditTodo from './pages/EditTodo';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ padding: 8 }}>
          <Grid container spacing={16} justify="center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo/" component={Todo} />
              <Route path="/edit/:id" component={EditTodo} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </div>
      </Router >
    );
  }
}

export default App;