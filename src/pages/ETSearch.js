import React, { useEffect, useState } from 'react';
import ETHeader from '../components/ETHeader';
import '../styles/ETSearch.css';
import cat from '../img/cat.jpg';
import ETPlaceItem from '../components/ETPlaceItem';
import ETNav from '../components/ETNav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { JSON_SERVER } from '../JsonConfig';

function ETSearch() {
  const categori = ['한식', '양식', '일식', '중식'];
  const [place, setPlace] = useState([]);

  async function fetchData() {
    await axios
      .get(JSON_SERVER + '/place')
      .then(function (e) {
        setPlace(e.data);
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
    // setPlace(place);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <ETHeader name="찾기" />
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
          <Link key={i} to={`./${e.id}`}>
            <ETPlaceItem
              key={i}
              image={cat}
              placename={e.Placename}
              address={e.Address}
            />
          </Link>
        );
      })}
      <ETNav />
    </div>
  );
}

export default ETSearch;
