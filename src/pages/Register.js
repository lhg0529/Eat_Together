import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister() {
    if(password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
  
    const user = {
      name,
      nickname,
      username,
      password,
    };
  
    axios.post('http://localhost:3000/users', user)
      .then(response => {
        alert('회원가입 성공');
      })
      .catch(error => {
        console.error("Error during registration:", error);
        alert('회원가입 실패');
      });
  }

  return (
    <div className="register-container">
      <h1>Eat Together에 오신 것을 환영합니다</h1>
      <h2>회원가입</h2>
      <input type="text" placeholder="이름 (2자리 이상)" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="닉네임 (3자리 이상)" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input type="text" placeholder="아이디(4자리 이상)" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="비밀번호(4자리 이상, 영문, 숫자 혼합)" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleRegister}>가입하기</button>
      <button>취소</button>
    </div>
  );
}





export default Register;
