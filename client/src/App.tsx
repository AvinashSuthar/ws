import { WebSocket } from "ws";
import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState();
  const ws = new WebSocket("ws://localhost:3000");

  ws.onmessage = function (e) {
    setMessage();
  };

  return <>{}</>;
}

export default App;
