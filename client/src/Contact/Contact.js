import { useState, useEffect } from "react";
import toast from "react-simple-toasts";

import {
  fetchContact,
  createContact,
  createCustomerContact,
} from "../Api/index";
const Contact = () => {
  const [cc, setCC] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactData, setContactData] = useState({
    contactId: 1234,
    address: "",
    phone1: "",
    phone2: "",
    email: "",
    copyright: "",
    brainbox: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    createCustomerContact(cc).then(() => {
      setCC({
        name: "",
        email: "",
        message: "",
      });
      return toast("Successfully Sunmitted");
    });
  };

  return (
    <div>
      <div id="contact" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">CONTACT</div>
                <h2>Get In Touch Using The Form</h2>

                <ul className="list-unstyled li-space-lg">
                  <li className="address">
                    <i className="fas fa-map-marker-alt" />
                    {contactData.address}
                  </li>
                  <li>
                    <i className="fas fa-phone" />
                    <a href="tel:003024630820">{contactData.phone1}</a>
                  </li>
                  <li>
                    <i className="fas fa-phone" />
                    <a href="tel:003024630820">{contactData.phone2}</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    <a href="mailto:office@kothon.com">{contactData.email}</a>
                  </li>
                </ul>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-6">
              {/* Contact Form */}
              <form
                id="contactForm"
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="cname"
                    required
                    value={cc.name}
                    onChange={(e) => {
                      setCC({ ...cc, name: e.target.value });
                    }}
                  />
                  <label className="label-control" htmlFor="cname">
                    Name
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="cemail"
                    required
                    value={cc.email}
                    onChange={(e) => {
                      setCC({ ...cc, email: e.target.value });
                    }}
                  />
                  <label className="label-control" htmlFor="cemail">
                    Email
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control-textarea"
                    id="cmessage"
                    required
                    value={cc.message}
                    onChange={(e) => {
                      setCC({ ...cc, message: e.target.value });
                    }}
                  />
                  <label className="label-control" htmlFor="cmessage">
                    Your message
                  </label>
                  <div className="help-block with-errors" />
                </div>

                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    SUBMIT MESSAGE
                  </button>
                </div>
              </form>
              {/* end of contact form */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
    </div>
  );
};

export default Contact;
