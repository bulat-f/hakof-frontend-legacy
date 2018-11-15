import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.8rem;
`;

export const H2 = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4rem;
  margin: 0.4rem 0;
`;

interface IParagraphProps {
  italic?: boolean;
}

export const P = styled<IParagraphProps, 'p'>('p')`
  font-family: 'Open Sans', sans-serif;
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  margin: 0.5rem 0;
`;