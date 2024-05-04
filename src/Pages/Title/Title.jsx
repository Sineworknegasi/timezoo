import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    
        <div className='Title_bg d-flex justify-content-center align-items-center display-1 fw-bold'>
            <p>{props.title}</p>
        </div>
  )
}

export default Title