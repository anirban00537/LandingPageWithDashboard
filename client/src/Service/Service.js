import React, { useState, useEffect } from "react";
import { fetchService } from "../Api/index";

import LightSpeed from "react-reveal/LightSpeed";

const Service = () => {
  let [service, setService] = useState([]);
  const onload = async () => {
    const { data } = await fetchService();
    setService(data);
  };
  useEffect(() => {
    onload();
  }, []);
  return (
    <div>
      <div id="services" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">SERVICES</div>
              <h2>
                Choose The Service Package
                <br /> That Suits Your Needs
              </h2>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <LightSpeed>
            <div className="row">
              <div className="col-lg-12">
                {/* Card */}

                {/* ======= */}
                {service.map((s) => (
                  <div className="card service-image">
                    <div className="card-image ">
                      <img
                        className="img-fluid  "
                        src={s.image}
                        alt="alternative"
                        key={s._id}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{s.title}</h3>
                      <p>{s.description}</p>
                    </div>

                    {/* end of button-container */}
                  </div>
                ))}
                {/* ======= */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
          </LightSpeed>
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
    </div>
  );
};

export default Service;
