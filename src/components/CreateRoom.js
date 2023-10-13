import React, { useState } from 'react';
import '../styles/CreateRoom.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function CreateRoom({ placeid, setIsCreateRoom }) {
  const [roomName, setRoomName] = useState('');
  const [maxPeople, setMaxPeople] = useState(0);
  const [RVDate, setRVDate] = useState('0000. 00. 00. 오전 0:00:00');
  function postCreateRoom() {
    axios.post(JSON_SERVER + `/room`, {
      placeid: placeid,
      hostid: localStorage.getItem('user').id,
      roomname: roomName,
      maxpeople: maxPeople,
      date: RVDate,
    });
  }
  console.log();
  return (
    <div className="modal-background">
      <div className="modal-input-container">
        <div className="modal-header">
          <div>방 만들기</div>
          <div
            onClick={() => {
              setIsCreateRoom(false);
            }}
          >
            X
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body-input-name">방 이름</div>
          <input
            type="text"
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          ></input>
          <div className="modal-body-input-name">인원 수</div>
          <input
            type="number"
            onChange={(e) => {
              setMaxPeople(e.target.value);
            }}
          ></input>
          <div className="modal-body-input-name">시간</div>
          <input
            type="datetime-local"
            onChange={(e) => {
              setRVDate(e.target.value);
            }}
          ></input>
        </div>
        <div
          className="modal-create-room-btn"
          onClick={() => {
            postCreateRoom();
            setIsCreateRoom(false);
          }}
        >
          <div>방 만들기</div>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
