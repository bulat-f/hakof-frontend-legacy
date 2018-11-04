import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import articlesReducer from './articlesReducer';

const createRootReducer = (history: any) => combineReducers({
  articles: articlesReducer,
  form: formReducer,
  router: connectRouter(history),
});

export default createRootReducer;
