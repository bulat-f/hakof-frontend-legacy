import * as React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Grid } from '../../components/Grid';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import ArticlePage from '../ArticlePage';
import HomePage from '../HomePage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled(Grid)`
  flex-grow: 1;
`;

class App extends React.Component {
  public render() {
    return (
      <ScrollToTop>
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
      </ScrollToTop>
    );
  }
}

export default App;
