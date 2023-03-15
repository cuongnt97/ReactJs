import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";


import '../assets/css/header.css';


export default function Header() {
  return (
    <section id="header" className="container-fluid">
      <Link to={"."}>
        <img src="/images/logo.png" alt="Logo.png" />
      </Link>

      <nav className="navbar">
        <NavLink className="nav-link" to=".">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="men">
          MEN
        </NavLink>
        <NavLink className="nav-link" to="women">
          WOMEN
        </NavLink>
        <NavLink className="nav-link" to="blog">
          BLOG
        </NavLink>
        <NavLink className="nav-link" to="contact">
          CONTACT
        </NavLink>
      </nav>

      <div id="info-form">
        <form className="search-form">
          <input className="search-item" type="text" placeholder="Search" />
          <Link className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </form>

        <div className="cart-form">
          <Link to={"cart"}>
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
          <span className="cart-quantity">0</span>
        </div>

        <div className="login-form">
          <Link to={"auth"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>

      <div id="mobile">
        <i className="bar-icon fa-solid fa-bars"></i>
      </div>
    </section>
  );
}
