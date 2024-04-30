import React from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Video = () => {
  return (
    <section className='video_section vh-100 my-5'>
        <div className='Video_Icon '>
            <FaPlay className='play_icon fs-2'/>
        </div>
        <div className='video_buttons'>
            <p className='m-0 fs-5'>NEXT VIDEO</p>
            <FaArrowRightLong className='arrow_icon fs-2'/>
        </div>
    </section>
  )
}

export default Video