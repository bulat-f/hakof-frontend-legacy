import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

injectGlobal`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f0f0f0;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Sans+Pro:400,700,900&subset=cyrillic-ext');
  h1, h2 {
    font-family: 'Source Sans Pro', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }
`;

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
