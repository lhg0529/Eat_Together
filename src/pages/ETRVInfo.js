import React, { useEffect, useState } from 'react';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import '../styles/ETRVInfo.css';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import RVInfoItem from '../components/RVInfoItem';

function ETRVInfo() {
  const [rooms, setRooms] = useState([]);

  async function fetchRoomData() {
    axios
      .get(JSON_SERVER + '/room')
      .then(function (e) {
        setRooms(e.data);
        console.log(e.data);
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
    fetchRoomData();
  }, []);
  return (
    <div>
      <ETHeader />
      <h1 className="rvinfo-header">현재 예약 리스트</h1>
      {rooms.map((e, i) => {
        return (
          <RVInfoItem
            key={i}
            id={e.id}
            roomname={e.roomname}
            maxpeople={e.maxpeople}
            placeid={e.placeid}
            date={e.date}
          />
        );
      })}
      <hr />
      <ETNav />
    </div>
  );
}

export default ETRVInfo;
