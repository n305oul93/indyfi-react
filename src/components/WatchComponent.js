import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { SLIDERIMAGES } from '../shared/sliderImages';
import '../css/Watch.css';

const sliderImages = SLIDERIMAGES;

function Watch() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? sliderImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliderImages.map(sliderImage => {
    return (
      <CarouselItem
        className='watch-carousel'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={sliderImage.id}
      >
        <img src={sliderImage.image} alt={sliderImage.altText} />
        <CarouselCaption
          captionText={sliderImage.captionText}
          captionHeader={sliderImage.captionHeader}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={sliderImages}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Watch;
