import React from "react";

function RandomMessage() {
  const messages = [
    "えらい！",
    "さすがすぎる！！！",
    "ご褒美あげようね！",
    "１００点！！！！",
    "たくさん食べても０カロリー♩",
    "がんばってえらい！",
    "１日乗り越えてえらすぎる〜！",
    "休むのも、アリ！！！",
    "自分にはなまるあげようね〜",
    "アイストリプルにしちゃお",
  ];

  const getNumbers = (num, min = 0, max = 9) => {
    const numbers = [];
    for (let i = min; i <= max; i++) {
      numbers.push(i);
    }

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };
    const shuffleNumbers = shuffle(numbers);
    return shuffleNumbers.slice(0, num);
  };

  const randomIndices = getNumbers(1, 0, messages.length);
  const getRandomMessage = randomIndices.map((index) => messages[index]);

  console.log(getRandomMessage);

  const randomIndex = Math.floor(Math.random() * messages.length);

  return messages[randomIndex]; // randomIndexを使用してメッセージを返す
}

export default RandomMessage;
