import * as React from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const Wrapper = styled.div`
  margin: auto;
  max-width: 64rem;
`;

class App extends React.Component {
  public render() {
    return (      
      <Wrapper>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value: number) => (
          <Card
            key={`card-${value}`}
            source_href="https://vc.ru"
            source_title="Republic"
            title={`Title of article ${value}`}
            description={`Description of artible ${value}`}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
