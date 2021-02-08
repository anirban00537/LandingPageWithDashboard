import { useState, useEffect } from "react";
import { fetchContact, updateContactPost } from "../../Api/index";
import toast from "react-simple-toasts";
import { useHistory } from "react-router-dom";

const ContactAdmin = () => {
  const history = useHistory();

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
  };
  useEffect(() => {
    onload();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("working on it");
    updateContactPost(contactData).then(() => {
      history.push("/");
      history.push("/admin");
      return toast("Successfully Saved");
    });
  };
  return (
    <div className="tagline-part container">
      <h3>Contact</h3>
      <form
        autoComplete="off"
        noValidate
        method="patch"
        onSubmit={handleSubmit}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            aria-label="title"
            value={contactData.address}
            onChange={(e) => {
              setContactData({ ...contactData, address: e.target.value });
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            value={contactData.phone1}
            onChange={(e) => {
              setContactData({ ...contactData, phone1: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Another Phone Number"
            aria-label="Another Phone Number"
            value={contactData.phone2}
            onChange={(e) => {
              setContactData({ ...contactData, phone2: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            value={contactData.email}
            onChange={(e) => {
              setContactData({ ...contactData, email: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Copyright Text"
            aria-label="Copyright Text"
            value={contactData.copyright}
            onChange={(e) => {
              setContactData({ ...contactData, copyright: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            placeholder="Few Words About KOTHON
"
            aria-label="With textarea"
            value={contactData.brainbox}
            onChange={(e) => {
              setContactData({ ...contactData, brainbox: e.target.value });
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

export default ContactAdmin;
