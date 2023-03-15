import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

//css
import "../index.css";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="/images/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>Floor 12A, Viwaseen Tower, 48 To Huu
        </p>
        <p>
          <strong>Phone: </strong>0987654321
        </p>
        <p>
          <strong>Hour: </strong>9:00 - 17:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faPinterest} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link className="link" to=".">
          About Us
        </Link>
        <Link className="link" to=".">
          Delivery Information
        </Link>
        <Link className="link" to=".">
          Privacy Policy
        </Link>
        <Link className="link" to=".">
          Terms & Conditions
        </Link>
        <Link className="link" to=".">
          Contact Us
        </Link>
      </div>

      <div className="col">
        <h4>My Account</h4>

        <Link className="link" to=".">
          Sign In
        </Link>
        <Link className="link" to=".">
          View Cart
        </Link>
        <Link className="link" to=".">
          My Wishlist
        </Link>
        <Link className="link" to=".">
          Track My Order
        </Link>
        <Link className="link" to=".">
          Help
        </Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row1">
          <img src="/images/pay/app.jpg" alt="" />
          <img src="/images/pay/play.jpg" alt="" />
        </div>
        <p>Secure Payment Gateways</p>
        <img src="/images/pay/pay.png" alt="" />
      </div>
    </footer>
  );
}
