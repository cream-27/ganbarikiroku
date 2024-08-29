import React, { useState } from "react";

function RandomMessage() {
  const messages = [
    "今日もえらい！",
    "さすがすぎる！！！",
    "ご褒美にケーキ食べようね！",
    "今日も１００点！！！！",
    "たくさん食べても０カロリー",
  ];

  const [message, setMessages] = useState("");

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessages(messages[randomIndex]);
  };
}

export default RandomMessage;
