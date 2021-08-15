import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [ShowLink, setShowLink] = useState(true);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar" id={ShowLink ? "h-nav" : ""}>
        <div className="nav-menu flex-row">
          <div className="nav-left">
            <NavLink to="#" className="logo">
              ArchNights
            </NavLink>
          </div>
          <div className="nav-mid" id={ShowLink ? "v-class" : ""}>
            <ul className="nav-list">
              <li className="nav-link">
                <NavLink className="nav-item" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="nav-item" to="/">
                  Design
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="nav-item" to="/">
                  About Us
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="nav-item" to="/">
                  Blog
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="nav-item" to="/">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-right" id={ShowLink ? "v-class" : ""}>
            <ul>
              <li>
                <a href="#!">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#!">
                  <WhatsAppIcon />
                </a>
              </li>
              <li>
                <a href="#!">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#!">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="burger" onClick={() => setShowLink(!ShowLink)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
