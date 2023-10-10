import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <h1>함께 먹는 즐거움</h1>
      <h2>Eat Together</h2>
      <div className="logo">
        <img src='img/ET주황색.png' alt="ET Logo" />
      </div>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>
      <Link to="/board"> {/* board 경로는 Register 컴포넌트로 설정되어 있습니다. */}
        <button>회원가입</button>
      </Link>
    </div>
    
  );
}



export default Login;

