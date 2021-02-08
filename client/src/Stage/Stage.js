import { useState, useEffect } from "react";

import { fetchStage, createStage } from "../Api/index";
const Stage = () => {
  const [stageData, setStageData] = useState({
    stageId: 1234,
    des1: "",
    des2: "",
    des3: "",
  });

  const onload = async () => {
    const { data } = await fetchStage();
    if (data.length === 0) {
      createStage(stageData);
    } else {
      const { stageId, des1, des2, des3 } = data[0];
      setStageData({
        stageId: stageId,
        des1: des1,
        des2: des2,
        des3: des3,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      {/* Description */}
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Card */}
              <div className="card ">
                <span className="fa-stack ">
                  <span className="hexagon" />
                  <i className="fas fas-dev fa-binoculars fa-stack-1x circle" />
                </span>
                <div className="card-body">
                  <h4 className="card-title">Project Analysis</h4>
                  <p>{stageData.des1}</p>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon" />
                  <i className="fas fas-dev fa-list-alt fa-stack-1x circle" />
                </span>
                <div className="card-body">
                  <h4 className="card-title">Development Planning</h4>
                  <p>{stageData.des2}</p>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon" />
                  <i className="fas fas-dev fa-chart-pie fa-stack-1x circle" />
                </span>
                <div className="card-body">
                  <h4 className="card-title">Execution &amp; Evaluation</h4>
                  <p>{stageData.des3}</p>
                </div>
              </div>
              {/* end of card */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-1 */}
      {/* end of description */}
    </div>
  );
};

export default Stage;
