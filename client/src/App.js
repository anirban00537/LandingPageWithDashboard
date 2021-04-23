import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./Service/Service";
import Stage from "./Stage/Stage";
import Tagline from "./TagLine/Tagline";
import Team from "./Team/Team";
import Zoom from "react-reveal/Zoom";
import Homeadmin from "./admin/Homeadmin";
import CustomerContact from "./admin/dashboard/CustomerContact";
import Login from "./admin/Login";
import { fetchTagline } from "./Api";
import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Loader";
import PortfolioAdmin from "./admin/dashboard/PortfolioAdmin";
import Fade from "react-reveal/Fade";
function Home() {
  const [load, setLoad] = useState(0);

  useEffect(async () => {
    const boole = await fetchTagline();
    if (boole.data[0].title) {
      setLoad(1);
    }
  });

  return load === 0 ? (
    <Loader />
  ) : (
    <div className="">
      <Navbar />
      <Tagline />
      <Intro />
      {/* <Zoom>
        <Stage />
      </Zoom> */}
      <Service />
      <Details />
      <Team />
      <Fade>
        <Portfolio />
      </Fade>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Homeadmin} />
      <Route path="/portfolio" component={PortfolioAdmin} />
      <Route path="/customer" component={CustomerContact} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
