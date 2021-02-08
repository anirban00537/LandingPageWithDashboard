import React from "react";
import Details from "../../Details/Details";
import FileBase from "react-file-base64";
import { updateDetailsPost, fetchDetails } from "../../Api/index";
import { useHistory } from "react-router-dom";

import { useState, useEffect } from "react";
import toast from "react-simple-toasts";

const DetailAdmin = () => {
  const history = useHistory();

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

    const { detailsId, title1, title2, title3, des1, des2, des3 } = data[0];
    setDetailsData({
      detailsId: detailsId,
      title1: title1,
      title2: title2,
      title3: title3,
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
    updateDetailsPost(detailsData).then(() => {
      history.push("/");
      history.push("/admin");
      return toast("Successfully Saved");
    });
  };

  return (
    <div className="tagline-part container ">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseDetails"
          aria-expanded="false"
          aria-controls="collapseDetails"
        >
          Advantage preview
        </button>
      </p>
      <div class="collapse preview" id="collapseDetails">
        <Details />
      </div>
      <form
        autoComplete="off"
        noValidate
        method="patch"
        onSubmit={handleSubmit}
      >
        <div class="container">
          <div className="custom-file">
            <FileBase
              type="file"
              multipla={false}
              onDone={({ base64 }) =>
                setDetailsData({ ...detailsData, image: base64 })
              }
            />
          </div>
          <div class="row">
            <div class="col-sm">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                  aria-label="title"
                  value={detailsData.title1}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, title1: e.target.value });
                  }}
                />
              </div>
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={detailsData.des1}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, des1: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div class="col-sm">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                  aria-label="title"
                  value={detailsData.title2}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, title2: e.target.value });
                  }}
                />
              </div>
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={detailsData.des2}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, des2: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div class="col-sm">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                  aria-label="title"
                  value={detailsData.title3}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, title3: e.target.value });
                  }}
                />
              </div>
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  value={detailsData.des3}
                  onChange={(e) => {
                    setDetailsData({ ...detailsData, des3: e.target.value });
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

export default DetailAdmin;
