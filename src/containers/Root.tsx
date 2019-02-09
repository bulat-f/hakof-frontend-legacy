import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider} from 'styled-components';
import App from './App';

const theme = {
  colors: {
    success: '#0e2439',
    primary: '#c6aa76',
    info: '#fff',
    error: '#e74c3c',
  },
  mediaSizes: {
    xsMin: 480,
    smMin: 768,
    mdMin: 992,
    lgMin: 1200,

    xsMax: 767,
    smMax: 991,
    mdMax: 1199,
  },
  grid: {
    columns: 12,
    gutterWidth: 30,
  },
  containerMaxWidth: 1140
};

class Root extends React.Component<any> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
