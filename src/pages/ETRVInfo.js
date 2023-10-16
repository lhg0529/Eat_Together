import React, { useEffect, useState } from 'react';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import '../styles/ETRVInfo.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import RVInfoItem from '../components/RVInfoItem';

function ETRVInfo() {
  const [myRooms, setMyRooms] = useState([]);
  const [joinerData, setJoinerData] = useState([]);
  const localUser = JSON.parse(localStorage.getItem('user'));

  async function fetchJoinerData() {
    const joinerData = await axios.get(
      JSON_SERVER + `/joiner?userid=${localUser.id}`
    );
    setJoinerData(joinerData.data);
  }
  async function fetchMyRoom() {
    let tempRoomData = ''; // 변경: 빈 문자열로 초기화
    let first = true; // 변경: first 변수 초기화

    joinerData.map((e) => {
      if (first) {
        tempRoomData += `id=${e.roomid}`;
        first = false; // 변경: first 값을 false로 설정
      } else {
        tempRoomData += `&id=${e.roomid}`;
      }
    });
    const roomData = await axios.get(JSON_SERVER + `/room?${tempRoomData}`);
    console.log(roomData.data);
    setMyRooms(roomData.data);
  }
  useEffect(() => {
    console.log('myrooms');
    console.log(myRooms);
  }, [myRooms]);
  useEffect(() => {
    fetchMyRoom();
  }, [joinerData]);

  useEffect(() => {
    fetchJoinerData();
  }, []);
  return (
    <div>
      <ETHeader name="내 예약 리스트" />
      <h1 className="rvinfo-header">현재 예약 리스트</h1>
      {myRooms.map((e, i) => {
        return (
          <RVInfoItem
            key={i}
            id={e.id}
            roomname={e.roomname}
            maxpeople={e.maxpeople}
            placeid={e.placeid}
            date={e.date}
          />
        );
      })}
      <hr />
      <ETNav />
    </div>
  );
}

export default ETRVInfo;
