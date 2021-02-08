import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { fetchService, deleteService, createSerice } from "../../Api/index";
import toast from "react-simple-toasts";
import { useHistory } from "react-router-dom";

const ServiceAdmin = () => {
  let [service, setService] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const history = useHistory();
  const onload = async () => {
    const { data } = await fetchService();
    setService(data);
  };
  useEffect(() => {
    onload();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("working on it");
    createSerice(postData).then(() => {
      history.push("/");
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
          data-bs-target="#collapseService"
          aria-expanded="false"
          aria-controls="collapseService"
        >
          Service preview
        </button>
      </p>
      <div class="collapse preview" id="collapseService">
        <div class="container">
          {service.length !== 0 ? (
            <div class="row">
              {service.map((s) => (
                <div class="col-sm" key={s._id}>
                  <p>{s.title}</p>

                  <button
                    type="submit"
                    class="btn btn-danger btn-sm"
                    onClick={() => {
                      deleteService(s._id).then(() => {
                        toast("Deleted");
                        history.push("/");
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div class="alert alert-secondary" role="alert">
              No Service Available Add One
            </div>
          )}
        </div>
      </div>
      <form autoComplete="off" method="post" noValidate onSubmit={handleSubmit}>
        <div>
          <div className="custom-file">
            <FileBase
              type="file"
              multipla={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, image: base64 })
              }
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="service name"
            aria-label="service name"
            value={postData.title}
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            value={postData.description}
            onChange={(e) => {
              setPostData({ ...postData, description: e.target.value });
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

export default ServiceAdmin;
