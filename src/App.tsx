import * as React from 'react';
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
        <HomePage />
      </Wrapper>
    );
  }
}

export default App;
