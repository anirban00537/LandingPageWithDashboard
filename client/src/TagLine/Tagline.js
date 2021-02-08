import { useState, useEffect } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Typical from "react-typical";
import { fetchTagline, createTagline } from "../Api/index";
const Tagline = () => {
  const [taglineData, setTaglineData] = useState({
    title: "",
    tagId: 1234,
    changableText: "",
    description: "",
    image: "",
  });
  const onload = async () => {
    const { data } = await fetchTagline();

    if (data.length === 0) {
      createTagline(taglineData);
    } else {
      const { title, changableText, description, image } = data[0];
      setTaglineData({
        title: title,
        tagId: 1234,
        changableText: changableText.split(","),
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
      <header
        id="header"
        className="header"
        style={{
          background: `linear-gradient(90deg, rgba(99,8,16,0.7147233893557423) 0%, rgba(71,0,0,0.8183648459383753) 51%, rgba(0,0,0,0.7595413165266106) 100%, rgba(154,16,28,0.7147233893557423) 100%) ,url(${taglineData.image})  center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <LightSpeed>
                  <div className="text-container">
                    <h1>
                      {taglineData.title}{" "}
                      <span>
                        <Typical
                          className="text_rotate"
                          steps={[
                            taglineData.changableText[0],
                            2000,
                            taglineData.changableText[1],
                            2000,
                            taglineData.changableText[2],
                            2000,
                          ]}
                          loop={Infinity}
                          wrapper="p"
                        />
                      </span>
                    </h1>
                    <p className="p-heading p-large">
                      {taglineData.description}
                    </p>
                    <a className="btn-solid-lg page-scroll" href="#intro">
                      DISCOVER
                    </a>
                  </div>
                </LightSpeed>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Tagline;
