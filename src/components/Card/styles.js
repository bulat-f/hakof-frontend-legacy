import styled from 'styled-components';
import ReactSVG from 'react-svg';

export const Wrapper = styled.div`
  position: relative;
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  background: #fff;
  border-radius: 2px;
  border: 1px #e0e0f0 solid;
  max-width: 54rem;
`;

export const Link = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
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
  display: flex;
  justify-content: space-between;

  & > * {
    z-index: 100;
  }
`;

export const Statistics = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Icon = styled(ReactSVG).attrs({
  svgStyle: {
    height: '1.2rem',
    width: '1.2rem'
  }
})`
  display: inline-block;
  stroke: blue;
  cursor: pointer;

  &:hover {
    fill: rgba(0, 0, 255, 0.7);
  }
`;

export const Favorite = Icon.extend.attrs({
  src: '/assets/Star.svg',
})`
  fill: ${props => props.selected ? 'blue' : 'transparent'};

  &:hover {
    fill: ${props => props.selected ? 'blue' :  'rgba(0, 0, 255, 0.7)'}
  }
`;

export const Comments = Icon.extend.attrs({
  src: '/assets/Comment.svg',
})`
`;

export const CommentsCount = styled.span`
  margin: 0 0.4rem;
  cursor: pointer;
`;

export const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  &::before {
    content: '';
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(/assets/Link.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-right: 0.25rem;
  }
`;