import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.dawei.io",
  key: "09d856053732d1953fced1bbef",
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}