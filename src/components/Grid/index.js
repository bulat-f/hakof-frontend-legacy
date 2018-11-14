import styled, { css } from 'styled-components';

const clearfix = css`
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const percentage = (count, total) => `${(count || total) / total * 100}%`;

export const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left:  ${({ theme }) => `${theme.grid.gutterWidth / 2}px`};
  padding-right: ${({ theme }) => `${theme.grid.gutterWidth / 2}px`};
  ${clearfix};

  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    max-width: ${({ theme }) => `${theme.containerWidth.sm}px`};
  }
  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.mdMin}px`}) {
    max-width: ${({ theme }) => `${theme.containerWidth.md}px`};
  }
  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.lgMin}px`}) {
    max-width: ${({ theme }) => `${theme.containerWidth.lg}px`};
  }
`;

export const Row = styled.div`
  margin-left:  ${({ theme }) => `-${theme.grid.gutterWidth / 2}px`};
  margin-right: ${({ theme }) => `-${theme.grid.gutterWidth / 2}px`};
  ${clearfix};

  ${props => props.flex && css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-wrap: nowrap !important;
  `}
`;

export const Col = styled.div`
  position: relative;
  float: left;
  min-height: 1px;
  padding-left:  ${({ theme }) => `${theme.grid.gutterWidth / 2}px`};
  padding-right: ${({ theme }) => `${theme.grid.gutterWidth / 2}px`};

  width: ${({ theme, xs }) => percentage(xs, theme.grid.columns)};

  @media (min-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    width: ${({ theme, sm, xs }) => percentage(sm || xs, theme.grid.columns)};
  }
  @media (min-width: ${({ theme }) => `${theme.mediaSizes.mdMin}px`}) {
    width: ${({ theme, md, sm, xs }) => percentage(md || sm || xs, theme.grid.columns)};
  }
  @media (min-width: ${({ theme }) => `${theme.mediaSizes.lgMin}px`}) {
    width: ${({ theme, lg, md, sm, xs }) => percentage(lg || md || sm || xs, theme.grid.columns)};
  }
`;