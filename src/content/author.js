import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/author.css"; // 스타일 파일을 import
// import "../assets/css/noscript.css";
import "../assets/css/main.css";

function Author() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Buti", { state: { username, password, textareaValue } });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textareaValue, setTextareaValue] = useState(""); // textarea 값의 state 추가

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username !== "") {
      if (password !== "") {
        handleButtonClick();
      } else {
        alert("이름과 전화번호를 입력해주세요");
      }
    } else {
      alert("이름과 전화번호를 입력해주세요");
    }
  };

  return (
    <div className="centered-content">
      <div className="content">
        <p>
          <span>아웃사이드 뷰티, 이너 뷰티, 마인드 뷰티</span>
          <br />
          중에 투자하고 있는 것은?
          <br />
          <textarea
            type="text"
            className="white-input"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </p>
        <form onSubmit={handleSubmit}>
          <p className="form-p">테스터님의 이름을 알려주세요.</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="white-input" // 새로운 클래스 추가
          />
          <p className="form-p">이야기를 나눌 수 있는 연락처를 입력해주세요.</p>
          <input
            type="text"
            className="white-input" // 새로운 클래스 추가
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">
            <p>테스트 시작하기</p>
          </button>
        </form>
        <p className="form-p1">
          귀하의 개인 정보는 안전하게 보호되며,
          <br />
          이를 통해 저희는 테스터님과 소중한 이야기를 나누게 됩니다.
        </p>
      </div>
    </div>
  );
}

export default Author;
