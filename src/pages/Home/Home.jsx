import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "../../components/Navbar";
import Task from "../../components/Task";

import "./home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <Task />

      <div className="home-wrapper">

       
       
      </div>
    </>
  );
};

export default Home;
