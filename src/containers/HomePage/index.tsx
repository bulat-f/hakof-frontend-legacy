import * as React from 'react';
import { connect } from 'react-redux';
import { IArticle } from '../../api/articles';
import Card from '../../components/Card';

interface IProps {
  articles: IArticle[];
}

class HomePage extends React.PureComponent<IProps> {
  public render() {
    const { articles } = this.props;
    return (
      <div>
        <h1>Here is our articles</h1>
        {articles && articles.map(article => (
          <Card {...article} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any): IArticle[] | null => (
  state.articles
);

export default connect(mapStateToProps, null)(HomePage);