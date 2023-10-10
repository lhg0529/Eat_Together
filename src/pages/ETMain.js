import React from 'react';
import '../styles/ETMain.css';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';

function ETMain() {
  return (
    <div className="ETMain">
      <ETHeader />
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
      <ETNav />
    </div>
  );
}

export default ETMain;
