const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const chats = require("./data/data.js");
const app = express();

const PORT = process.env.PORT || 7171;

app.get("/", (_, res) => {
  res.send({ success: true });
});

app.get("/api/chats", (_, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const singleChat = chats.find((chat) => chat._id === id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
