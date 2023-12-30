import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./home.css"


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__container__left">
            <h1 className="home__container__left__title">Welcome to <span className="home__container__left__title__span">Covid-19</span> Tracker</h1>
            <p className="home__container__left__para">A website that tracks the covid-19 cases in India and around the world</p>
          </div>
          <div className="home__container__right">
            <img src="https://i.ibb.co/9nKmQ0H/undraw-healthy-lifestyle-6tyl.png" alt="home" className="home__container__right__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;