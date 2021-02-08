import { useState, useEffect } from "react";
import Typical from "react-typical";

import { fetchIntro, createIntro } from "../Api/index";
import Bounce from "react-reveal/Bounce";

const Intro = () => {
  const [introData, setIntroData] = useState({
    title: "",
    introId: 1234,
    personName: "",
    description: "",
    image: "",
  });

  const onload = async () => {
    const { data } = await fetchIntro();

    if (data.length === 0) {
      createIntro(introData);
    } else {
      const { title, introId, personName, description, image } = data[0];
      setIntroData({
        title: title,
        introId: introId,
        personName: personName,
        description: description,
        image: image,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);
  return (
    <div>
      <Bounce>
        <div id="intro" className="basic-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src={introData.image}
                    alt="alternative"
                  />
                </div>
              </div>{" "}
              <div className="col-lg-6">
                <div className="introSec text-container">
                  <div className="section-title">INTRO</div>
                  <h2>{introData.title}</h2>

                  <p className="testimonial-text">{introData.description}</p>
                  <div className="testimonial-author">
                    <Typical
                      steps={[
                        introData.personName,
                        2000,
                        introData.personName,
                        2000,
                      ]}
                      loop={Infinity}
                      wrapper="div"
                    />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Bounce>
    </div>
  );
};

export default Intro;
