import * as React from 'react';
import { Route, Switch } from 'react-router';
// import styled from 'styled-components';
import HomePage from './containers/HomePage';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
