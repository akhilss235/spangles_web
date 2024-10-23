import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo1 from '../image/Spangles Colour 2.png';
import Logo2 from '../image/Spangles White 1.png';
import '../Style/Topbar.css';
import { useMobileHooks } from '../hooks/useMobileHooks';

const Topbar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Logo1);
  const [homeNavbarColor, setHomeNavbarColor] = useState('white');
  const [homeTextColor, setHomeTextColor] = useState('#345261');
  const location = useLocation();

  useEffect(() => {
    // Set default logo
    setLogoSrc(Logo2);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setLogoSrc(Logo2);
    } else if (location.pathname === '/Aboutus' || location.pathname === '/Blogs') {
      setLogoSrc(Logo1);
    } else {
      setLogoSrc(Logo1);
    }
  }, [location.pathname]);

  useEffect(() => {
    const isHomePage = location.pathname === '/'; 
    const newHomeNavbarColor = isHomePage ? '#345261' : 'white';
    const newHomeTextColor = isHomePage ? 'white' : '#345261';
    setHomeNavbarColor(newHomeNavbarColor);
    setHomeTextColor(newHomeTextColor);
  }, [location.pathname]);
  const getNavLinkClass = (path) => {
    const isHomePage = location.pathname === '/';
    const isActive = location.pathname === path || 
                      (path === '/Services' && (
                        location.pathname.startsWith('/Websitedesigningdevelopment') || 
                        location.pathname.startsWith('/Webapplication') || 
                        location.pathname.startsWith('/Mobileapp') || 
                        location.pathname.startsWith('/Ecommerce') || 
                        location.pathname.startsWith('/Testing') || 
                        location.pathname.startsWith('/UIUXdesigning')
                      ))||
                      (path === '/Ourproducts' && (
                        location.pathname.startsWith('/Churchmanagement')
                        || location.pathname.startsWith('/Bethclinic')
                        || location.pathname.startsWith('/Bestbilling')
                        || location.pathname.startsWith('/Tuitionmanagement')
                      ))||(path === '/Career' && (
                        location.pathname.startsWith('/Designer')
                        || location.pathname.startsWith('/Development')
                        // || location.pathname.startsWith('/Designpositions')
                        // || location.pathname.startsWith('/Softwarepositions')
                        // || location.pathname.startsWith('/Marketing')
                      ))||
                      (path === '/Blogs' && (
                        location.pathname.startsWith('/Sql')
                        || location.pathname.startsWith('/Artificial') 
                      ));
    
    const activeClass = isActive ? 'nav-link active' : 'nav-link';
    return isHomePage ? `${activeClass} Spangles-active` : activeClass;
  };
  

  const disableRightClick = (event) => {
    event.preventDefault();
  };
  const {mobileView, currentWidth} = useMobileHooks()
  
  
  // logo width 
  const logoWidth = mobileView ? "200px" : "300px"

  return (
    <>
      <Navbar expanded={expanded} expand="xl" style={{ backgroundColor: homeNavbarColor, paddingRight:"10px" }} onContextMenu={disableRightClick}>
        <  >
          <Navbar.Brand href="/" style={{marginLeft:'6%'}}>
            <img src={logoSrc} alt="Logo" style={{ width: logoWidth }} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto">
              <ul className="navbar-nav nav-menu-cont">
                <li className="menu nav-item">
                  <Link to="/" className={getNavLinkClass('/')} style={{ color: homeTextColor }}>Home</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Aboutus" className={getNavLinkClass('/Aboutus')} style={{ color: homeTextColor }}>About us</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Services" className={getNavLinkClass('/Services')} style={{ color: homeTextColor }}>Services</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Portfolio" className={getNavLinkClass('/Portfolio')} style={{ color: homeTextColor }}>Portfolio</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Ourproducts" className={getNavLinkClass('/Ourproducts')} style={{ color: homeTextColor }}>Our Products</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Blogs" className={getNavLinkClass('/Blogs')} style={{ color: homeTextColor }}>Blogs</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Gallery" className={getNavLinkClass('/Gallery')} style={{ color: homeTextColor }}>Gallery</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Career" className={getNavLinkClass('/Career')} style={{ color: homeTextColor }}>Career</Link>
                </li>
                <li className="menu nav-item">
                  <Link to="/Contact" className={getNavLinkClass('/Contact')} style={{ color: homeTextColor }}>Contact</Link>
                </li>
              </ul>
            </Nav> 
          </Navbar.Collapse>

        </>
   
      </Navbar>
    
      {children}
    </>
  );
};

const withTopbarLayout = (Component) => {
  return <Topbar>{Component}</Topbar>;
};

export default withTopbarLayout;
