import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import Footer from './Footer';
import '../Style/Gallery.css';
import request from "../request";

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const response = await request.get("/api/gallery/list");
      if (response.data && response.data.galleryData) {
        setGalleryData(response.data.galleryData);
      } else {
        setError("No gallery data found");
      }
    } catch (error) {
      console.error("Error fetching gallery data:", error);
      setError("Failed to fetch gallery data. Please try again later.");
    }
  };

  const disableRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Spangles Infotech Gallery</title>
        <meta name="description" content="Spangles Gallery showcases a vibrant collection of personal and collaborative moments captured within our gallery space. This gallery section offers a glimpse into our community events, artist interactions, and behind-the-scenes activities, reflecting the dynamic spirit of Spangles Gallery." />
        <meta name="keywords" content="Portfolio Showcase, Visual Journey, Project Highlights, Success Stories, Innovative Solutions, Technology Showcase" />
      </Helmet>
      <div className='Gallery' onContextMenu={disableRightClick}>
        <div className='container'>
          <h1 className="ca1 sv"><b>SPANGLES GALLERY</b></h1>

          {error && <p>{error}</p>}
          <div className='row'>
            {galleryData.map((item) => (
              <div key={item._id} className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                {item.mimetype && item.mimetype.startsWith('image') ? (
                  <img
                    src={`${Baseurl}/${item.path}`}
                    alt={item.name || 'Gallery Image'}
                    className='gallery-image img-fluid'
                    style={{ height: '350px', width: '100%' }}
                  />
                ) : (
                  <iframe
                    className='gallery-image'
                    src={item.path}
                    title={item.name || 'Gallery Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ height: '350px', width: '100%' }}
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
