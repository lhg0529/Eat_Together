import React, { useEffect, useState } from 'react';

function Kakaomap(props) {
  useEffect(() => {
    const loadKakaoMap = () => {
      // 이전에 생성한 kakaoMapScript 요소를 제거 (옵셔널)
      const existingKakaoMapScript = document.querySelector(
        'script[src^="//dapi.kakao.com"]'
      );
      if (existingKakaoMapScript) {
        existingKakaoMapScript.remove();
      }

      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = true;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a9ac4451e48e7caff6cfba9ac132754f&autoload=false&libraries=services`;
      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.addEventListener('load', () => {
        window.kakao.maps.load(() => {
          var container = document.getElementById('map');
          var options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

          var map = new window.kakao.maps.Map(container, options);
          var geocoder = new window.kakao.maps.services.Geocoder();
          if (props) {
            geocoder.addressSearch(props.address, function (result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                var coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                var marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                var infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.placeName}</div>`,
                });
                infowindow.open(map, marker);
                map.setCenter(coords);
              }
            });
          }
        });
      });
    };

    loadKakaoMap();
  }, [props]);

  return (
    <div id="map" style={{ width: '100%', height: '300px', zIndex: '0' }}></div>
  );
}

export default Kakaomap;
