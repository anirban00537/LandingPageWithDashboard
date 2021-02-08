import { useState, useEffect } from "react";
import TaglineAdmin from "./dashboard/TaglineAdmin";
import Navbar from "./dashboard/Navbar";
import IntroAdmin from "./dashboard/IntroAdmin";
import StageAdmin from "./dashboard/StageAdmin";
import ServiceAdmin from "./dashboard/ServiceAdmin";
import DetailAdmin from "./dashboard/DetailAdmin";
import TeamAdmin from "./dashboard/TeamAdmin";
import AboutAdmin from "./dashboard/AboutAdmin";
import ContactAdmin from "./dashboard/ContactAdmin";
import { useHistory } from "react-router-dom";
import { fetchTagline } from "../Api/index";
import Loader from "../Loader";
const Homeadmin = () => {
  const history = useHistory();
  const [load, setLoad] = useState(0);
  function checkuser() {
    const user = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("jwtauth");
    if (!token) {
      history.push("/login");
    }
  }
  useEffect(async () => {
    checkuser();
    const boole = await fetchTagline();
    if (boole.data[0].title) {
      setLoad(1);
    }
  }, []);

  return load === 0 ? (
    <Loader />
  ) : (
    <div className="homeAdmin">
      <Navbar />
      <TaglineAdmin />
      <IntroAdmin />
      {/* <StageAdmin /> */}
      <ServiceAdmin />
      <DetailAdmin />
      <TeamAdmin />
      <AboutAdmin />
      <ContactAdmin />
    </div>
  );
};

export default Homeadmin;
