import React, { useRef } from 'react';

import './Gallery.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Gallery = () => {
  const scrollRef = useRef(null)
  return(
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <SubHeading title="instagram"/>
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{color: "#AAA", marginTop: '2rem'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            <button type='button' className='custom__button'>View More</button>
        </div>

        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>

          </div>
          <div className='app__gallery-images_arrow'></div>
        </div>
    </div>
  )
}

export default Gallery;
