import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import Kakaomap from '../components/Kakaomap';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';
import '../styles/ETSearchplace.css';

function ETSearchplace() {
  const placeID = useParams().key1;
  const [place, setPlace] = useState([]);
  const [thisPlace, setThisPlace] = useState({});

  async function fetchData() {
    const place = (await axios.get(JSON_SERVER + '/place').then()).data;
    setPlace(place);
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    findAddr();
  }, [place]);

  function findAddr() {
    const foundPlace = place.find((p) => p.id === parseInt(placeID));

    if (foundPlace) {
      console.log('찾은 요소:', foundPlace);
      setThisPlace(foundPlace);
      console.log(thisPlace);
      console.log(thisPlace.GridX);
      console.log(thisPlace.GridY);
      console.log(typeof 3.141592);
    } else {
      console.log('해당 UID를 가진 요소를 찾을 수 없습니다.');
    }
  }

  return (
    <div>
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

      <ETNav></ETNav>
    </div>
  );
}

export default ETSearchplace;
