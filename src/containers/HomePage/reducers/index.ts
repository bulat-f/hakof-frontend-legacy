import { IArticleReview, IArticleReviewList } from '../../../api/articles';
import * as types from '../constants/actionTypes';

const articlesReducer = (state: any = null, action: any): IArticleReviewList | null => {
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

export const getArticles = (state: any): IArticleReviewList => {
  return state.articles ? state.articles.filter((article : IArticleReview) => !article.featured) : []
};

export const getFeatureds = (state: any): IArticleReviewList => {
  return state.articles ? state.articles.filter((article : IArticleReview) => article.featured) : []
};

export const isLoading = (state: any): boolean => Boolean(state);


