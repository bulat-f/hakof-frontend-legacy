import { IArticleReview } from '../../../api/articles';
import * as types from '../constants/actionTypes';

const articlesReducer = (state: IArticleReview[] | null = null, action: any) => {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      return null;
    case types.FETCH_ARTICLES_SUCCESS:
      return action.articles;
    default:
      return state;
  }
};

export default articlesReducer;


