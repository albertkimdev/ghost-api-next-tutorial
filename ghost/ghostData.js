const GhostContentAPI = require("@tryghost/content-api");

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "93a23363ce36ec868dfde5660b",
  version: "v3",
});

async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

const runit = async () => {
  const post = await getSinglePost("welcome");
  console.log(post);
};

runit();
