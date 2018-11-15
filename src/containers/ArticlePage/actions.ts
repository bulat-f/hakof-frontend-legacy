import { Dispatch } from 'redux';
import { getOne, IArticle } from '../../api/articles';
import * as types from './constants/actionTypes';

export const fetch = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_ARTICLE_REQUEST });
    getOne(id)
      .then((article: IArticle) => dispatch({
        type: types.FETCH_ARTICLE_SUCCESS, article
      }))
      .catch(() => dispatch({
        type: types.FETCH_ARTICLE_FAULURE
      }));
  };
};