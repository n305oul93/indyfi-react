import React from 'react';
import promoVideo from '../assets/videos/Promo Vid.mp4';
import '../css/Home.css';

function Home() {
  return (
    <div className='home-page'>
      <video className='w-100' loop muted autoPlay>
        <source src={promoVideo} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
