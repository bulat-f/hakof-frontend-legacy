import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  min-height: 30rem;
  width: 100%;
  margin: 1rem 0;
`;

export const Image = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;