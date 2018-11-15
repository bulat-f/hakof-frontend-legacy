import * as React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Grid } from '../../components/Grid';
import Header from '../../components/Header';
import ArticlePage from '../ArticlePage';
import HomePage from '../HomePage';

const Wrapper = styled.div`
`;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Header />
        <Grid>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/articles/:id" component={ArticlePage} />
          </Switch>
        </Grid>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
