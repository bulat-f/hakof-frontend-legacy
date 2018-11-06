import * as React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Header from '../../components/Header';
import HomePage from '../HomePage';

const Wrapper = styled.div`
  margin: auto;
  max-width: 64rem;
`;

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
          </Switch>
        </Wrapper>
      </div>
    );
  }
}

export default App;
