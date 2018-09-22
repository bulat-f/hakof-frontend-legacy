import styled from 'styled-components';
import ReactSVG from 'react-svg';

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
`;

interface IReactSVG {
  path: string;
}

export const Favorite = styled<IReactSVG>(ReactSVG).attrs({
})`
`;

export const SourceLink = styled.a`
  text-decoration: none;
  &::before {
    content: '';
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-image: url(/assets/Link.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    margin-right: 0.25rem;
  }
`;