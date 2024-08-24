const axios = require("axios");

const memeApiUrl = "https://meme-api.com/gimme";
const allowedChannelId = "1276620142238765188"; 
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
    if (message.channel.id === allowedChannelId) {
      const memeUrl = await fetchRandomMeme();
      if (memeUrl) {
        message.channel.send(memeUrl);
      } else {
        message.channel.send("Sorry, I couldn't fetch a meme at the moment.");
      }
    } else {
      message.channel.send("bawal d2. punta k meme-bot channel");
    }
  }
};

module.exports = { handleMemeCommand };
