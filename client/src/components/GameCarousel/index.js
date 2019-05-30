import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'
import { Container, Row, Col } from "../Grid";
import "./style.css";



class GameCarousel extends React.Component {
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      loop: true, 
  }

    return(
      <div className="bg-color">
        <div className="container">
            <Swiper {...params}>
                <div className="swiper-slide" id="addition-game"></div>
                <div className="swiper-slide" id="minesweeper-game"></div>
                <div className="swiper-slide" id="trivia-game"></div>
                <div className="swiper-slide" id="memory-game"></div>
            </Swiper>
          </div>
      </div>
    )
  }
  
}

export default GameCarousel