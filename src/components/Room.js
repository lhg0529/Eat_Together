import React, { useEffect, useState } from 'react';
import '../styles/Room.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function Room({ roomname, placeid, date, maxpeople }) {
  const [place, setPlace] = useState([]);

  async function fetchPlaceData() {
    const array = await axios.get(JSON_SERVER + `/place?id=${placeid}`).then();
    console.log(array.data);
    setPlace(array.data);
  }
  function joinRoom() {
    const a = localStorage.getItem('user');
    if (a) {
      console.log('조인하기');
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
        <div className="place-id">{place[0].Address}</div>
        <div className="room-date">{date}</div>
      </div>
      <div className="join-btn-container">
        <div className="square-button-container">
          <div className="max-people">0 / {maxpeople}</div>
        </div>
        <button className="square-button" onClick={joinRoom}>
          같이 먹기
        </button>
      </div>
    </div>
  );
}

export default Room;
