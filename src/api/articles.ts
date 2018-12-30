const articles: IArticleReview[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => ({
  description: `Description of artible ${index + 1}`,
  id: index + 1,
  source_href: "https://republic.ru",
  source_title: "Republic",
  title: `Title of article ${index + 1}`,
  cover: (index % 2 ? 'https://meduza.io/image/attachments/images/003/412/072/large/ImqaP2yjJxGGS5IAJYO_gA.jpg' : null)
}))

export interface IArticleReview {
  id: number;
  source_href: string;
  source_title: string;
  title: string;
  description: string;
  cover?: string | null;
}

export interface IArticle extends IArticleReview {
  body: string;
}

export const getAll = () => {
  return new Promise((resolve) => {
    return resolve(articles);
  });
};

export const getOne = (id: number) => {
  return new Promise((resolve) => {
    const review: IArticleReview | undefined = articles.find((a: IArticleReview) => a.id === id);
    const article: IArticle = Object.assign({}, review, { body: 'Article about something big and great.' });
    return resolve(article);
  });
}