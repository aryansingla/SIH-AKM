import React, { Component } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <div className="list" id="title">
            College Community
          </div>
          <div className="items">
            <div className="list mx-2" id="item1">
              Home
            </div>
            <div className="list mx-2" id="item2">
              About
            </div>
            <div className="list mx-2" id="item3">
              Policy
            </div>
          </div>
        </div>
        <div className="logo">
          <FaFacebook id="facebook" />
          <FaInstagram id="Insta" />
          <FaTwitter id="Twitter" />
          <FaLinkedin id="Linkedin" />
        </div>
        <hr id="line" />

        <p id="copyright">&copy; 2021 Company, Inc. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
