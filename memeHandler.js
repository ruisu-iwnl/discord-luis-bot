// memeHandler.js
const axios = require("axios");

const memeApiUrl = "https://meme-api.com/gimme";

const fetchRandomMeme = async () => {
  try {
    const response = await axios.get(memeApiUrl);
    return response.data.url;
  } catch (error) {
    console.error("Error fetching meme:", error);
    return null;
  }
};

const handleMemeCommand = async (message) => {
  if (message.content.toLowerCase() === "meme") {
    const memeUrl = await fetchRandomMeme();
    if (memeUrl) {
      message.channel.send(memeUrl);
    } else {
      message.channel.send("Sorry, I couldn't fetch a meme at the moment.");
    }
  }
};

module.exports = { handleMemeCommand };
