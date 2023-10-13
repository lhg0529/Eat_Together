import React, { useEffect, useState } from 'react';
import '../styles/ETMain.css';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import ImageCarousel from '../components/ImageCarousel';

// 이미지 임포트
import cat from '../img/cat.jpg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpg';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import Room from '../components/Room';

function ETMain() {
  // 프롭으로 넘겨주기 위한 배열
  const images = [cat, cat2, cat3];
  const [rooms, setRooms] = useState([]);
  async function fetchData() {
    const array = await axios.get(JSON_SERVER + '/room').then();
    setRooms(array.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  // 더미데이터

  return (
    <div className="ETMain">
      <ETHeader />
      <hr />
      <ImageCarousel images={images}></ImageCarousel>
      <hr />
      <div className="now-room">
        <h3 className="room-list jejugothic">현재 방 목록</h3>
        {rooms.map((e, i) => {
          return (
            <Room
              key={i}
              id={e.id}
              roomname={e.roomname}
              placeid={e.placeid}
              date={e.date}
              maxpeople={e.maxpeople}
            ></Room>
          );
        })}
      </div>
      <ETNav />
    </div>
  );
}

export default ETMain;
