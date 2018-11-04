import { Dispatch } from 'redux';
import { getAll, IArticle } from '../../api/articles';
import * as types from './constants/actionTypes';

export const fetch = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_ARTICLES_REQUEST });
    getAll().then((articles: IArticle[]) => dispatch({
      articles, type: types.FETCH_ARTICLES_SUCCESS
    }));
  };
};