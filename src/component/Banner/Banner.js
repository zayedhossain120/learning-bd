import React from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";

const Banner = () => {
  const iframeUrl =
    "https://www.facebook.com/photo.php?fbid=1533447187049955&set=pb.100011540652243.-2207520000.&type=3";
  return (
    <div className="relative">
      <div className=" carousel w-full h-96 ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            alt="Banner1"
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-16 left-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent  whitespace-nowrap animate-typing">
          Get mastery on your target
        </h2>
        <div className="p-10">
          <button
            className="btn btn-secondary
          "
          >
            Learn More
          </button>
          <button className="btn ml-2 btn-accent">Get Access Now</button>
        </div>
      </div>
      <div className="absolute top-20 right-36">
        <iframe
          width="360"
          height="200"
          src="https://www.youtube.com/embed/aDTaiU0aoiQ?controls=0"
          title="My Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Banner;
