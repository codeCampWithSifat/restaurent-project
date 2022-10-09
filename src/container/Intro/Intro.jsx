import React, { useRef, useState } from 'react'
import { meal } from '../../constants'
import { BiPause, BiRightArrow } from "react-icons/bi";
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((previousVideo) => !previousVideo)
    if(playVideo) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

    return (
    <div className="app__video">
      <video
       src={meal}
        type="video/mp4" 
        ref={videoRef}
        loop 
        controls={false} muted 
        />
        <div className='app__video-overlay flex__center'>
            <div className='app__overlay_circle flex__center' onClick={handleVideo}>
              {
                playVideo ? <BiPause/> : <BiRightArrow/>
              }
            </div>
        </div>
    </div>
  )
}

export default Intro
