import React from 'react';
import '../styles/Room.css';

function Room({ roomname, placeid, date, maxpeople }) {
  return (
    <div className="room-item-container">
      <div className="room-info-container">
        <div className="room-name">{roomname}</div>
        <div className="place-id">{placeid}번 지역</div>
        <div className="room-date">{date}</div>
      </div>
      <div className="join-btn-container">
        <div className="square-button-container">
          <div className="max-people">0 / {maxpeople}</div>
        </div>
        <button className="square-button">같이 먹기</button>
      </div>
    </div>
  );
}

export default Room;
