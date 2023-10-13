import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import axios from 'axios';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { JSON_SERVER } from '../JsonConfig';

function Register() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister() {
    // 이름: 2~10자리, 한글 또는 영어만 가능
    const nameRegex = /^[가-힣a-zA-Z]{2,10}$/;

    // 닉네임: 2~12자리, 여백을 제외한 모든 문자 가능
    const nicknameRegex = /^.{2,12}$/;

    // 아이디: 영문, 숫자 조합 6~12자리
    const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;

    // 비밀번호: 영문, 숫자 조합 8~16자리
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    //유효성 검사 시작
    if (!nameRegex.test(name)) {
      alert(
        '이름은 2~10자리로 한글 또는 영어만 입력해 주세요.          한글 자음, 모음 형태(ㅋㅋ, ㅜㅜ)는 불가'
      );
      return;
    }

    if (!nicknameRegex.test(nickname)) {
      alert('닉네임은 2~12자리로 입력해 주세요');
      return;
    }

    if (!usernameRegex.test(username)) {
      alert('아이디는 영문과 숫자 조합으로 6~12자리로 입력해 주세요');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('비밀번호는 영문과 숫자 조합으로 8~16자리로 입력해 주세요');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다');
      return;
    }
    // 아이디 중복 검사

    try {
      const usersResponse = await axios.get(JSON_SERVER + '/users');
      console.log(usersResponse.data);
      const users = usersResponse.data;
      const existingUser = users.find((user) => user.username === username);

      if (existingUser) {
        alert('아이디 중복');
        return; // 중복된 아이디가 있으면 회원가입 로직을 중단한다.
      }
      //중복된 아이디가 없을 때의 회원가입 로직
      const user = {
        name,
        nickname,
        username,
        password,
        admin: false,
      };

      await axios.post(JSON_SERVER + '/users', user);
      alert('회원가입 성공');
      navigate('/Login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('회원가입 실패');
    }
  }

  return (
    <div className="register-container">
      <h1>Eat Together에 오신 것을 환영합니다</h1>
      <h2>회원가입</h2>
      <FloatingLabelInput
        type="text"
        label="이름 (2~10자리, 한글 또는 영어만)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FloatingLabelInput
        type="text"
        label="닉네임 (2~12자리)"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <FloatingLabelInput
        type="text"
        label="아이디(영문, 숫자 조합 6~12자리)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FloatingLabelInput
        type="password"
        label="비밀번호(영문, 숫자 조합 8~16자리)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FloatingLabelInput
        type="password"
        label="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="register-btn" onClick={handleRegister}>
        가입하기
      </button>
      <button className="cancel-btn" onClick={() => navigate('/Login')}>
        취소
      </button>
    </div>
  );
}

export default Register;
