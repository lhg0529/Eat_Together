import React, { useEffect, useState } from 'react';
import '../styles/Room.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function Room({ id, roomname, placeid, date, maxpeople }) {
  const [place, setPlace] = useState([]);
  const [joiner, setJoiner] = useState([]);
  const [joinCompleted, setJoinCompleted] = useState(false);
  const localUser = JSON.parse(localStorage.getItem('user'));

  //방 지역 데이터
  async function fetchPlaceData() {
    const array = await axios.get(JSON_SERVER + `/place?id=${placeid}`);
    // array.data
    setPlace(array.data);
    fetchJoinerData();
  }

  //방에 참여한 인원 데이터
  async function fetchJoinerData() {
    const fetchData = await axios.get(JSON_SERVER + `/joiner?roomid=${id}`);
    setJoiner(fetchData.data);
    // console.log(joiner);
  }
  function postJoinRoom() {
    const postData = {
      userid: localUser.id,
      roomid: id,
    };
    axios.post(JSON_SERVER + `/joiner`, postData);
  }

  //joiner에 본인이 포함되어 있는지
  function searchJoinerInMyId() {
    setJoinCompleted(
      !(joiner.find((e) => e.userid === localUser.id) === undefined)
    );
  }

  useEffect(() => {
    searchJoinerInMyId();
  }, [joiner]);

  function findAddress() {
    if (place.length > 0) {
      return place[0].Address;
    } else {
      return '';
    }
  }
  function joinRoom() {
    const a = localStorage.getItem('user');
    if (a) {
      postJoinRoom();
    } else {
      console.log('로그인으로');
    }
  }
  useEffect(() => {
    fetchPlaceData();
  }, []);
  return (
    <div className="room-item-container">
      <div className="room-info-container">
        <div className="room-name">{roomname}</div>
        <div className="place-id">{findAddress()}</div>
        <div className="room-date">{date}</div>
      </div>
      <div className="join-btn-container">
        <div className="square-button-container">
          <div className="max-people">
            {joiner.length} / {maxpeople}
          </div>
        </div>
        <button
          className={`square-button ${joinCompleted ? 'active' : ''}`}
          onClick={joinRoom}
          disabled={joinCompleted}
        >
          {joinCompleted ? '참여 완료' : '같이 먹기'}
        </button>
      </div>
    </div>
  );
}

export default Room;
