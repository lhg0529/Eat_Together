import React from 'react';
import { useParams } from 'react-router';
import ETHeader from '../components/ETHeader';
import ETNav from '../components/ETNav';
import Kakaomap from '../components/Kakaomap';

function ETSearchplace() {
  const placeID = useParams();

  console.log(useParams());
  return (
    <div>
      <ETHeader name="음식점"></ETHeader>
      <Kakaomap></Kakaomap>
      <ETNav></ETNav>
    </div>
  );
}

export default ETSearchplace;
