import styled from 'styled-components';

export const Wrapper = styled.header`
  background: #fff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled.div`
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 2rem;
`;

export const Menu = styled.ul`
  display: inline-block;
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
`;