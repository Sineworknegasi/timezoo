import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='Hero_section'>
        <div className='container pt-5'>
        <div className="row d-flex align-items-center justify-content-center vh-100">
            <div className="col-md-8 d-flex flex-column gap-4">
                <p className='Title'>Select Your New <br/> Perfect Style </p>
                <p className='fs-6'>
                    Ut enim ad minim veniam, quis nostrud ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/>in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className='Shop_btn'>
                    SHOP NOW
                </button>
            </div>
            <div className="col-md-4 pt-5">
                <img className='w-100' src="https://pngimg.com/uploads/watches/watches_PNG101423.png" alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero