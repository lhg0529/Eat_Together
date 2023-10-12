import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../img/ET_Logo.png";
import Register from "./Register";
import axios from "axios";
import ETMain from "./ETMain";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
      
    }
  }, []);

  function handleLogin() {
    // db.json에서 사용자 정보를 가져옵니다.
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          alert("로그인 성공");
          localStorage.setItem("user", JSON.stringify(user)); //로컬 스토리지에 사용자 정보 저장
          setIsLoggedIn(true);
          navigate("/ETMain");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        alert("로그인 중 오류 발생");
      });
  }

  return (
    <div className="outer-container">
      <div className="login-container">
        <p className="welcome-text">함께 먹는 즐거움</p>
        <h1>Eat Together</h1>
        <div className="logo">
          <img src={logo} alt="ET Logo" />
        </div>
        <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-btn" onClick={handleLogin}>로그인</button>
        <Routes>
          <Route
            path="/Register"
            element={<Register></Register>}
          ></Route>
          <Route
            path="/ETMain"
            element={<ETMain></ETMain>}
          ></Route>
        </Routes>
        <Link to="/Register">
          <button className="register-page-btn">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
