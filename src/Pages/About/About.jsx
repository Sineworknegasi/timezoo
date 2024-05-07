import React from 'react'
import Title from '../Title/Title'
import './About.css'

const About = () => {
  return (
    <section className='about_pages'>
        <Title title="About Us"/>
        <div className='container my-5'>
            <div className="row py-5">
                <div className="offset-xl-1 col-lg-8">
                    <h2 className='red_title'>Our Missions</h2>
                    <p className=' fs-6 abel-regular'>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                    <p className=' fw-light fs-6 abel-regular'>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                </div>
                <div className="offset-xl-1 col-lg-8">
                <h2 className='red_title'>Our Vision</h2>
                    <p className='fs-6 abel-regular'>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                    <p className=' fw-light fs-6 abel-regular'>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
