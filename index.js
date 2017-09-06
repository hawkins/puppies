const GoogleImages = require("google-images");
const cors = require("micro-cors")();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const client = new GoogleImages(
  process.env.GOOGLE_CSE_ID,
  process.env.GOOGLE_API_KEY
);

let images = [];

client.search("puppies").then(results => (images = results));

module.exports = cors(() => {
  if (images) return images;
});
