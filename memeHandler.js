const axios = require("axios");

const subreddit = "shitposting";
const memeApiUrl = `https://meme-api.com/gimme/${subreddit}`;
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
  if (message.channel.id === allowedChannelId) {
    if (message.content.toLowerCase() === "meme") {
      const memeUrl = await fetchRandomMeme();
      if (memeUrl) {
        message.channel.send(memeUrl);
      } else {
        message.channel.send("Sorry, I couldn't fetch a meme at the moment.");
      }
    } else {
      await message.delete();
      try {
        const responseMessage = await message.channel.send(
          "```\nOnly 'meme' is allowed in this channel.\n```"
        );
        setTimeout(() => responseMessage.delete().catch(console.error), 60000);
      } catch (error) {
        console.error("Error sending response message:", error);
      }
    }
  } else if (message.content.toLowerCase() === "meme") {
    await message.delete();
    try {
      const warningMessage = await message.channel.send(
        "Please use the 'meme' command in the #meme-bot channel."
      );
      setTimeout(() => warningMessage.delete().catch(console.error), 60000);
    } catch (error) {
      console.error("Error sending warning message:", error);
    }
  }
};

module.exports = { handleMemeCommand };
