import * as React from 'react';
import * as Styles from './styles';

interface IProps {
  source_href: string,
  source_title: string,
  comments_count: number;
}

const Footer = ({ source_href, source_title, comments_count }: IProps) => (
  <Styles.Footer>
    <Styles.SourceLink href={source_href}>{source_title}</Styles.SourceLink>
    <Styles.Statistics>
      <Styles.Comments />
      <Styles.CommentsCount>{comments_count}</Styles.CommentsCount>
      <Styles.Favorite />
    </Styles.Statistics>
  </Styles.Footer>
);

export default Footer;