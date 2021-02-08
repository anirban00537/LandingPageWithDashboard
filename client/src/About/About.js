import React, { useState, useEffect } from "react";
import { fetchAbout, createAbout } from "../Api/index";
import LightSpeed from "react-reveal/LightSpeed";

const About = () => {
  const [about, setAbout] = useState({
    aboutId: 1234,
    title: "",
    description: "",
    image: "",
  });
  const onload = async () => {
    const { data } = await fetchAbout();
    if (data.length === 0) {
      createAbout(about);
    } else {
      const { title, description, image } = data[0];
      setAbout({
        aboutId: 1234,
        title,
        description,
        image,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);
  return (
    <div>
      <LightSpeed Right>
        <div id="about" className="counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xl-6">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src={about.image}
                    alt="alternative"
                  />
                </div>{" "}
                {/* end of image-container */}
              </div>{" "}
              {/* end of col */}
              <div className="col-lg-7 col-xl-6">
                <div className="text-container">
                  <div className="section-title">ABOUT KOTHON</div>
                  <h4>{about.title}</h4>
                  <p>{about.description}</p>
                  <div id="counter">
                    <div className="cell">
                      <div
                        className="counter-value number-count"
                        data-count={231}
                      >
                        100%
                      </div>
                      <div className="counter-info">
                        Happy
                        <br />
                        Users
                      </div>
                    </div>
                    <div className="cell">
                      <div
                        className="counter-value number-count"
                        data-count={121}
                      >
                        100%
                      </div>
                      <div className="counter-info">
                        Issues
                        <br />
                        Solved
                      </div>
                    </div>
                    <div className="cell">
                      <div
                        className="counter-value number-count"
                        data-count={159}
                      >
                        100%
                      </div>
                      <div className="counter-info">
                        Good
                        <br />
                        Reviews
                      </div>
                    </div>
                  </div>
                  {/* end of counter */}
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
      </LightSpeed>
      {/* end of counter */}
      {/* end of about */}
    </div>
  );
};

export default About;
