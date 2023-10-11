import React from 'react';
import '../styles/ETMain.css';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import ImageCarousel from '../components/ImageCarousel';

// 이미지 임포트
import cat from '../img/cat.jpg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpg';

function ETMain() {
  // 프롭으로 넘겨주기 위한 배열
  const images = [cat, cat2, cat3];
  // 더미데이터
  const roomList = [
    {
      UID: 0,
      PlaceID: 0,
      HostID: 0,
      RoomName: '점심 먹으러 가실분',
      MaxPeople: 4,
      Day: new Date('2023-10-09 12:00:00'),
    },
    {
      UID: 1,
      PlaceID: 1,
      HostID: 1,
      RoomName: '우동 가실분',
      MaxPeople: 4,
      Day: new Date('2023-10-09 12:30:00'),
    },
  ];
  return (
    <div className="ETMain">
      <ETHeader />
      <hr />
      <ImageCarousel images={images}></ImageCarousel>
      <hr />
      <div className="now-room">
        <h3 className="room-list jejugothic">현재 방 목록</h3>
        {roomList.map((e, i) => {
          return (
            <div className="room-item-container">
              <div className="room-info-container">
                <div className="room-name">{e.RoomName}</div>
                <div className="place-id">{e.PlaceID}번 지역</div>
                <div className="room-date">{e.Day.toLocaleString()};</div>
              </div>
              <div className="join-btn-container">
                <div className="square-button-container">
                  <div className="max-people">0 / {e.MaxPeople}</div>
                </div>
                <button className="square-button">같이 먹기</button>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <hr />
      <hr />
      <ETNav />
    </div>
  );
}

export default ETMain;
