// const articles: Array<IArticle> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => ({
//   id: index + 1,
//   source_href: "https://republic.ru",
//   source_title: "Republic",
//   comments_count: Math.ceil(Math.random() * 50) + 12,
//   title: `Title of article ${index + 1}`,
//   description: `Description of artible ${index + 1}`
// }))

export interface IArticle {
  id: number;
  source_href: string;
  source_title: string;
  comments_count: number;
  title: string;
  description: string;
}

// export const getAll = () => {
//   return new Promise((resolve) => {
//     return resolve(articles);
//   });
// };