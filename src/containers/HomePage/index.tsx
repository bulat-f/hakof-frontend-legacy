import * as React from 'react';
import { connect } from 'react-redux';
import ArticleReview from 'src/components/ArticleReview';
import { IArticleReview } from '../../api/articles';
import { fetch } from './actions';

interface IProps extends IStateProps, IDispatchProps {
  
}

class HomePage extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.fetch();
  }

  public render() {
    const { articles } = this.props;
    return (
      <div>
        <h1>Here is our articles ({articles && articles.length})</h1>
        {articles && articles.map(article => (
          <ArticleReview {...article} />
        ))}
      </div>
    );
  }
}

interface IStateProps {
  articles: IArticleReview[] | null;
}

const mapStateToProps = (state: any): IStateProps => ({
  articles: state.articles
});

interface IDispatchProps {
  fetch: typeof fetch
}

const mapDispatchToProps : IDispatchProps = {
  fetch
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);