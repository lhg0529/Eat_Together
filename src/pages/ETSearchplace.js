import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import Kakaomap from '../components/Kakaomap';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

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
    const foundPlace = place.find((p) => p.UID === parseInt(placeID));

    if (foundPlace) {
      console.log('찾은 요소:', foundPlace);
      setThisPlace(foundPlace);
      console.log(thisPlace);
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
        y={thisPlace.GridY}
        X={thisPlace.GridX}
      ></Kakaomap>
      <ETNav></ETNav>
    </div>
  );
}

export default ETSearchplace;
