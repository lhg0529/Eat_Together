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
    const list = [];
    await axios
      .get(JSON_SERVER + '/place')
      .then(function (e) {
        setPlace(e.data);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
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
          <Link key={i} to={`./${e.UID}`}>
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
