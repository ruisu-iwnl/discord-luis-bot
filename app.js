const express = require("express");
const app = express();
const mySecret = process.env['token'];
const { client } = require("./discordBot");

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("testing!");
});

client.login(mySecret);
