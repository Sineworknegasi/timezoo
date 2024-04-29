import React from "react";
import "./Product.css";
import { CiHeart } from "react-icons/ci";

const Products = [
  {
    id: 1,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp",
  },
  {
    id: 2,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp",
  },
  {
    id: 3,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp",
  },
  {
    id: 4,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp",
  },
  {
    id: 5,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp",
  },
  {
    id: 6,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp",
  },
].map((items) => {
    return (
        <div className="col-sm-6 col-md-4 gy-5">
          <div className="Product_cards">
            <div className="cards">
            <div className="text-end p-3 love_icon">
              <CiHeart />
            </div>
              <img
                className="img-fluid w-100"
                src={items.image}
                alt=""
              />
              <button className="Add_btn w-100">Add to Cart</button>
            </div>
            <p className="fs-3 text-center py-3 fw-bold m-0 pb-0">
              {items.name}
            </p>
            <p className="text-center fs-5 ">${items.price}</p>
          </div>
        </div>
    )
})

const Product = () => {
  return (
    <section className="container">
      <h1 className="text-center h1">Popular Items</h1>
      <p className="text-center fontstyle2 text-secondary fs-6">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <div className="row">
        {Products}
      </div>
      <div className="row py-5">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center py-5">
          <button className="Shop_btn w-25 p-4 fontstyle2 fw-normal fs-5 ">VIEW MORE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
