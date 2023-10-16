import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import ETHeader from '../components/ETHeader';
import '../styles/MyPage.css';
import ETNav from '../components/ETNav';

function MyPage() {
  // 상태 설정
  const [userData, setUserData] = useState({
    username: '',
    nickname: '',
    name: '',
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const storedData = localStorage.getItem('user');

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // 필요한 데이터만 선택하여 상태에 저장
      const { name, nickname, username } = parsedData;
      setUserData({ name, nickname, username });
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('user'); // 로컬 스토리지에서 사용자 데이터 제거
    navigate('/login'); // 로그인 페이지로 리다이렉트
  };

  return (
    <div>
      <ETHeader name="마이 페이지" />
      <div className="mypage-container">
        <div className="mypage-user-info">
          <div className="mypage-info-item">
            <span className="mypage-info-label">아이디</span>
            <span className="mypage-info-value">{userData.username}</span>
          </div>
          <div className="mypage-info-item">
            <span className="mypage-info-label">닉네임</span>
            <span className="mypage-info-value">{userData.nickname}</span>
          </div>

          <div className="mypage-info-item">
            <span className="mypage-info-label">이름</span>
            <span className="mypage-info-value">{userData.name}</span>
          </div>
        </div>
        <div onClick={handleLogout} className="logout-link">
          로그아웃
        </div>
      </div>
      <ETNav />
    </div>
  );
}

export default MyPage;
