import { fetchDetails, createDetails } from "../Api/index";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";

const Details = () => {
  const [detailsData, setDetailsData] = useState({
    detailsId: 1234,
    title1: "",
    title2: "",
    title3: "",
    des1: "",
    des2: "",
    des3: "",
    image: "",
  });

  const onload = async () => {
    const { data } = await fetchDetails();
    if (data.length === 0) {
      createDetails(detailsData);
    } else {
      const {
        detailsId,
        title1,
        title2,
        title3,
        des1,
        des2,
        des3,
        image,
      } = data[0];
      setDetailsData({
        detailsId: 1234,
        title1: title1,
        title2: title2,
        title3: title3,
        des1: des1,
        des2: des2,
        des3: des3,
        image: image,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      <div id="details" className="accordion">
        <Zoom>
          <div className="area-1">
            <img src={detailsData.image} className="details-area" />
          </div>
        </Zoom>
        {/* end of area-1 on same line and no space between comments to eliminate margin white space */}
        <Zoom>
          <div className="area-2">
            {/* Accordion */}
            <div className="accordion-container" id="accordionOne">
              <h2>Accelerate Business Growth To Improve Revenue Numbers</h2>
              <div className="item">
                <div id="headingOne">
                  <span
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    role="button"
                  >
                    <span className="circle-numbering">1</span>
                    <span className="accordion-title">
                      {detailsData.title1}
                    </span>
                  </span>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionOne"
                >
                  <div className="accordion-body">{detailsData.des1}</div>
                </div>
              </div>{" "}
              {/* end of item */}
              <div className="item">
                <div id="headingTwo">
                  <span
                    className="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    role="button"
                  >
                    <span className="circle-numbering">2</span>
                    <span className="accordion-title">
                      {detailsData.title2}
                    </span>
                  </span>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionOne"
                >
                  <div className="accordion-body">{detailsData.des2}</div>
                </div>
              </div>{" "}
              {/* end of item */}
              <div className="item">
                <div id="headingThree">
                  <span
                    className="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    role="button"
                  >
                    <span className="circle-numbering">3</span>
                    <span className="accordion-title">
                      {detailsData.title3}
                    </span>
                  </span>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionOne"
                >
                  <div className="accordion-body">{detailsData.des3}</div>
                </div>
              </div>{" "}
              {/* end of item */}
            </div>{" "}
            {/* end of accordion-container */}
            {/* end of accordion */}
          </div>
        </Zoom>
        {/* end of area-2 */}
      </div>{" "}
    </div>
  );
};

export default Details;
