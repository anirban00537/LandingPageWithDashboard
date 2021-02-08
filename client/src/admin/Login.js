import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signin } from "../Api";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tdata = await signin(auth);
    const { token, user } = tdata.data;
    localStorage.setItem("jwtauth", token);
    localStorage.setItem("users", JSON.stringify(user));
    history.push("/admin");
  };
  return (
    <div className="container container_login">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
          value={auth.email}
          onChange={(e) => {
            setAuth({ ...auth, email: e.target.value });
          }}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          value={auth.password}
          onChange={(e) => {
            setAuth({ ...auth, password: e.target.value });
          }}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
