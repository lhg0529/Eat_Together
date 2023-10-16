import React, { useEffect, useState } from 'react';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import '../styles/RoomInfo.css';
import { JSON_SERVER } from '../JsonConfig';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RoomInfo() {
  const roomID = useParams().key1;
  const [joinUserId, setJoinUserId] = useState([]);
  const [joinUser, setJoinUser] = useState([]);
  const [place, setPlace] = useState({});
  const [placeName, setPlaceName] = useState('');
  const [placeAddr, setPlaceAddr] = useState('');
  const [placeDate, setPlaceDate] = useState('');
  const [room, setRoom] = useState({});

  async function fetchRoomData() {
    try {
      const data = await axios.get(JSON_SERVER + `/room?id=${roomID}`);
      setRoom(data.data[0]);
      setPlaceDate(data.data[0].date);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchPlaceData() {
    try {
      const data = await axios.get(JSON_SERVER + `/place?id=${room.placeid}`);
      setPlace(data.data[0]);
      setPlaceName(data.data[0].Placename);
      setPlaceAddr(data.data[0].Address);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchJoinerData() {
    try {
      const data = await axios.get(JSON_SERVER + `/joiner?roomid=${room.id}`);
      setJoinUserId(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchJoinerNickname() {
    let str = '';
    joinUserId.forEach((e) => {
      str += `id=${e.userid}&`;
    });
    try {
      const data = await axios.get(JSON_SERVER + `/users?${str}`);
      setJoinUser(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchRoomData();
  }, []);
  useEffect(() => {
    fetchPlaceData();
  }, [room]);
  useEffect(() => {
    fetchJoinerData();
  }, [place]);
  useEffect(() => {
    fetchJoinerNickname();
  }, [joinUserId]);
  return (
    <div>
      <ETHeader name="상세정보" />
      <div className="info-container">
        <div className="info-room-name-container">방제목</div>
        <div className="info-room-name">{room.roomname}</div>
        <div className="info-place-name-container">음식점 이름</div>
        <div className="info-place-name">{placeName}</div>
        <div className="info-place-addr-container">음식점 주소</div>
        <div className="info-place-addr">{placeAddr}</div>
        <div className="info-place-date-container">일시</div>
        <div className="info-place-date">{placeDate}</div>
        <div className="info-place-joiner-container">참여자</div>
        {joinUser.map((e, i) => {
          return (
            <div className="info-place-joiner" key={i}>
              {e.nickname}
            </div>
          );
        })}
      </div>
      <ETNav />
    </div>
  );
}

export default RoomInfo;
