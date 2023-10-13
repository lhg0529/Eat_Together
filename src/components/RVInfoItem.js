import React, { useEffect, useState } from 'react';
import '../styles/RVInfoItem.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function RVInfoItem({ id, roomname, maxpeople, placeid, date }) {
  const [joiner, setJoiner] = useState([]);
  const [place, setPlace] = useState({});
  async function fetchPlaceData() {
    axios
      .get(JSON_SERVER + `/place?id=${placeid}`)
      .then(function (e) {
        setPlace(e.data[0]);
        // console.log(e);
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

  useEffect(() => {
    fetchPlaceData();
    fetchJoinerData();
  }, []);
  return (
    <div className="room-container">
      <div className="room-header">
        <div>{roomname}</div>
        <div>
          {joiner.length} / {maxpeople}
        </div>
      </div>
      <div className="room-address">
        <div>{place.Placename}주소</div>
        <div>{place.Address}주소</div>
      </div>
      <div className="room-info">
        <div className="room-joiner">
          <div className="room-joiner-info">참여자</div>
          <div>User1</div>
        </div>
        <div className="room-time">
          <div className="room-time-info">시간</div>
          <div>{date}</div>
        </div>
      </div>
      <button className="room-exit-btn">방 나가기</button>
    </div>
  );
}

export default RVInfoItem;
