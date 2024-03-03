import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css"; // 스타일 파일을 import

function LoginPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/test"); // 동일한 경로에 있는 test 페이지로 이동
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 처리 로직을 추가합니다.
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "user001") {
      if (password === "qwer1234") {
        handleButtonClick();
      } else {
        alert("비번을 확인해주세요");
      }
    } else {
      alert("계정을 확인해주세요");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
