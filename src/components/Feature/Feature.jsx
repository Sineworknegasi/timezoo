import React from 'react'
import './Feature.css'
import { FaBoxOpen } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";

const Feature = () => {
  return (
    <div className='feature_section container'>
        <div className='row px-5 py-4 d-flex justify-content-center align-items-center'>
        <div className='col-sm-6 col-md-4 d-flex flex-column'>
            <FaBoxOpen className='feature_icon'/>
            <h1 className='feature_title fs-3 fw-bold mt-4'>Free Shipping Method</h1>
            <p className='feature_text fs-5'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className='col-sm-6 col-md-4 d-flex flex-column'>
            <IoMdUnlock className='feature_icon'/>
            <h1 className='feature_title fs-3 fw-bold mt-4'>Secure Payment System</h1>
            <p className='feature_text fs-5'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className='col-sm-6 col-md-4 d-flex flex-column'>
            <LuRefreshCcw className='feature_icon'/>
            <h1 className='feature_title fs-3 fw-bold mt-4'>Free Returns</h1>
            <p className='feature_text fs-5'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        </div>
    </div>
  )
}

export default Feature
