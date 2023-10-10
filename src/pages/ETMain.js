import React from 'react';
import '../styles/ETMain.css';

function ETMain() {
  return (
    <div className="ETMain">
      <header>
        로고
        <div className="input-area">
          <input type="text"></input>
        </div>
      </header>
      <hr />
      <div className="crs">
        <div>이미지1</div>
        <div>이미지2</div>
        <div>이미지3</div>
      </div>
      <hr />
      <div className="now-room">
        현재 방 목록
        <div>room1</div>
        <div>room2</div>
      </div>
      <div className="nav">
        <span class="material-symbols-outlined">format_list_bulleted</span>
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">event_note</span>
        <span class="material-symbols-outlined">person</span>
      </div>
    </div>
  );
}

export default ETMain;
