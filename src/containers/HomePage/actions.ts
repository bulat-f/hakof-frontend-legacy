import { Dispatch } from 'redux';
import { getAll, IArticleReview } from '../../api/articles';
import * as types from './constants/actionTypes';

export const fetch = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_ARTICLES_REQUEST });
    getAll().then((articles: IArticleReview[]) => dispatch({
      articles, type: types.FETCH_ARTICLES_SUCCESS
    }));
  };
};