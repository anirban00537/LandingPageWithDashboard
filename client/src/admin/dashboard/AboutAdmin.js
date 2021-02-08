import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import About from "../../About/About";
import { updateAboutPost, fetchAbout } from "../../Api/index";
import { useHistory } from "react-router-dom";

import toast from "react-simple-toasts";

const TeamAdmin = () => {
  const history = useHistory();

  const [about, setAbout] = useState({
    title: "",
    description: "",
    image: "",
  });
  const onload = async () => {
    const { data } = await fetchAbout();
    const { title, description, image } = data[0];
    setAbout({
      title,
      description,
      image,
    });
  };
  useEffect(() => {
    onload();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("working on it");
    updateAboutPost(about).then(() => {
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
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          About preview
        </button>
      </p>
      <div class="collapse preview" id="collapseExample">
        <About />
      </div>
      <form
        autoComplete="off"
        noValidate
        method="patch"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="custom-file">
            <FileBase
              type="file"
              multipla={false}
              onDone={({ base64 }) => setAbout({ ...about, image: base64 })}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="About Title"
            aria-label="About Title"
            value={about.title}
            onChange={(e) => {
              setAbout({ ...about, title: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            value={about.description}
            onChange={(e) => {
              setAbout({ ...about, description: e.target.value });
            }}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-primary submit_button">
          Set
        </button>
      </form>
    </div>
  );
};

export default TeamAdmin;
