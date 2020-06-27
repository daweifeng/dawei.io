import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.dawei.io",
  key: "6113bcfdc657268ce9fae38a95",
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      fields: ["id", "title", "feature_image","updated_at"],
      include: "tags"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getOnePost(id: string) {
  return await api.posts
    .read({id})
    .catch(err => {
      console.error(err);
    });
}