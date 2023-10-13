import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import Kakaomap from '../components/Kakaomap';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import '../styles/ETSearchplace.css';
import Room from '../components/Room';
import CreateRoom from '../components/CreateRoom';

function ETSearchplace() {
  const placeID = useParams().key1;
  const [rooms, setRooms] = useState([]);
  const [thisPlace, setThisPlace] = useState({});
  const [isCreateRoom, setIsCreateRoom] = useState(true);

  async function fetchData(f) {
    const place = (await axios.get(JSON_SERVER + `/place?id=${placeID}`).then())
      .data;
    if (place.length > 0) {
      const placeData = place[0];
      console.log(placeData);
      setThisPlace(placeData);
      if (f && typeof f === 'function') {
        f(placeData); // Pass placeData to the callback
      }
    }
  }

  async function fetchRoomData(placeData) {
    const findRoom = await axios
      .get(JSON_SERVER + `/room?placeid=${placeData.id}`)
      .then();
    if (findRoom.data.length > 0) {
      setRooms(findRoom.data);
    }
  }

  useEffect(() => {
    fetchData(fetchRoomData);
  }, []);

  return (
    <div>
      {isCreateRoom ? (
        <CreateRoom placeid={placeID} setIsCreateRoom={setIsCreateRoom} />
      ) : (
        <></>
      )}
      <ETHeader name={thisPlace.Placename}></ETHeader>
      <Kakaomap
        address={thisPlace.Address}
        placeName={thisPlace.Placename}
        gridy={thisPlace.GridY}
        gridx={thisPlace.GridX}
      />
      <hr />
      <h1 className="place-placename">{thisPlace.Placename}</h1>
      <h3 className="place-address">{thisPlace.Address}</h3>
      <hr />
      <h1 className="place-room-list">현재 방 목록</h1>
      {rooms.map((e, i) => {
        return (
          <Room
            key={i}
            id={e.id}
            roomname={e.roomname}
            placeid={e.placeid}
            date={e.date}
            maxpeople={e.maxpeople}
          />
        );
      })}
      <div className="floating-btn">
        <div className="create-room">
          <div
            className="create-room-text"
            onClick={() => {
              setIsCreateRoom(true);
            }}
          >
            방 만들기
          </div>
        </div>
      </div>
      <ETNav></ETNav>
    </div>
  );
}

export default ETSearchplace;
