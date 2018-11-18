import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  background: #fff;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000;
  text-decoration: none;
  font-size: 2rem;
  z-index: 200;
`;

export const MenuIcon = styled.div`
  display: none;
  height: 2rem;
  width: 2rem;
  background: url('/assets/Menu.svg') no-repeat;
  background-size: contain;
  z-index: 200;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.xsMax}px`}) {
    display: inline-block;
  }
`;

export const Menu = styled<{ show: boolean }, 'ul'>('ul')`
  display: inline-block;
  margin: 0;
  padding: 0;
  z-index: 110;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.xsMax}px`}) {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    height: calc(100vh - 4rem);
    width: 100vw;
    padding-top: 4rem;

    background-color: rgba(255, 255, 255, 0.8);

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100vw)'};
    transition: all 0.2s ease-in-out;
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: #ddf;
  }

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.xsMax}px`}) {
    display: block;
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem 0;
  }
`;