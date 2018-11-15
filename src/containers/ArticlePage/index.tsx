import * as React from 'react';
import { connect } from 'react-redux';
import { IArticle } from '../../api/articles';
import Article from '../../components/Article';
import { fetch } from './actions';

interface IProps extends IStateProps, IDispatchProps {
  match: { params: { id: string }};
}

class ArticlePage extends React.Component<IProps, any> {
  public componentDidMount() {
    const { match: { params } } = this.props;
    const id = parseInt(params.id, 10);
    
    this.props.fetch(id);
  }

  public render() {
    const { article } = this.props;
    return article && (
      <Article {...article} />
    );
  }
}

interface IStateProps {
  article: IArticle | null;
}

const mapStateToProps = (state: any): IStateProps => ({
  article: state.article
});

interface IDispatchProps {
  fetch: typeof fetch
}

const mapDispatchToProps : IDispatchProps = {
  fetch
} 

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);