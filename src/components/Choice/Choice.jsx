import React from 'react'
import './Choice.css'

const Choice = () => {
  return (
    <section className='Choice_section container py-5 vh-100'>
        <div className='row'>
        <div className=' col-sm-6 d-flex flex-column justify-content-center px-4'>
            <p className=' display-4 fw-bold '>Watch of Choice</p>
            <p className='fs-4 text-secondary fw-light '>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className='Shop_btn'>Show Watch</button>
        </div>
        <div className='Watch_side col-sm-6'>
            <img className=' img-fluid' src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp" alt="Watch" />
        </div>
        </div>
    </section>
  )
}

export default Choice
