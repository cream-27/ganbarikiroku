import React from "react";

function RandomMessage() {
  const messages = [
    "今日もえらい！",
    "さすがすぎる！！！",
    "ご褒美にケーキ食べようね！",
    "今日も１００点！！！！",
    "たくさん食べても０カロリー",
    "今日もがんばってえらい！",
    "１日乗り越えてえらすぎる〜！",
    "一旦休むのも、アリ！！！",
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
}

export default RandomMessage;
