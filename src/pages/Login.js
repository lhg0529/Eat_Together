import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../img/ET_Logo.png';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogin() {
    /**아이디와 비밀번호에 공백이 있을 경우 */
    if (!username || !password) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }

    // db.json에서 사용자 정보를 가져옵니다
    axios
      .get(JSON_SERVER + '/users')
      .then((response) => {
        const users = response.data;
        const user = users.find((user) => user.username === username);

        if (!user) {
          alert('아이디가 일치하지 않습니다.');
          return;
        }
        if (user.password !== password) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }

        // password를 제거한 후 로컬스토리지에 데이터 저장
        const userToStore = { ...user };
        delete userToStore.password;

        localStorage.setItem('user', JSON.stringify(userToStore)); //로컬 스토리지에 사용자 정보 저장
        setIsLoggedIn(true);
        navigate('/ETMain');
      })
      .catch((error) => {
        alert('로그인 중 오류 발생');
      });
  }

  // 아이디 비밀번호 입력 후 엔터 키 감지하여 로그인하기
  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <div className="login-outer-container">
      <p className="welcome-text">함께 먹는 즐거움</p>
      <h1>Eat Together</h1>
      <div className="logo">
        <img src={logo} alt="ET Logo" />
      </div>
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button className="login-btn" onClick={handleLogin}>
        로그인
      </button>
      <Link to="/Register">
        <button className="register-page-btn">회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
