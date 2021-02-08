import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchPortfolio } from "../Api/index";
const Portfolio = () => {
  const history = useHistory();
  const [load, setLoad] = useState(0);

  const [Portfol, setPortfol] = useState([]);

  // function checkuser() {
  //   const token = localStorage.getItem("jwtauth");
  //   if (!token) {
  //     history.push("/login");
  //   }
  // }
  const onload = async () => {
    const { data } = await fetchPortfolio();
    setPortfol(data);
    console.log(Portfol, "Portfol");
  };
  useEffect(async () => {
    const boole = await fetchPortfolio();
    if (boole.data) {
      setLoad(1);
    }
    // checkuser();
    onload();
  }, []);

  return (
    <div className="container portfolio_main">
      <div id="projects" className="filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">SERVICE DETAILS</div>
              <h2>Details About Our Services</h2>
            </div>{" "}
          </div>{" "}
          <div className="row">
            <div className="col-lg-12">
              {Portfol.map((p) => (
                <div className="container">
                  <div class="row main_row">
                    <div class="col-6 image_Port ">
                      <img src={p.photo} className="image_Port" />
                    </div>
                    <div class="col des_port">
                      <h4>{p.title}</h4>
                      <p>{p.description}</p>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
