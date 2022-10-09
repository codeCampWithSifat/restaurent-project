import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css'

const Header = () => {
  return (
    <div  className="app__header app__wrapper section-padding" id="home">
      <div style={{marginLeft : "20px"}} className="app__wrapper_info">
        <SubHeading title="Chase The New Falvour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header
