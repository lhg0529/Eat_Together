import React, { useEffect, useState } from 'react';

function Kakaomap(props) {
  useEffect(() => {
    // 프롭스가 존재하고 유효한 경우에만 초기화 작업 수행
    if (props.address && props.placeName && props.gridx && props.gridy) {
      // Kakao Map API 스크립트 비동기로 로드
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a9ac4451e48e7caff6cfba9ac132754f&libraries=services&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      // 스크립트 로드 완료 시 초기화 함수 호출
      script.onload = () => {
        initializeKakaoMap();
      };

      const initializeKakaoMap = async () => {
        const { gridx, gridy, address, placeName } = props;
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(gridx, gridy),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          const markerPosition = new window.kakao.maps.LatLng(gridx, gridy);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: map,
          });
        });
      };
    }
  }, [props]);

  return (
    <div id="map" style={{ width: '100%', height: '300px', zIndex: '0' }}></div>
  );
}

export default Kakaomap;
