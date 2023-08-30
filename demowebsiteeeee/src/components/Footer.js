import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="headerfoo">
      <p className="headerfoo">
              <Link className="abt" to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link className="pry" to="/policy">Policy</Link>
      </p>
    </div>
  );
};

export default Footer;