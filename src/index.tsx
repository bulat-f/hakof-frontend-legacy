import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
