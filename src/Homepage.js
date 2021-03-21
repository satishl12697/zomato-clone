import React from "react";
import "./Homepage.css";
import Form from './Form'

function Homepage() {
  return (
    <div>
      <div className="Homepage">
        <img
          className="Homepage__image "
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt="Homepage Image"
        />

        <img
          className="Homepage__logo "
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="Homepage Image"
        />

        <h4 className="Homepage__text "> Discover the best food & drinks in Bengaluru </h4>

        {/* <img
          className="Homepage__image "
          src=""
          alt=""
        /> */}

    <Form />





      </div>
    </div>
  );
}

export default Homepage;
