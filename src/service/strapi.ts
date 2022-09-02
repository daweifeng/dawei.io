import Strapi from 'strapi-sdk-js';

const strapi = new Strapi({
  url: 'https://content.dawei.io',
  prefix: '/api',
  store: {
    key: '',
    useLocalStorage: false,
    cookieOptions: { path: '/' },
  },
  axiosOptions: {},
});

export type Post = {
  id: string;
  attributes: {
    title: string;
    content: string;
    updatedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    tags: {
      data: [];
    };
  };
};

export const findAllPosts = () => {
  return strapi.find<Post[]>('posts', {
    fields: ['title', 'content', 'updatedAt'],
    populate: ['cover', 'tags'],
  });
};

export const findOnePost = (id: string) => {
  return strapi.findOne<Post>('posts', id);
};
