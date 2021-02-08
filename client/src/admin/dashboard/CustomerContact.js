import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

import { fetchCustomerContact } from "../../Api/index";
const CustomerContact = () => {
  const history = useHistory();
  const [cc, setCC] = useState([]);
  let len = cc.length;
  const onload = async () => {
    const { data } = await fetchCustomerContact();
    setCC(data);
  };
  function checkuser() {
    const user = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("jwtauth");
    if (!token) {
      history.push("/login");
    }
  }
  useEffect(() => {
    checkuser();
    onload();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        {cc.map((c) => (
          <div class=" card">
            <div class="card-header">{cc.length + 1 - len--}</div>
            <div class="card-body">
              <h5 class="card-title">Name: {c.name}</h5>
              <p class="card-text">Email: {c.email}</p>
              <p class="card-text">Message: {c.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerContact;
