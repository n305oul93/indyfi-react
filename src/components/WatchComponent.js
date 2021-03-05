import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import { SLIDERIMAGES } from '../shared/sliderImages'
// import { WATCHIMAGES } from '../shared/watchImages';
import '../css/Watch.css'
import FetchMovies from './FetchComponent'
import { baseUrl } from '../shared/baseUrl'
import request from '../shared/request'

const sliderImages = SLIDERIMAGES
// Used if not using api call to fill in movies
// const watchImages = WATCHIMAGES;

function Watch() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? sliderImages.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

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
    )
  })

  return (
    <>
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
      {/* <div className='row'>
        <h2>Title</h2>
        <div className='row__posters'>
          {watchImages.map(watchImage => (
            <img className='row__poster' src={watchImage} alt='' />
          ))}
        </div>
      </div> */}

      <FetchMovies
        title='Top SciFi'
        fetchUrl={baseUrl + request.fetchTopScienceFiction}
      />
      <FetchMovies
        title='Action SciFi'
        fetchUrl={baseUrl + request.fetchActionScienceFiction}
      />
      <FetchMovies
        title='Animation SciFi'
        fetchUrl={baseUrl + request.fetchAnimationScienceFiction}
      />
      <FetchMovies
        title='Fantasy SciFi'
        fetchUrl={baseUrl + request.fetchFantasy}
      />
    </>
  )
}

export default Watch
