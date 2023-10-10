import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h1>Eat Together에 오신 것을 환영합니다</h1>
      <h2>회원가입</h2>
      <input type="text" placeholder="이름 (2자리 이상)" />
      <input type="text" placeholder="닉네임 (3자리 이상)" />
      <input type="text" placeholder="아이디(4자리 이상)" />
      <input type="password" placeholder="비밀번호(4자리 이상, 영문, 숫자 혼합)" />
      <input type="password" placeholder="비밀번호 확인" />
      <button>가입하기</button>
      <button>취소</button>
    </div>
  );
}

export default Register;
