import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import Card, { Inner as CardInner } from '../Card/index';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-height: 20rem;
  box-shadow: 0 0 6px 3px #eee;
  background: ${(props: { cover?: string | null }) => `url(${props.cover})`};
  background-position: center;

  color: #fff;

  &:hover {
    box-shadow: 0 0 10px 5px #eee;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Inner = styled(CardInner)`
  z-index: 0;
  max-width: 42rem;
`;

export const Link = styled(RouterLink)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  opacity: 0;

  &:hover {
    opacity: 0.1;
  }
`;

export const Content = styled.div`
  margin: 0;
  padding: 0.5rem 0;
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