import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  background: #fff;
  border-radius: 2px;
  border: 1px #e0e0f0 solid;
  max-width: 54rem;
`;

export const Content = styled.div`
  margin: 1rem -1.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px #f2f2ff solid;
  border-bottom: 1px #f2f2ff solid;
`;

export const Header = styled.div`
  padding: 0 0 0.5rem;
`;

export const Footer = styled.div`
`

export const SourceLink = styled.a`
  text-decoration: none;
  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    background-image: url(/assets/Link.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
`;