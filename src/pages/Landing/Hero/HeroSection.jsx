import React from "react";

import "./HeroSection.css";

const Hero = () => {
  return (
    <div
      className="hero_section"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="hero_left">
        <h1 className="hero_title">Stay on Top of Your Tasks with Taskopia</h1>
        <div className="hero_para_container">
          <p className="hero_para">
            Welcome to Taskopia - the ultimate solution for keeping your to-do
            list organized and efficient. With our user-friendly interface, you
            can easily manage your tasks, set reminders, and track your
            progress.
          </p>
          <button className="hero-cta-btn">Create New Task</button>
        </div>

        <div className="download_cta_btns">
          <button className="cta_down_play">
            {/* todo : a svg , span ,  a get it on and one more div  */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 466 511.98"
              width="20px"
              height="20px"
            >
              <g id="Layer_x0020_1">
                <path
                  fill="#EA4335"
                  fill-rule="nonzero"
                  d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"
                />
                <path
                  fill="#FBBC04"
                  fill-rule="nonzero"
                  d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"
                />
                <path
                  fill="#34A853"
                  fill-rule="nonzero"
                  d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"
                />
                <path
                  fill="#4285F4"
                  fill-rule="nonzero"
                  d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"
                />
              </g>
            </svg>

            <span className="line"></span>

            <div className="play_cont">
              <p>Get it on </p>
              <p>PLAYSTORE</p>
            </div>
          </button>

          <button className="cta_down_apple">
            {/* todo : a svg , span ,  a get it on and one more div  */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 640 640"
            >
              <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
            </svg>

            <span className="line"></span>
            <div className="apple_cont">
              <p>Get it on </p>
              <p>APPSTORE</p>
            </div>
          </button>
        </div>
      </div>

      {/* right side1 */}

      <div className="hero_right">
        <div
          className="row_1"
          data-aos="fade-down"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="hexa hex_1_1">
            {/* <img src="src/assets/pattern_1.jpg" alt="Description of the image" /> */}
          </div>
        </div>

        <div className="row_2">
          <div
            className="we"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1050"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_1"></div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1100"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_2"></div>
          </div>

          <div
            className="us"
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-duration="1150"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_3"></div>
          </div>
        </div>

        <div className="row_3">
          <div>
            <div className="hexa hex_3_1"></div>
          </div>

          <div>
            <div className="hexa hex_3_2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
