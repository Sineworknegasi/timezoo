import React from "react";
import "./Watch.css";

const watches = [
  {
    images:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp",
  },
  {
    images:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp",
  },
  {
    images:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp",
  },
  {
    images:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp",
  },
];
const Watch = () => {
  return (
    <section className="watch vh-100 mt-5 py-5 my-5">
      <div className="row h-100 w-100 pt-5">
        <div className="col-sm-6 col-md-6 overflow-hidden ">
            <div className="bg-one h-100 w-100"></div>
        </div>
        <div className="col-sm-6 col-md-3">
            <div className="bg-two h-100 w-100"></div>
        </div>
        <div className="col-md-3 d-flex flex-sm-row flex-md-column gap-4">
          <div className=" bg-primary h-50 bg-three w-100 col-12"></div>
          <div className="bg-primary h-50 bg-four w-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Watch;
