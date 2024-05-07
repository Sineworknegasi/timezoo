import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 z-3">
      <div class="container-fluid py-3 px-2 px-md-5 ">
        <Link class="navbar-brand fw-bold fs-2" to="/">
          Time<span className="colorone">Zoo</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <ul
          class="navbar-nav mb-2 gap-3 gap-md-5 mb-lg-0 text-center gap-2 justify-content-center collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <li class="nav-item ">
            <Link class="navlinks" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="navlinks" aria-current="page" to="/shop">
              Shop
            </Link>
          </li>
          <li class="nav-item">
            <Link class="navlinks" aria-current="page" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item dropdown position-relative">
            <a class="navlinks dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
              Latest
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Product List 
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Product Details
                </a>
              </li>
            </ul>
            <span className="red-text position-absolute">HOT</span>
          </li>
          <li class="nav-item dropdown">
            <a class="navlinks dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
              Blog
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Blog List 
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item menu">
            <a class="navlinks dropdown-toggle"  href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
              Pages
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#/">
                  Login
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Cart
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Element
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Conformation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Conformation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Product Checkout 
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="navlinks" aria-current="page" to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <div className="cart_icon fs-4 d-flex justify-content-center w-md-100 gap-4 align-items-center">
          <CiSearch className="Icons" />
          <CiUser className="Icons" />
          <CiShoppingCart className="Icons" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
