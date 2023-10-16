import React, { useEffect, useState } from 'react';
import '../styles/CreateRoom.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import { useNavigate } from 'react-router-dom';

function CreateRoom({ placeid, setIsCreateRoom, userid }) {
  const [roomName, setRoomName] = useState('test');
  const [maxPeople, setMaxPeople] = useState(3);
  const [RVDate, setRVDate] = useState('0000. 00. 00. 오전 0:00:00');
  const [resBody, setResBody] = useState({});
  const [isRoomCreated, setIsRoomCreated] = useState(false);
  const localUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  async function postCreateRoom() {
    const roomInfo = {
      placeid: parseInt(placeid),
      hostid: localUser.id,
      roomname: roomName,
      maxpeople: maxPeople,
      date: RVDate,
    };
    const res = await axios.post(JSON_SERVER + `/room`, roomInfo);
    setResBody(res.data);
    setIsRoomCreated(true);
  }
  function postJoinerInfo() {
    const tempUserId = localUser.id;
    const userInfo = {
      roomid: resBody.id,
      userid: tempUserId, // 변경된 부분: userids -> userid
    };
    if (isRoomCreated) {
      axios.post(JSON_SERVER + `/joiner`, userInfo);
      alert('방 생성이 완료되었습니다');
      navPage();
    }
  }
  function navPage() {
    navigate(`/Roominfomation/${resBody.id}`);
  }
  useEffect(() => {
    postJoinerInfo();
  }, [resBody]);
  return (
    <div className="modal-background">
      <div className="modal-input-container">
        <div className="modal-header">
          <div>방 만들기</div>
          <div>X</div>
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
          }}
        >
          <div>방 만들기</div>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
