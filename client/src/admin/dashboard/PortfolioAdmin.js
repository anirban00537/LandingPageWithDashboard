import React from "react";
import Navbar from "./Navbar";
import FileBase from "react-file-base64";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import toast from "react-simple-toasts";

import {
  fetchPortfolio,
  createPortfolio,
  deletePortfolio,
} from "../../Api/index";
import { useState, useEffect } from "react";
import Loader from "../../Loader";

const PortfolioAdmin = () => {
  const history = useHistory();
  const [load, setLoad] = useState(0);
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    photo: "",
    description: "",
  });

  const [Portfol, setPortfol] = useState([]);

  function checkuser() {
    const token = localStorage.getItem("jwtauth");
    if (!token) {
      history.push("/login");
    }
  }
  const onload = async () => {
    const { data } = await fetchPortfolio();
    setPortfol(data);
  };
  const authCheck = async () => {
    const boole = await fetchPortfolio();
    if (boole.data) {
      setLoad(1);
    }
  };
  useEffect(() => {
    authCheck();
    checkuser();
    onload();
  }, [load]);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("working on it");
    createPortfolio(portfolioData).then(() => {
      history.push("/");
      return toast("Successfully Saved");
    });
  };
  return load === 0 ? (
    <Loader />
  ) : (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {Portfol.map((s) => (
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">
                    {s.title}
                  </strong>

                  <p class="card-text mb-auto" key={s._id}>
                    {s.description}
                  </p>

                  <button
                    type="button"
                    method="delete"
                    class="btn btn-danger btn-sm"
                    onClick={() => {
                      deletePortfolio(s._id).then(() => {
                        toast("Deleted");
                        history.push("/");
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <img
                    class="bd-placeholder-img"
                    width="200"
                    height="250"
                    src={s.photo}
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* === */}
        </div>
      </div>
      <div class="container container_bottom">
        <h2>Set Your Projects Here</h2>

        <form
          autoComplete="off"
          noValidate
          method="post"
          onSubmit={handleSubmit}
        >
          <div class="col-sm card port_margin">
            <img src={portfolioData.photo} class="img-responsive" />
            <div class="col-sm pro">
              <FileBase
                type="file"
                multipla={false}
                onDone={({ base64 }) =>
                  setPortfolioData({ ...portfolioData, photo: base64 })
                }
              />
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Titile of your project"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={portfolioData.title}
              onChange={(e) => {
                setPortfolioData({
                  ...portfolioData,
                  title: e.target.value,
                });
              }}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Titile of your project"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={portfolioData.description}
              onChange={(e) => {
                setPortfolioData({
                  ...portfolioData,
                  description: e.target.value,
                });
              }}
            />
          </div>

          <div class="col-sm  button_submit">
            <button
              type="submit"
              class="btn btn-secondary btn-lg button_submit_b"
            >
              Set
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioAdmin;
