import React, { useState } from 'react';
import ETHeader from '../components/ETHeader';
import '../styles/ETSearch.css';
import cat from '../img/cat.jpg';
import ETPlaceItem from '../components/ETPlaceItem';
import ETNav from '../components/ETNav';
import { useParams } from 'react-router';

function ETSearch() {
  const categori = ['한식', '양식', '일식', '중식'];
  const place = [
    {
      UID: 0,
      Placename: '오리역 맥도날드',
      Address: '경기 성남시 분당구 성남대로 45',
      GridX: 0.0,
      GridY: 0.0,
    },
    {
      UID: 1,
      Placename: '오리역 역전우동',
      Address: '경기 성남시 분당구 성남대로 38 1층',
      GridX: 0.0,
      GridY: 0.0,
    },
  ];
  const [isShow, setIsShow] = useState(false);
  console.log(useParams());
  return (
    <div>
      <ETHeader />
      <section className="search-section">
        <div
          className="categori"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          카테고리 v
          <div className={`categori-acodian ${isShow ? '' : 'acodian-open'}`}>
            {categori.map((e, i) => {
              return (
                <div key={i} className="categori-item">
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="search-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input className="search-place-input" type="text"></input>
        </div>
      </section>
      <hr />
      {place.map((e, i) => {
        return (
          <ETPlaceItem
            key={i}
            image={cat}
            placename={e.Placename}
            address={e.Address}
          />
        );
      })}
      <ETNav />
    </div>
  );
}

export default ETSearch;
