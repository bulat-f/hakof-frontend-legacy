import * as React from 'react';
import { Inner } from '../Card';
import * as Styles from './styles';

interface IProps {
  cover?: string | null;
  children: React.ReactChild;
}

class Cover extends React.PureComponent<IProps, {}> {
  public render() {
    const { cover, children } = this.props;

    return (
      <Styles.Cover cover={cover}>
        <Inner>{children}</Inner>
      </Styles.Cover>
    );
  }
}

export default Cover;