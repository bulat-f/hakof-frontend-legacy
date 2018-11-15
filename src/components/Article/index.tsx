import * as React from 'react';
import { IArticle } from '../../api/articles';
import Card, { Inner } from '../Card';
import { H1, P } from '../Typography';
import Cover from './Cover';

class Article extends React.PureComponent<IArticle, any> {
  public render() {
    const { title, description, cover, body } = this.props;
    return (
      <Card>
        <Inner>
          <H1>{title}</H1>
          <P italic={true}>{description}</P>
          {cover && <Cover src={cover} />}
          <P>{body}</P>
        </Inner>
      </Card>
    );
  }
}

export default Article;