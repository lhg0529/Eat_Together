import React, { useEffect, useState } from 'react';
import '../styles/RVInfoItem.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function RVInfoItem({ id, roomname, maxpeople, placeid, date }) {
  const [joinUserId, setJoinUserId] = useState([]);
  const [joinUser, setJoinUser] = useState([]);
  const [place, setPlace] = useState({});

  async function fetchJoinUser(userid) {
    await axios.get(JSON_SERVER + `/users?id=${userid}`).then((response) => {
      const userData = response.data[0];
      console.log(userData);
      setJoinUser((prevJoinUser) => [...prevJoinUser, userData.nickname]);
    });
  }
  async function fetchPlaceData() {
    axios
      .get(JSON_SERVER + `/place?id=${placeid}`)
      .then(function (e) {
        setPlace(e.data[0]);
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

  async function fetchJoinerData(f) {
    const data = await axios.get(JSON_SERVER + `/joiner?roomid=${id}`);
    const joinerData = data.data;
    setJoinUserId(joinerData);
    console.log(joinerData);
    if (f && typeof f === 'function') {
      if (joinerData.length > 0) {
        const userIds = joinerData.map((joiner) => joiner.userid);
        userIds.forEach((userId) => {
          fetchJoinUser(userId);
        });
      }
    }
  }

  useEffect(() => {
    fetchPlaceData();
    fetchJoinerData(fetchJoinUser);
  }, []);
  return (
    <div className="room-container">
      <div className="room-header">
        <div>{roomname}</div>
        <div>
          {joinUserId.length} / {maxpeople}
        </div>
      </div>
      <div className="room-address">
        <div>{place.Placename}주소</div>
        <div>{place.Address}주소</div>
      </div>
      <div className="room-info">
        <div className="room-joiner">
          <div className="room-joiner-info">참여자</div>
          {joinUser.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
          {/* <div>User1</div> */}
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
