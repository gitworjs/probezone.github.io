import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/author.css"; // 스타일 파일을 import
// import "../assets/css/noscript.css";
import "../assets/css/main.css";

function Author() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Investment", { state: { username } });
  };

  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username !== "") {
      handleButtonClick();
    } else {
      alert("이름을 입력해주세요");
    }
  };

  return (
    <div className="centered-content">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <p className="form-p">테스터님의 이름을 알려주세요.</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="white-input"
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
