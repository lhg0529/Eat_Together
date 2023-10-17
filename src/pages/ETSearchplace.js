import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import Kakaomap from '../components/Kakaomap';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import '../styles/ETSearchplace.css';
import CreateRoom from '../components/CreateRoom';
import RoomList from '../components/RoomList';

function ETSearchplace() {
  const placeID = useParams().key1;
  const [thisPlace, setThisPlace] = useState({});
  const [isCreateRoom, setIsCreateRoom] = useState(false);
  // const roomListElement = useRef();

  async function fetchData() {
    const place = (await axios.get(JSON_SERVER + `/place?id=${placeID}`).then())
      .data;
    if (place.length > 0) {
      const placeData = place[0];
      // console.log(placeData);
      setThisPlace(placeData);
    }
  }

  // useEffect(() => {}, [thisPlace]);
  useEffect(() => {
    fetchData();
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
      <RoomList placeData={placeID} />
      <div className="floating-btn">
        <div className="create-room">
          <div
            className="create-room-text"
            onClick={() => {
              setIsCreateRoom(true);
              // roomListElement.current.fetchData();
            }}
          >
            방 만들기
          </div>
        </div>
      </div>
      <div className="dumy"></div>
      <ETNav></ETNav>
    </div>
  );
}

export default ETSearchplace;
