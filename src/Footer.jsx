import React, { useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import blog1 from "./Image/blog11.webp";
import blog2 from "./Image/blog12.webp";
import blog3 from "./Image/blog13.webp";
import blog4 from "./Image/blog14.webp";
import blog5 from "./Image/blog15.webp";
import blog6 from "./Image/blog16.webp";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="about-us" data-aos="fade-right">
            <h2>about us</h2>
            <p>
              hey i'm a footer about us section for only design so don worrie
              and pleas stay away from me
            </p>
          </div>
          <div className="newsletter" data-aos="fade-right">
            <h2>newsletter</h2>
            <p>Stay update with our latest</p>
            <div className="form-element">
              <input type="text" placeholder="Email" />
              <span>
                <NavigateNextIcon classNmae="logo" />
              </span>
            </div>
          </div>
          <div className="instagram" data-aos="fade-left">
            <h2>instagram</h2>
            <div className="flex-row">
              <img src={blog1} alt="insta1"></img>
              <img src={blog2} alt="insta2"></img>
              <img src={blog3} alt="insta3"></img>
            </div>
            <div className="flex-row">
              <img src={blog4} alt="insta1"></img>
              <img src={blog5} alt="insta2"></img>
              <img src={blog6} alt="insta3"></img>
            </div>
          </div>
          <div className="follow" data-aos="fade-left">
            <h2>follow us</h2>
            <p>Let us be socila</p>
            <div>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
        <div className="rights flex-row">
          <h4 className="text-gray">
            Copyright @2020 All rights reserved | made by Harsh Upadhyay
            <a href="#!" target="_black">
              ArchNights <YouTubeIcon />
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
