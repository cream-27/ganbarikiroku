import { useState } from "react";
import "./App.css";
import "./message.jsx";

function App() {
  const [count, setCount] = useState(0);

  //えらいが5回貯まったら画像変更
  if (count >= 5) {
    nomalImg.classList.add("hidden");
    secondImg.classList.remove("hidden");
  }
  //えらいが10回貯まったら画像変更
  if (count >= 10) {
    secondImg.classList.add("hidden");
    thirdImg.classList.remove("hidden");
  }
  //えらいが15回貯まったら画像変更
  if (count >= 15) {
    thirdImg.classList.add("hidden");
    Img04.classList.remove("hidden");
  }
  //えらいが20回貯まったら画像変更
  if (count >= 20) {
    Img04.classList.add("hidden");
    Img05.classList.remove("hidden");
  }

  return (
    <>
      <div>
        <p className="title">がんばりキロク</p>
      </div>
      <div>
        <h1>
          <p className="message"></p>
          <img
            id="nomalImg"
            className="Top-img"
            src="https://yuruisekai.whatshallwedotoday.net/wp-content/uploads/2022/04/9C61CFAE-2D8A-4A5A-9AEC-7F9F2836AE6F.png"
            alt="いぬさん"
          ></img>
          <img
            id="secondImg"
            className="Top-img-02 hidden"
            src="https://yuruisekai.whatshallwedotoday.net/wp-content/uploads/2022/05/yuruisekai_illustration3-1.png"
            alt="いぬさん色違い"
          ></img>
          <img
            id="thirdImg"
            className="Top-img-03 hidden"
            src="https://yuruisekai.whatshallwedotoday.net/wp-content/uploads/2022/03/yuruisekai_32-1536x1536.jpg"
            alt="尊いくまさん"
          ></img>
          <img
            id="Img04"
            className="Top-img-04 hidden"
            src="https://yuruisekai.whatshallwedotoday.net/wp-content/uploads/2022/04/10yuruisekai_illustration.png"
            alt="好きくまさん"
          ></img>
          <img
            id="Img05"
            className="Top-img-05 hidden"
            src="https://yuruisekai.whatshallwedotoday.net/wp-content/uploads/2022/07/yuruisekai_illustration98.jpg"
            alt="感謝くまさん"
          ></img>
        </h1>
      </div>
      <div className="card">
        <p className="message">自分を褒めてあげよう！</p>
        <button onClick={() => setCount((count) => count + 1)}>
          えらい {count}
        </button>
      </div>
      <p className="sub-message">今日もお疲れ様でした。</p>
    </>
  );
}

export default App;
