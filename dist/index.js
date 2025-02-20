"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Helo ");
});
const server = app.listen(3000);
const wss = new ws_1.WebSocketServer({ server: server });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        console.log("received %s", data);
    });
    ws.send("You are connected");
});
