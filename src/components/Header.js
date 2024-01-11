import React from "react";
import Logo from "../img/logo-shop.png";
import SearchIcon from "../img/search.svg";
import UserIcon from "../img/profile.svg";
import BagIcon from "../img/bag.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="block-title-announcement">
        <p className="title-announcement">
          Free Shipping with minimum purchase Rp250.000
        </p>
      </div>
      <div className="nav-bar">
        <div className="nav-container">
          <Link to="./">
            <img className="nav-logo" src={Logo} alt="logo" />
          </Link>
          <div className="search-nav-bar">
            <form className="form-search-bar">
              <label>
                <img
                  className="search-icon"
                  src={SearchIcon}
                  alt="search_icon"
                />
              </label>
              <div className="contain-input-search">
                <input
                  className="input-search-bar"
                  type="text"
                  name="name"
                  placeholder="Search here..."
                />
              </div>
            </form>
          </div>
          <div className="container-icons">
            <Link to="./login">
              <img className="icon-user" src={UserIcon} alt="user" />
            </Link>
            <Link to="./cart">
              <img className="icon-bag" src={BagIcon} alt="bag" />
            </Link>
          </div>
        </div>
      </div>
      <div className="main-menu-bar">
        <div className="container-menu-bar">
          <div className="menu-link">
            <Link className="menu-link-href" to="./collection">
              Collections
            </Link>
          </div>
          <div className="menu-link">
            <Link className="menu-link-href" to="./product">
              Home Food
            </Link>
          </div>
          <div className="menu-link">
            <Link className="menu-link-href" to="./reviews">
              Our Customer's Reviews
            </Link>
          </div>
          <div className="menu-link">
            <Link className="menu-link-href" to="./about">
              About Us
            </Link>
          </div>
          <div className="menu-link">
            <Link className="menu-link-href" to="./contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
