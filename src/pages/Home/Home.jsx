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

      <div className="home-wrapper">

      <Task />

       
      </div>
    </>
  );
};

export default Home;
