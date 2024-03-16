import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/author.css"; // 스타일 파일을 import

function Investment() {
  const location = useLocation();
  const { username } = location.state;
  const [textareaValue, setTextareaValue] = useState(""); // textarea 값의 state 추가

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Buti", {
      state: { username, textareaValue },
    });
  };

  const handleResultButtonClick = () => {
    // textareaValue가 비어있는지 여부를 확인합니다.
    if (textareaValue.trim() !== "") {
      // textareaValue가 비어있지 않으면 실행할 로직을 여기에 추가합니다.
      handleButtonClick();
    } else {
      // textareaValue가 비어있으면 알림을 표시할 수 있습니다.
      alert("Please answer all questions.");
    }
  };

  return (
    <div>
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
        <div className="result">
          <div style={{ width: "100%" }}>
            <button
              onClick={handleResultButtonClick}
              title="결과"
              style={{
                color: "#ffffff",
              }}
            >
              <span>테스트 시작!!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
