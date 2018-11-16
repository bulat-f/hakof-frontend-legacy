import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  margin: 1rem 0;
  background: #fff;
  border-radius: 2px;
  border: 1px #e0e0f0 solid;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    margin: 1rem -0.7rem;
  }
`;

export const Inner = styled.div`
  padding: 1rem 1.5rem;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    padding: 0.8rem 0.5em;
  }
`;

export default Card;