const url = 'https://content.dawei.io/api';

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

export const findAllPosts = async () => {
  return await (
    await fetch(`${url}/posts?populate[0]=cover&populate[1]=tags`)
  ).json();
};

export const findOnePost = async (id: string) => {
  return (await fetch(`${url}/posts/${id}`)).json();
};
