const GoogleImages = require("google-images");
const cors = require("micro-cors")();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const client = new GoogleImages(
  process.env.GOOGLE_CSE_ID,
  process.env.GOOGLE_API_KEY
);

let images = [];

function updateImages() {
  client.search("puppies").then(results => {
    images = results;
    console.log("Images updated");
  });
}

updateImages();

setInterval(updateImages, 900000);

module.exports = cors(() => {
  return images;
});
