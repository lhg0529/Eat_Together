import React, { useState, useEffect } from 'react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 이미지 캐로셀을 자동으로 넘기기 위한 코드
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // 5초(5000 밀리초) 간격으로 넘어가도록 설정

    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 타이머 정리
    return () => clearInterval(interval);
  }, [currentIndex]);

  // 이미지 컨테이너의 transform 스타일을 조정
  const containerStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="simple-image-carousel">
      <button className="btn-left" onClick={goToPreviousSlide}>
        &#9665;
      </button>
      <div className="image-container" style={containerStyle}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="btn-right" onClick={goToNextSlide}>
        &#9655;
      </button>
    </div>
  );
};

export default ImageCarousel;
