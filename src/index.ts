import express from "express";

import { WebSocketServer } from "ws";

const app = express();

app.get("/", (req, res) => {
  res.send("Helo ");
});

const server = app.listen(3000);

const wss = new WebSocketServer({ server: server });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    console.log("received %s", data);
  });
  ws.send("You are connected");
});
