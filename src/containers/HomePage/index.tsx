import * as React from 'react';
import { connect } from 'react-redux';
import { IArticleReview, IArticleReviewList } from 'src/api/articles';
import ArticleReview from 'src/components/ArticleReview';
import FeaturedArticleReview from 'src/components/FeaturedArticleReview';
import { fetch } from './actions';
import { getArticles, getFeatured, getSelected, isLoading } from './reducers';

import * as Styles from './styles';

interface IProps extends IStateProps, IDispatchProps {
  
}

class HomePage extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.fetch();
  }

  public render() {
    const { featured, selected, articles } = this.props;

    return (
      <Styles.Wrapper>
        <FeaturedArticleReview {...featured} />
        <Styles.Section>
          {selected.map(article => (
             <ArticleReview key={article.id} {...article} />
          ))}
        </Styles.Section>
        {articles.map(article => (
          <ArticleReview key={article.id} {...article} />
        ))}
      </Styles.Wrapper>
    );
  }
}

interface IStateProps {
  featured: IArticleReview;
  selected: IArticleReviewList;
  articles: IArticleReviewList;
  loading: boolean;
}

const mapStateToProps = (state: any): IStateProps => ({
  featured: getFeatured(state),
  articles: getArticles(state),
  selected: getSelected(state),
  loading: isLoading(state)
});

interface IDispatchProps {
  fetch: typeof fetch
}

const mapDispatchToProps : IDispatchProps = {
  fetch
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);