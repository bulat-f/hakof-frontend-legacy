import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  html {
    font-size: 16px;
    overflow: auto;
  }

  body {
    font-family: sans-serif;
    background: #f4f4ff;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Sans+Pro:400,700,900&subset=cyrillic-ext');
`;

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
