import React from "react";
import Logo from "../img/badge.svg";
import { Link } from "react-router-dom";
import payment1 from "../img/BCA.svg";
import payment2 from "../img/BNI.svg";
import payment3 from "../img/BRI.svg";
import payment4 from "../img/Bank Syariah Indonesia.svg";
import payment5 from "../img/GOPAY.svg";
import payment6 from "../img/MANDIRI.svg";
import payment7 from "../img/MASTERCARD.svg";
import payment8 from "../img/MAYBANK.svg";
import payment9 from "../img/MEGA.svg";
import payment10 from "../img/SHOPEEPAY.svg";
import payment11 from "../img/VISA.svg";
import payment12 from "../img/DANA.svg";
import social1 from "../img/Group 15.svg";
import social2 from "../img/Capa 2.svg";
import social3 from "../img/Capa 2 (1).svg";
import social4 from "../img/Social Media.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Link to="./">
          <img className="footer-logo" src={Logo} alt="" />
        </Link>
        <div className="container-footer">
          <div className="container-link-footer row">
            <div className="block-link-footer col-md-3">
              <h4 className="main-footer-title-link">Eco Shop</h4>
              <div className="section-link-footer">
                <Link className="link-footer" to="./">
                  About Us
                </Link>
                <Link className="link-footer" to="./">
                  Contact Us
                </Link>
                <Link className="link-footer" to="./">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="block-link-footer col-md-3">
              <h4 className="main-footer-title-link">Product Categories</h4>
              <div className="section-link-footer">
                <Link className="link-footer" to="./">
                  New
                </Link>
                <Link className="link-footer" to="./">
                  Clothing
                </Link>
                <Link className="link-footer" to="./">
                  Bath & Bedding
                </Link>
                <Link className="link-footer" to="./">
                  Home Goods
                </Link>
                <Link className="link-footer" to="./">
                  Furniture
                </Link>
                <Link className="link-footer" to="./">
                  Accessories
                </Link>
                <Link className="link-footer" to="./">
                  Gift
                </Link>
              </div>
            </div>
            <div className="block-link-footer col-md-3">
              <h4 className="main-footer-title-link">Support</h4>
              <div className="section-link-footer">
                <Link className="link-footer" to="./">
                  Support
                </Link>
                <Link className="link-footer" to="./">
                  Shipping
                </Link>
                <Link className="link-footer" to="./">
                  Privacy Policy
                </Link>
                <Link className="link-footer" to="./">
                  Terms of Use
                </Link>
                <Link className="link-footer" to="./">
                  Affiliates
                </Link>
              </div>
            </div>
            <div className="block-link-footer col-md-3">
              <h4 className="main-footer-title-link">Payment</h4>
              <div className="section-link-footer">
                <div className="container-img-payment">
                  <img className="img-payment" src={payment1} alt="" />
                  <img className="img-payment" src={payment2} alt="" />
                  <img className="img-payment" src={payment3} alt="" />
                  <img className="img-payment" src={payment4} alt="" />
                  <img className="img-payment" src={payment5} alt="" />
                  <img className="img-payment" src={payment6} alt="" />
                  <img className="img-payment" src={payment7} alt="" />
                  <img className="img-payment" src={payment8} alt="" />
                  <img className="img-payment" src={payment9} alt="" />
                  <img className="img-payment" src={payment10} alt="" />
                  <img className="img-payment" src={payment11} alt="" />
                  <img className="img-payment" src={payment12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="block-footer-caption">
          <p>© 2023 Eco Shop Indonesia. All Rights Reserved.</p>
          <div className="icons-social">
            <img className="img-icon" src={social1} alt="" />
            <img className="img-icon" src={social2} alt="" />
            <img className="img-icon" src={social3} alt="" />
            <img className="img-icon" src={social4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
