import * as React from 'react';
import { connect } from 'react-redux';
import ArticleReview from 'src/components/ArticleReview';
import { IArticleReviewList } from '../../api/articles';
import { fetch } from './actions';
import { getArticles, getFeatureds, isLoading } from './reducers';

import * as Styles from './styles';

interface IProps extends IStateProps, IDispatchProps {
  
}

class HomePage extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.fetch();
  }

  public render() {
    const { featureds, articles } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.FeaturedWrapper>
          {featureds.map(article => (
             <ArticleReview key={article.id} {...article} />
          ))}
        </Styles.FeaturedWrapper>
        {articles.map(article => (
          <ArticleReview key={article.id} {...article} />
        ))}
      </Styles.Wrapper>
    );
  }
}

interface IStateProps {
  featureds: IArticleReviewList;
  articles: IArticleReviewList;
  loading: boolean;
}

const mapStateToProps = (state: any): IStateProps => ({
  articles: getArticles(state),
  featureds: getFeatureds(state),
  loading: isLoading(state)
});

interface IDispatchProps {
  fetch: typeof fetch
}

const mapDispatchToProps : IDispatchProps = {
  fetch
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);