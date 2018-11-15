import { IArticle } from '../../../api/articles';
import * as types from '../constants/actionTypes';

const articleReducer = (state: IArticle | null = null, action: any) => {
  switch (action.type) {
    case types.FETCH_ARTICLE_REQUEST:
      return null;
    case types.FETCH_ARTICLE_SUCCESS:
      return action.article;
    case types.FETCH_ARTICLE_FAULURE:
      return null;
    default:
      return state;
  }
};

export default articleReducer;