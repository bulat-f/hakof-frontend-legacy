import styled, { css } from 'styled-components';
import Card from '../Card/index';

export const Wrapper = styled(Card)`
  display: flex;
  flex-grow: 1;
  min-height: 10rem;
  min-width: 20rem;
  box-shadow: 0 0 6px 3px #eee;
  flex-direction: ${(props: {selected?: boolean}) => props.selected ? 'column' : 'row'};

  &:hover {
    box-shadow: 0 0 10px 5px #eee;
  }

  ${(props: {selected?: boolean}) => props.selected ? (
    css`
      margin: 0.5rem !important;
    `
  ) : (
    css``
  )}

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    flex-direction: column;
  }
`;

export default Wrapper;