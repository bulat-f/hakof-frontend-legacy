import * as React  from 'react';
import { IArticle } from '../../api/articles';
import { H2, P }   from '../Typography';
import Footer      from './Footer';
import Header      from './Header';
import * as Styles from './styles';

// interface IProps {
//   href: string,
//   source_href: string;
//   source_title: string;
//   comments_count: number;
//   title: string;
//   description: string;
// }

class Card extends React.PureComponent<IArticle> {
  public render() {
    const { id, source_href, source_title, comments_count, title, description } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.Link href={`/articles/${id}`} />
        <Header />
        <Styles.Content>
          <H2>{title}</H2>
          <P>{description}</P>
        </Styles.Content>
        <Footer
          source_href={source_href}
          source_title={source_title}
          comments_count={comments_count}
        />
      </Styles.Wrapper>
    );
  }
}

export default Card;