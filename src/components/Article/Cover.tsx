import * as React from 'react';
import * as Styles from './styles';

class Cover extends React.PureComponent<{ src: string; }, any> {
  public render() {
    const { src } = this.props;

    return (
      <Styles.ImageWrapper>
        <Styles.Image src={src} />
      </Styles.ImageWrapper>
    );
  }
}

export default Cover;