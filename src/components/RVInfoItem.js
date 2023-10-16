import React, { useEffect, useState } from 'react';
import '../styles/RVInfoItem.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function RVInfoItem({ id, roomname, maxpeople, placeid, date, deleteMyRoom }) {
  const [joinUserId, setJoinUserId] = useState([]);
  const [joinUser, setJoinUser] = useState([]);
  const [place, setPlace] = useState({});
  const localUser = JSON.parse(localStorage.getItem('user'));

  async function fetchPlaceData() {
    const data = await axios.get(JSON_SERVER + `/place?id=${placeid}`);
    setPlace(data.data[0]);
  }

  async function fetchJoinerData() {
    const data = await axios.get(JSON_SERVER + `/joiner?roomid=${id}`);
    setJoinUserId(data.data);
  }
  async function fetchJoinerNickname() {
    let str = '';
    joinUserId.forEach((e) => {
      str += `id=${e.userid}&`;
    });
    const data = await axios.get(JSON_SERVER + `/users?${str}`);
    setJoinUser(data.data);
  }
  async function deleteJoinerData(roomId) {
    console.log(roomId + '이랑 ' + localUser.id);
    try {
      const joinerData = await axios.get(
        JSON_SERVER + `/joiner?roomid=${roomId}&userid=${localUser.id}`
      );
      if (joinerData.data.length === 0) {
        console.log('데이터를 찾을 수 없습니다.');
        return;
      }
      const joinerIdToDelete = joinerData.data[0].id;

      await axios.delete(JSON_SERVER + `/joiner/${joinerIdToDelete}`);
      console.log('데이터가 성공적으로 삭제되었습니다.');
    } catch (error) {
      console.error('데이터 삭제 중 오류가 발생했습니다.', error);
    }
  }
  function deleteRoom() {
    axios.delete(JSON_SERVER + `/room/${id}`);
  }
  useEffect(() => {
    fetchJoinerNickname();
  }, [joinUserId]);
  useEffect(() => {
    fetchPlaceData();
    fetchJoinerData();
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
            return <div key={i}>{e.nickname}</div>;
          })}
        </div>
        <div className="room-time">
          <div className="room-time-info">시간</div>
          <div>{date}</div>
        </div>
      </div>
      <button
        className="room-exit-btn"
        onClick={() => {
          deleteJoinerData(id);
          deleteMyRoom(id);
          if (joinUserId.length === 1) {
            deleteRoom();
          }
        }}
      >
        방 나가기
      </button>
    </div>
  );
}

export default RVInfoItem;
