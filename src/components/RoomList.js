import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { JSON_SERVER } from '../JsonConfig';
import Room from './Room';

function RoomList({ placeData }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array;
      if (placeData === undefined) {
        array = await axios.get(JSON_SERVER + '/room');
      } else {
        array = await axios.get(JSON_SERVER + `/room?placeid=${placeData}`);
      }
      setRooms(array.data);
    }

    fetchData();
  }, [placeData]);

  return (
    <>
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
    </>
  );
}

export default RoomList;
