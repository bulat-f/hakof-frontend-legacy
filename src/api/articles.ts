const articles: IArticleReview[] = [13, 15, 0, 1, 3, 5, 6, 7, 8, 9, 11, 17].map(index => ({
  description: `Description of artible ${index + 1}`,
  id: index + 1,
  source_href: "https://republic.ru",
  source_title: "Republic",
  title: index === 17 ? 'Title of featured article. We should test it on all kind of backgrounds' : `Title of article ${index + 1}`,
  cover: (index % 2 ? `/images/image-${index}.jpg` : null),
  selected: index % 2 !== 0 && index < 6,
  featured: index === 17
}))

export interface IArticleReview {
  id: number;
  source_href: string;
  source_title: string;
  title: string;
  description: string;
  cover?: string | null;
  selected?: boolean;
  featured?: boolean;
}

export interface IArticleReviewList extends Array<IArticleReview> {
}

export interface IArticle extends IArticleReview {
  body: string;
}

export const getAll = (): Promise<IArticleReviewList> => {
  return new Promise((resolve) => {
    return resolve(articles);
  });
};

export const getOne = (id: number): Promise<IArticleReview> => {
  return new Promise((resolve) => {
    const review: IArticleReview | undefined = articles.find((a: IArticleReview) => a.id === id);
    const article: IArticle = Object.assign({}, review, { body: 'Article about something big and great.' });
    return resolve(article);
  });
}