import { useState, useEffect } from "react";
import { fetchContact, createContact } from "../Api/index";
import { useHistory } from "react-router-dom";
const Footer = () => {
  const [contactData, setContactData] = useState({
    contactId: 1234,
    address: "",
    phone1: "",
    phone2: "",
    email: "",
    copyright: "",
    brainbox: "",
  });
  const history = useHistory();
  const onload = async () => {
    const { data } = await fetchContact();

    if (data.length === 0) {
      createContact(contactData);
    } else {
      const { address, phone1, phone2, email, copyright, brainbox } = data[0];
      setContactData({
        contactId: 1234,
        address: address,
        phone1: phone1,
        phone2: phone2,
        email: email,
        copyright: copyright,
        brainbox: brainbox,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-container about">
                <h4>Few Words About KOTHON</h4>
                <p className="white">{contactData.brainbox}</p>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            {/* end of col */}
            <div className="col-md-2">
              <div className="text-container">
                <h4>Contact</h4>
                <ul className="list-unstyled li-space-lg">
                  <li>
                    <a className="white" href="#your-link">
                      {contactData.phone1}
                    </a>
                  </li>
                  <li>
                    <a className="white" href="#your-link">
                      {contactData.phone2}
                    </a>
                  </li>
                  <li className="media">
                    <a className="white" href="#your-link">
                      {contactData.email}
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-md-2">
              <div className="text-container">
                <h4
                  onDoubleClick={() => {
                    history.push("/admin");
                  }}
                >
                  ---
                </h4>
                <ul className="list-unstyled li-space-lg white">
                  <li>
                    <a className="white" href="kothon.app">
                      kothon.app
                    </a>
                  </li>
                  <li>
                    <a className="white" href="terms-conditions.html">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className="white" href="privacy-policy.html">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer */}
      {/* end of footer */}
      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">{contactData.copyright}</p>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* enf of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of copyright */}
      {/* end of copyright */}
    </div>
  );
};

export default Footer;
