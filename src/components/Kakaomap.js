import React, { useEffect, useState } from 'react';

function Kakaomap(props) {
  useEffect(() => {
    // Kakao Map API 스크립트 비동기로 로드
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a9ac4451e48e7caff6cfba9ac132754f&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    // 스크립트 로드 완료 시 초기화 함수 호출
    script.onload = () => {
      initializeKakaoMap();
    };

    const initializeKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울의 좌표 예시
          // center: new window.kakao.maps.LatLng(props.x, props.y), // 서울의 좌표 예시
          level: 3,
        };

        // 여기에 추가적인 Kakao Map 기능을 구현할 수 있습니다.
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
    };
  }, [props]);

  return (
    <div id="map" style={{ width: '100%', height: '300px', zIndex: '0' }}></div>
  );
}

export default Kakaomap;
