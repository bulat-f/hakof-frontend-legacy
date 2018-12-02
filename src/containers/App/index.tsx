import * as React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Grid } from '../../components/Grid';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import ArticlePage from '../ArticlePage';
import HomePage from '../HomePage';

const Wrapper = styled(ScrollToTop)`
`;

const Content = styled(Grid)`
  min-height: calc(100vh - 8.5rem);
`;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/articles/:id" component={ArticlePage} />
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
