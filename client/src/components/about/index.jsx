import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <div className="col-8">
            <img
              src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <div className="about_info">
              <h4>MERCHANT COMPANY</h4>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur
                eum inventore, rem maxime, nisi excepturi ipsam libero ratione
                adipisci alias eius vero vel!
              </p>
              <button>LEARN MORE </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
