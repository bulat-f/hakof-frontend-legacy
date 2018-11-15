import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import articleReducer from '../containers/ArticlePage/reducers';
import articlesReducer from '../containers/HomePage/reducers';

const createRootReducer = (history: any) => combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  form: formReducer,
  router: connectRouter(history),
});

export default createRootReducer;
