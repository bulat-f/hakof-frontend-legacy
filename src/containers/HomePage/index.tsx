import * as React from 'react';
import { connect } from 'react-redux';
import { Article } from '../../api/articles';
import Card from '../../components/Card';

interface IProps {
  articles: Array<Article>;
}

class HomePage extends React.PureComponent<IProps> {
  render() {
    const { articles } = this.props;
    return (
      articles && articles.map(article => (
        <Card {...article} />
      ))
    );
  }
}

export default connect()(HomePage);