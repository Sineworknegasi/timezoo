import React from 'react'
import './Contact.css'
import Title from '../Title/Title'
import { IoHomeOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='contact_section'>
        <Title title="Contact Us"/>
        <div className='container my-5 py-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124147.9277135188!2d39.41211800946505!3d13.497328832104992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd46467c7649%3A0xe61495b1f6a300cc!2sMekele!5e0!3m2!1sen!2set!4v1715065348332!5m2!1sen!2set" width="100%" height="500" style={{}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        <div className='contact_form'>
            <h2>Get in Touch</h2>
            <div className="row d-flex align-items-center">
                <div className="col-md-8 d-flex flex-column gap-3 ">
                    <textarea name="" className='w-100 h-100 p-3' id="" placeholder='Enter Messaage'></textarea>
                    <div className="row">
                        <div className="col-md-6">
                            <input className='w-100 px-3 py-3' type="text" placeholder='Enter Name'/>
                        </div>
                        <div className="col-md-6">
                            <input className='w-100 p-3' type="Email" placeholder='Enter Email'/>
                        </div>
                    </div>
                    <input type="text" className='w-100 py-3' placeholder='Enter Subject' />
                    <button className='btn btn-danger w-25 p-3'>
                        Send
                    </button>
                </div>
                <div className="col-md-4">
                    <div className='contact_info fs-5'>
                        <p><IoHomeOutline/> Mekele, Ethiopia</p>
                        <p><CiMobile2/> +251 911 111 111</p>
                        <p><FaRegEnvelope/> <a href="mailto:sineworknegasi38@gmail.com">Sineworknegasi38@gmail.com</a> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact