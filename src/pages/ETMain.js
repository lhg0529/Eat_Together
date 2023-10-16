import React from 'react';
import '../styles/ETMain.css';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import ImageCarousel from '../components/ImageCarousel';

// 이미지 임포트
import cat from '../img/cat.jpg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpg';
import RoomList from '../components/RoomList';

function ETMain() {
  // 프롭으로 넘겨주기 위한 배열
  const images = [cat, cat2, cat3];

  // 더미데이터

  return (
    <div className="ETMain">
      <ETHeader />
      <hr />
      <ImageCarousel images={images}></ImageCarousel>
      <hr />
      <div className="now-room">
        <h3 className="room-list jejugothic">현재 방 목록</h3>
        <RoomList />
      </div>
      <ETNav />
    </div>
  );
}

export default ETMain;
