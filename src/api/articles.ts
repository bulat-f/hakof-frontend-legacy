const articles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => new Article({
  id: index + 1,
  source_href: "https://republic.ru",
  source_title: "Republic",
  comments_count: Math.ceil(Math.random() * 50) + 12,
  title: `Title of article ${index + 1}`,
  description: `Description of artible ${index + 1}`
}))

export class Article {
  id: number;
  source_href: string;
  source_title: string;
  comments_count: number;
  title: string;
  description: string;

  constructor(attrs : any) {
    this.id = attrs.id;
    this.source_href = attrs.source_link;
    this.source_title = attrs.source_title;
    this.comments_count = attrs.comments_count;
    this.title = attrs.title;
    this.description = attrs.description;
  }
}

export const getAll = () => {
  return new Promise((resolve) => {
    return resolve(articles);
  });
};