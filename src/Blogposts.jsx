import React, { useEffect } from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Aos from "aos";
import "aos/dist/aos.css";

function Blogposts(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="post-content" data-aos="flip-up">
        <div className="post-image">
          <div>
            <img src={props.img} className="img" alt="..."></img>
          </div>
          <div className="post-info">
            <span>
              <CalendarTodayIcon />
              &nbsp;&nbsp;{props.date}
            </span>
            <span>&nbsp;&nbsp;{props.comment}</span>
          </div>
        </div>
        <div className="post-title">
          <a href="#!">{props.title}</a>
        </div>
      </div>
    </>
  );
}

export default Blogposts;
