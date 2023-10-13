import React, { useEffect, useState } from 'react';
import '../styles/Room.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function Room({ id, roomname, placeid, date, maxpeople }) {
  const [place, setPlace] = useState([]);
  const [joiner, setJoiner] = useState([]);

  async function fetchPlaceData() {
    const array = await axios.get(JSON_SERVER + `/place?id=${placeid}`).then();
    console.log('룸컴포넌트 place');
    console.log(array);
    setPlace(array.data);
  }
  async function fetchJoinerData() {
    axios
      .get(JSON_SERVER + `/joiner?roomid=${id}`)
      .then(function (e) {
        setJoiner(e.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
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
      console.log('조인하기');
    } else {
      console.log('로그인으로');
    }
  }
  useEffect(() => {
    fetchPlaceData();
    fetchJoinerData();
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
        <button className="square-button" onClick={joinRoom}>
          같이 먹기
        </button>
      </div>
    </div>
  );
}

export default Room;
