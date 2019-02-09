import * as React  from 'react';
import { IArticleReview } from 'src/api/articles';
import { H1, P }   from '../Typography';
import Header      from './Header';
import * as Styles from './styles';


class FeaturedArticleReview extends React.PureComponent<IArticleReview> {
  public render() {
    const { id, title, description, cover } = this.props;

    return (
      <Styles.Wrapper cover={cover}>
        <Styles.Link to={`/articles/${id}`} />
        <Styles.Inner>
          <Header />
          <Styles.Content>
            <H1>{title}</H1>
            <P>{description}</P>
          </Styles.Content>
        </Styles.Inner>
      </Styles.Wrapper>
    );
  }
}

export default FeaturedArticleReview;