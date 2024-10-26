import React, { useState, useEffect } from "react";
import "../Style/Blogs.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import Footer from "../Componets/Footer";
import { useNavigate } from "react-router-dom";

import request from "../request";
const Baseurl = "https://nodejs.spanglesinfotech.com";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await request.get("/api/blog/list");
      if (response.data && response.data.blogs) {
        setBlogs(response.data.blogs);
      } else {
        setError("No blogs found");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs. Please try again later.");
    }
  };

  const handleBlogClick = (id) => {
    navigate(`/Artificial/${id}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Spangles Infotech Blog</title>
        <meta
          name="description"
          content="Explore Spangles Infotech's insightful blogs covering the latest trends and innovations in software development, cybersecurity, and IT solutions. Gain valuable industry insights and practical tips to enhance your business strategies and technological capabilities."
        />
        <meta
          name="keywords"
          content="Blogs, Technology Trends, Industry News, Innovation updates, tech Trends, Experrt Advice"
        />
      </Helmet>
      {/* changed the marginBottom to 0px to remove the extra space under the bottom */}
      <div className="Blogs" style={{ textAlign: "center", marginBottom: "0%", height:"auto"}} onContextMenu={disableRightClick}>
    
        <h1 className="sv">
          <b>BLOGS</b>
        </h1>
        <p className="bl2">Preparing for your success, we provide truly prominent IT solutions.</p>

        <div className="container">
          <div className="row mt-5 mb-5">
            {blogs.map((blog) => (
              <div className="col-lg-zzzzzzzzzzzzzzzzzzzzzzzzzz col-md-6 mb-4" key={blog._id}>
                <a href={`/Artificial/${blog._id}`} style={{ textDecoration: 'none' }}>

                  <div className="card doderline" >
                    <img className="card-img-top" src={`${Baseurl}/${blog.image}`} alt={blog.title} style={{ width: '100%', height: '20rem' }} />
                    <div className="card-body" style={{ width: '100%', height: '10rem' }}>
                      <IconContext.Provider value={{ size: "1em" }}>
                        <span className="d-flex justify-content-start mb-3">
                          <IoTimeOutline className="mt-1 mx-1" />
                          <span className="text8">{new Date(blog.posted_on).toLocaleDateString()}</span>
                        </span>
                      </IconContext.Provider>
                      <p className="card-text"><b>{blog.title.substring(0, 50)}...</b></p>
                      <a href={`/Artificial/${blog._id}`} style={{ color: '#345261' }}>
                        Read More <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>  </a>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
