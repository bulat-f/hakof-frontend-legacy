import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
};

class ScrollToTop extends React.Component<IProps> {
  public componentDidUpdate(prevProps: IProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      console.log(prevProps, this.props);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);