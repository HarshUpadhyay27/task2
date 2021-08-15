import React, { useState, useEffect } from "react";
import blog1 from "./Image/blog4.jpg";
import blog2 from "./Image/blog12.webp";
import blog3 from "./Image/blog13.webp";
import blog4 from "./Image/blog14.webp";
import blog5 from "./Image/blog15.webp";
import blog6 from "./Image/blog16.webp";
import blog7 from "./Image/blog11.webp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Blogpost from "./Blogpost";
import Blogpostdata from "./Blogpostdata";
import Blogposts from "./Blogposts";
import Footer from "./Footer";
import Blogpostdatas from "./Blogpostdatas";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let blog = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];
  let i = blog.length;

  const [num, setNum] = useState(blog[0]);

  const incImg = () => {
    if (i < blog.length) {
      i = i + 1;
      setNum(blog[i]);
    } else {
      i = 0;
    }
  };

  const decImg = () => {
    if (i < blog.length + 1 && i > 1) {
      i = i - 1;
      setNum(blog[i]);
    } else {
      i = blog.length;
    }
  };

  return (
    <>
      <main>
        <section className="site-title">
          <div className="site-background">
            <h3>ArchNights Blogs</h3>
            <h1>Some Amezing Blogs</h1>
            <button className="btn">Explor</button>
          </div>
        </section>

        <section>
          <div className="blog">
            <div className="container">
              <div className="blog-post" data-aos="zoom-in">
                <div className="blog-content">
                  <div className="div">
                    <button className="buttom prew" onClick={incImg}>
                      <ChevronLeftIcon />
                    </button>
                    <img src={num} alt="..."></img>
                    <button className="buttom next" onClick={decImg}>
                      <ChevronRightIcon />
                    </button>
                  </div>

                  <div className="blog-title">
                    <h3>London Fashion weeks continued the evolution</h3>
                    <button className="btn btn-blog">Fashion</button>
                    <span>2 minute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="site-content">
            <div className="post">
              {Blogpostdata.map((val) => {
                return (
                  <Blogpost
                    key={val.id}
                    img={val.img}
                    date={val.date}
                    comment={val.comment}
                    title={val.title}
                    paragraph={val.paragraph}
                  />
                );
              })}
              ;
              <div className="pagination flex-row">
                <a href="#!">
                  <ArrowBackIosIcon />
                </a>
                <a href="#!" className="pages">
                  1
                </a>
                <a href="#!" className="pages">
                  2
                </a>
                <a href="#!" className="pages">
                  3
                </a>
                <a href="#!">
                  <NavigateNextIcon />
                </a>
              </div>
            </div>
            <aside className="sidebar">
              <div className="category">
                <h2>category</h2>
                <ul className="category-list">
                  <li className="list-items" data-aos="fade-left">
                    <a href="#!">Software</a>
                    <span>(05)</span>
                  </li>
                  <li className="list-items" data-aos="fade-left">
                    <a href="#!">Techonlogy</a>
                    <span>(02)</span>
                  </li>
                  <li className="list-items" data-aos="fade-left">
                    <a href="#!">Lifestyle</a>
                    <span>(07)</span>
                  </li>
                  <li className="list-items" data-aos="fade-left">
                    <a href="#!">Shopping</a>
                    <span>(01)</span>
                  </li>
                  <li className="list-items" data-aos="fade-left">
                    <a href="#!">Food</a>
                    <span>(08)</span>
                  </li>
                </ul>
              </div>
              <div className="popular-post">
                <h2>Popular Post</h2>

                {Blogpostdatas.map((val) => {
                  return (
                    <Blogposts
                      key={val.id}
                      img={val.img}
                      date={val.date}
                      comment={val.comment}
                      title={val.title}
                    />
                  );
                })}

                <div className="newsletter" data-aos="flip-up">
                  <h2>Newsletter</h2>
                  <div className="form-element">
                    <input
                      type="text"
                      className="input-element"
                      placeholder="Email"
                    />
                    <button className="btn form-btn">Subscribe</button>
                  </div>
                </div>
                <div className="popular-tags">
                  <h2>Popular Tag</h2>
                  <div className="tags flex-row">
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="100"
                    >
                      Software
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="200"
                    >
                      Techonlogy
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="300"
                    >
                      Travel
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="400"
                    >
                      Illustration
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="500"
                    >
                      Design
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="600"
                    >
                      Lifestyle
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="700"
                    >
                      Love
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
