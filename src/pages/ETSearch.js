import React from 'react';
import ETHeader from '../components/ETHeader';
import '../styles/ETSearch.css';
import cat from '../img/cat.jpg';
import ETPlaceItem from '../components/ETPlaceItem';

function ETSearch() {
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
  return (
    <div>
      <ETHeader />
      <section className="search-section">
        <div className="categori">카테고리 v</div>
        <div className="search-container">
          <span class="material-symbols-outlined search-icon">search</span>
          <input className="search-place-input" type="text"></input>
        </div>
      </section>
      <hr />
      {place.map((e, i) => {
        return (
          <ETPlaceItem
            image={cat}
            placename={e.Placename}
            address={e.Address}
          />
        );
      })}
    </div>
  );
}

export default ETSearch;
