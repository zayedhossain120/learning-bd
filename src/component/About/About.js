import React from "react";
import "./About.css";
import code from "../../images/banner/banner3.jpg";

const About = () => {
  return (
    <div className="p-10 mx-auto container">
      <h1 className="text-5xl p-10 ">About Us</h1>
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/2">
          <h3 className="text-3xl p-5 textCustom">Expert Squad</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            tenetur adipisci excepturi vero labore cum itaque corporis
            voluptatum vel, atque sed necessitatibus iste mollitia voluptas,
            fuga incidunt. Totam, tempore provident.
          </p>
        </div>
        <div className="">
          <img className=" img-animate" src={code} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
