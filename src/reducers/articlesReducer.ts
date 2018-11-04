import { IArticle } from '../api/articles';

const articlesReducer = (state: IArticle[] | null = null, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default articlesReducer;


