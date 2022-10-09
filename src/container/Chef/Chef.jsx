import React from 'react';

import './Chef.css';
import {images} from '../../constants'
import { SubHeading } from '../../components';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
       <img src={images.chef} alt="" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote image" />
          <p className='p__opensans'>There are many variations of passages  </p>
        </div>
        <p className='p__opensans'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="image sign" />
      </div>
    </div>
  </div>
);

export default Chef;
