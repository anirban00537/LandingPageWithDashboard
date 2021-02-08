import Stage from "../../Stage/Stage";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchStage, updateStagePost } from "../../Api/index";
import toast from "react-simple-toasts";

const StageAdmin = () => {
  const [stageData, setStageData] = useState({
    stageId: 1234,
    des1: "",
    des2: "",
    des3: "",
  });
  const history = useHistory();

  const onload = async () => {
    const { data } = await fetchStage();

    const { stageId, des1, des2, des3 } = data[0];
    setStageData({
      stageId: stageId,
      des1: des1,
      des2: des2,
      des3: des3,
    });
  };
  useEffect(() => {
    onload();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("working on it");
    updateStagePost(stageData).then(() => {
      history.push("/");
      history.push("/admin");

      return toast("Successfully Saved");
    });
  };
  return (
    <div className="tagline-part container">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseStage"
          aria-expanded="false"
          aria-controls="collapseStage"
        >
          Stage preview
        </button>
      </p>

      <div class="collapse preview" id="collapseStage">
        <Stage />
      </div>
      <form
        autoComplete="off"
        method="patch"
        noValidate
        onSubmit={handleSubmit}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={stageData.des1}
                  onChange={(e) => {
                    setStageData({ ...stageData, des1: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div class="col-sm">
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={stageData.des2}
                  onChange={(e) => {
                    setStageData({ ...stageData, des2: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div class="col-sm">
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={stageData.des3}
                  onChange={(e) => {
                    setStageData({ ...stageData, des3: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-outline-primary submit_button">
          Set
        </button>
      </form>
    </div>
  );
};

export default StageAdmin;
