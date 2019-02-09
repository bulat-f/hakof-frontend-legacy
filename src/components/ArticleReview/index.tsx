import * as React  from 'react';
import { IArticleReview } from '../../api/articles';
import { H2, P }   from '../Typography';
import Cover       from './Cover'
import Footer      from './Footer';
import Header      from './Header';
import * as Styles from './styles';
import Wrapper from './Wrapper';

// interface IProps {
//   href: string,
//   source_href: string;
//   source_title: string;
//   comments_count: number;
//   title: string;
//   description: string;
// }

class ArticleReview extends React.PureComponent<IArticleReview> {
  public render() {
    const { id, source_href, source_title, title, description, cover, featured } = this.props;

    return (
      <Wrapper featured={featured}>
        <Cover src={cover} />
        <Styles.Link to={`/articles/${id}`} />
        <Styles.Inner>
          <Header />
          <Styles.Content>
            <H2>{title}</H2>
            <P>{description}</P>
          </Styles.Content>
          <Footer
            source_href={source_href}
            source_title={source_title}
          />
        </Styles.Inner>
      </Wrapper>
    );
  }
}

export default ArticleReview;