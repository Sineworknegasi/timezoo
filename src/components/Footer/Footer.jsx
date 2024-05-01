import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <section className="Footer_section pt-5 pb-2 container ">
      <div className="row">
        <div className="col-md-3">
          <a class="navbar-brand fw-bold fs-2" href="#">
            Time<span className="colorone pb-5">Zoo</span>
          </a>
          <p className=" text-secondary fontstyle2">
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>
        <div className="col-md-3">
          <h3 className="pb-4 fontstyle2">Quick Links</h3>
          <p>About</p>
          <p>Offers & Discounts</p>
          <p>Get Coupon</p>
          <p>Contact Us</p>
        </div>
        <div className="col-md-3">
          <h3 className="pb-4 fontstyle2">New Products</h3>
          <p>Woman Cloth</p>
          <p>Fashion Accessories</p>
          <p>Man Accessories</p>
          <p>Rubber made Toys</p>
        </div>
        <div className="col-md-3">
        <h3 className="pb-4 fontstyle2">Support</h3>
          <p>Frequently Asked Questions</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Report a Payment Issue</p>
        </div>
      </div>
    </section>
    <div className="pt-3 bg-dark">
        <h4 className="text-center fontstyle2 text-white fs-6 py-3 m-0">
        Copyright ©{new Date().getFullYear()} All rights reserved Developed by Sinework
        </h4>
      </div>
    </>
  );
};

export default Footer;
