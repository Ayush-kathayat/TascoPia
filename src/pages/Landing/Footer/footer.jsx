import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");

    alert(`Thank you for subscribing to our newsletter ${email}!`);
  };

  return (
    <>
      <div className="spacer">
        <svg
          id="visual"
          viewBox="0 0 960 300"
          width="960"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="960" height="300" fill="#171617"></rect>
          <path
            d="M0 187L16 191C32 195 64 203 96 209C128 215 160 219 192 214.8C224 210.7 256 198.3 288 192.7C320 187 352 188 384 192.5C416 197 448 205 480 204.2C512 203.3 544 193.7 576 189.5C608 185.3 640 186.7 672 192C704 197.3 736 206.7 768 206.7C800 206.7 832 197.3 864 191.7C896 186 928 184 944 183L960 182L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#171617"
          ></path>
          <path
            d="M0 225L16 222.8C32 220.7 64 216.3 96 215.3C128 214.3 160 216.7 192 218.8C224 221 256 223 288 226.2C320 229.3 352 233.7 384 236.3C416 239 448 240 480 236.8C512 233.7 544 226.3 576 223.5C608 220.7 640 222.3 672 224.7C704 227 736 230 768 226.2C800 222.3 832 211.7 864 209.7C896 207.7 928 214.3 944 217.7L960 221L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#201e1f"
          ></path>
          <path
            d="M0 243L16 242.2C32 241.3 64 239.7 96 240C128 240.3 160 242.7 192 242.8C224 243 256 241 288 240.3C320 239.7 352 240.3 384 236.5C416 232.7 448 224.3 480 227C512 229.7 544 243.3 576 243.5C608 243.7 640 230.3 672 228.8C704 227.3 736 237.7 768 237.7C800 237.7 832 227.3 864 227C896 226.7 928 236.3 944 241.2L960 246L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#292727"
          ></path>
          <path
            d="M0 235L16 238.3C32 241.7 64 248.3 96 249.3C128 250.3 160 245.7 192 247.5C224 249.3 256 257.7 288 262C320 266.3 352 266.7 384 262.8C416 259 448 251 480 250C512 249 544 255 576 254C608 253 640 245 672 242C704 239 736 241 768 244.8C800 248.7 832 254.3 864 257.5C896 260.7 928 261.3 944 261.7L960 262L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#322f2f"
          ></path>
          <path
            d="M0 266L16 267.3C32 268.7 64 271.3 96 270.7C128 270 160 266 192 262.3C224 258.7 256 255.3 288 253.2C320 251 352 250 384 252.2C416 254.3 448 259.7 480 265.5C512 271.3 544 277.7 576 278.3C608 279 640 274 672 269C704 264 736 259 768 261C800 263 832 272 864 271.3C896 270.7 928 260.3 944 255.2L960 250L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#3b3938"
          ></path>
          <path
            d="M0 287L16 285.2C32 283.3 64 279.7 96 280.5C128 281.3 160 286.7 192 290C224 293.3 256 294.7 288 290.5C320 286.3 352 276.7 384 273.8C416 271 448 275 480 280.3C512 285.7 544 292.3 576 291.8C608 291.3 640 283.7 672 282.2C704 280.7 736 285.3 768 285.2C800 285 832 280 864 279.7C896 279.3 928 283.7 944 285.8L960 288L960 301L944 301C928 301 896 301 864 301C832 301 800 301 768 301C736 301 704 301 672 301C640 301 608 301 576 301C544 301 512 301 480 301C448 301 416 301 384 301C352 301 320 301 288 301C256 301 224 301 192 301C160 301 128 301 96 301C64 301 32 301 16 301L0 301Z"
            fill="#444241"
          ></path>
        </svg>
      </div>

      <footer className="footer-wrapper">

        <div className="footer-mid">
          <ul className="listas">
            <Link to="/home">
              <li className="list">Home</li>
            </Link>
            <Link to="/about">
              <li className="list">About </li>
            </Link>
            <Link to="/faq">
              <li className="list">FAQ</li>
            </Link>
          </ul>

          <ul className="listas">
            <Link to="">
              <li className="list">Genral info</li>
            </Link>
            <Link to="">
              <li className="list">Privacy Policy</li>
            </Link>
            <Link to="">
              <li className="list">Terms of Service</li>
            </Link>
          </ul>

          <ul className="listas">
            <Link to="/contact">
              <li className="list">Contact </li>
            </Link>

            <Link>
              <li className="list">Instagram</li>
            </Link>

            <Link>
              <li className="list">Linkedin</li>
            </Link>

            <Link>
              <li className="list">Twitter</li>
            </Link>
          </ul>
        </div>

        <div className="footer-bottom">
          <h1>TASCOPIA</h1>
          <p>© 2024, All rights reserved</p>
          {/* TOD0 :  ADD SOCIAL MEDIA ICONS */}

          <div className="social-icons">
            <div className="twitter-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>

            <div className="linkedin-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>

            <div className="instagram-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
