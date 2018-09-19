import * as React  from 'react';
import { H2, P }   from '../Typography';
import Header      from './Header';
import { Content, Footer, SourceLink, Wrapper } from './styles';

interface IProps {
  source_href: string;
  source_title: string;
  title: string;
  description: string;
}

class Card extends React.PureComponent<IProps, object> {
  public render() {
    const { source_href, source_title, title, description } = this.props;

    return (
      <Wrapper>
        <Header />
        <Content>
          <H2>{title}</H2>
          <P>{description}</P>
        </Content>
        <Footer>
          <SourceLink href={source_href}>{source_title}</SourceLink>
        </Footer>
      </Wrapper>
    );
  }
}

export default Card;