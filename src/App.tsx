import * as React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import HomePage from './containers/HomePage';

const Wrapper = styled.div`
  margin: auto;
  max-width: 64rem;
`;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
