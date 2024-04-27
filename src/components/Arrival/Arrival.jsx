import React from "react";
import "./Arrival.css";

const datas = [
  {
    id: 1,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp",
  },
  {
    id: 2,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp",
  },
  {
    id: 3,
    name: "Thermo Ball Etip Gloves",
    price: "45,743",
    image:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp",
  },
].map((data) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="card">
        <img src={data.image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fs-5 fw-bold">{data.name}</h5>
          <p className="card-text text-center fs-4">${data.price}</p>
        </div>
      </div>
    </div>
  );
});

const Arrival = () => {
  return (
    <section className="Arrival py-5">
      <div className="container pt-5">
        <h1 className="titles py-5">New Arrivals</h1>
        <div className="row px-5">{datas}</div>
      </div>
    </section>
  );
};

export default Arrival;
