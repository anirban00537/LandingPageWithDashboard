import React from "react";
import Tagline from "../../TagLine/Tagline";
import FileBase from "react-file-base64";
import { useState, useEffect } from "react";
import toast from "react-simple-toasts";
import { useHistory } from "react-router-dom";

import { fetchTagline, updatePost } from "../../Api/index";

const TaglineAdmin = () => {
  const history = useHistory();

  const [taglineData, setTaglineData] = useState({
    title: "",
    tagId: 1234,
    changableText: "",
    description: "",
    image: "",
  });

  const onload = async () => {
    const { data } = await fetchTagline();

    const { title, tagId, changableText, description, image } = data[0];
    setTaglineData({
      title: title,
      tagId: tagId,
      changableText: changableText,
      description: description,
      image: image,
    });
  };

  useEffect(() => {
    onload();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("working on it");
    updatePost(taglineData).then(() => {
      history.push("/");
      history.push("/admin");
      return toast("Successfully Saved");
    });
  };

  return (
    <div className="tagline-part container">
      <p>
        <button
          class="btn btn-primary "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Tagline preview
        </button>
      </p>
      <div class="collapse preview" id="collapseExample">
        <Tagline />
      </div>

      <form
        autoComplete="off"
        noValidate
        method="patch"
        onSubmit={handleSubmit}
      >
        <div className="custom-file">
          <FileBase
            type="file"
            multipla={false}
            onDone={({ base64 }) =>
              setTaglineData({ ...taglineData, image: base64 })
            }
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="tagline"
            aria-label="tagline"
            value={taglineData.title}
            onChange={(e) => {
              setTaglineData({ ...taglineData, title: e.target.value });
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Changable words(use comma , between words)"
            aria-label="Changable words"
            value={taglineData.changableText}
            onChange={(e) => {
              setTaglineData({ ...taglineData, changableText: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            value={taglineData.description}
            onChange={(e) => {
              setTaglineData({ ...taglineData, description: e.target.value });
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

export default TaglineAdmin;
