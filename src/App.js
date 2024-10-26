import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed import statement
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Componets/Home";
import About from "../src/Componets/Aboutus";
 import Zoom from "../src/Componets/Zoom";
import withTopbarLayout from "../src/Componets/Topbar";
import Blogs from "../src/Componets/Blogs";
import Websitedesigningdevelopment from "../src/page/Websitedesigningdevelopment";
import Webapplication from "../src/page/Webapplication";

import React from "react"; // Removed unnecessary import
import Services from "../src/Componets/Services";
import Portfolio from "../src/Componets/Portfolio";
import Gallery from "../src/Componets/Gallery";
import Career from "../src/Componets/Career";
import Contact from "../src/Componets/Contact";
import Artificial from "../src/page/Artificial";
import Jobapply from "./page/Jobapply";
import Successfully from "../src/page/Successfully";
import Ourproducts from "./Componets/Ourproducts";
import Development from "../src/page/Development";

import UIUXdesigning from "../src/page/UIUXdesigning";
import Mobileapp from "../src/page/Mobileapp";
import Ecommerce from "../src/page/Ecommerce";
import Testing from "../src/page/Testing";
import Churchmanagement from "../src/page/Churchmanagement";
import Bethclinic from "../src/page/Bethclinic";

import Tuitionmanagement from "../src/page/Tuitionmanagement";
import Bestbilling from "../src/page/Bestbilling";

function App() {
 

  return (
    <Router>
      <Routes>
      
      <Route
          path="/"
          element={withTopbarLayout(<Home />, true)}
        />       
         <Route
          path="/Home"
          element={withTopbarLayout(<Home />, true)}
        />

        <Route path="/Aboutus" element={withTopbarLayout(<About />, true)} />
        <Route path="/Blogs" element={withTopbarLayout(<Blogs />, true)} />
        
        <Route
          path="/Services"
          element={withTopbarLayout(<Services />, true)}
        />
        <Route
          path="/Websitedesigningdevelopment"
          element={withTopbarLayout(<Websitedesigningdevelopment />, true)}
        />

        <Route
          path="/Portfolio"
          element={withTopbarLayout(<Portfolio />, true)}
        />
        <Route
          path="/Ourproducts"
          element={withTopbarLayout(<Ourproducts />, true)}
        />
        <Route path="/Gallery" element={withTopbarLayout(<Gallery />, true)} />
        <Route path="/Career" element={withTopbarLayout(<Career />, true)} />
        <Route path="/Contact" element={withTopbarLayout(<Contact />, true)} />

        <Route
          path="/Jobapply"
          element={withTopbarLayout(<Jobapply />, true)}
        />
        <Route
          path="/Artificial/:id"
          element={withTopbarLayout(<Artificial />, true)}
        />

        <Route
          path="/Successfully"
          element={withTopbarLayout(<Successfully />, true)}
        />
        <Route
          path="/Development/:id"
          element={withTopbarLayout(<Development />, true)}
        />


        <Route
          path="/Webapplication"
          element={withTopbarLayout(<Webapplication />, true)}
        />
        <Route
          path="/UIUXdesigning"
          element={withTopbarLayout(<UIUXdesigning />, true)}
        />
        <Route
          path="/Mobileapp"
          element={withTopbarLayout(<Mobileapp />, true)}
        />
        <Route
          path="/Ecommerce"
          element={withTopbarLayout(<Ecommerce />, true)}
        />
        <Route path="/Testing" element={withTopbarLayout(<Testing />, true)} />
        <Route
          path="/Churchmanagement"
          element={withTopbarLayout(<Churchmanagement />, true)}
        />
        <Route
          path="/Bethclinic"
          element={withTopbarLayout(<Bethclinic />, true)}
        />
        <Route
          path="/Bestbilling"
          element={withTopbarLayout(<Bestbilling />, true)}
        />
        <Route
          path="/Tuitionmanagement"
          element={withTopbarLayout(<Tuitionmanagement />, true)}
        />
        <Route
          path="/Zoom"
          element={withTopbarLayout(<Zoom />, true)}
        /> 
      </Routes>

    </Router>
  );
}

export default App;
