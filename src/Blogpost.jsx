import React, { useEffect } from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Aos from "aos";
import "aos/dist/aos.css";

function Blogpost(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="post-content" data-aos="zoom-in">
        <div className="post-image">
          <div>
            <img src={props.img} className="img" alt="..."></img>
          </div>
          <div className="post-info">
            <span>
              <PermIdentityIcon />
              &nbsp;&nbsp;Admin
            </span>
            <span>
              <CalendarTodayIcon />
              &nbsp;&nbsp;{props.date}
            </span>
            <span>&nbsp;&nbsp;{props.comment}</span>
          </div>
        </div>
        <div className="post-title">
          <a href="#!">{props.title}</a>
          <p>{props.paragraph}</p>
          <button className="btn btn-post">
            Read More&nbsp;
            <ArrowRightAltIcon />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Blogpost;
