import * as React from 'react';
import * as Styles from './styles';

interface IProps {
  source_href: string,
  source_title: string,
}

const Footer = ({ source_href, source_title }: IProps) => (
  <Styles.Footer>
    <Styles.SourceLink href={source_href}>{source_title}</Styles.SourceLink>
    <Styles.Statistics />
  </Styles.Footer>
);

export default Footer;