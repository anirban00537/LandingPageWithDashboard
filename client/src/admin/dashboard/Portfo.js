import React, { useState } from "react";
import axios from "axios";

const Portfo = () => {
  const [newUser, setNewAuthor] = useState({
    title: "",
    photo: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("birthdate", newUser.birthdate);
    formData.append("name", newUser.name);

    axios
      .post("http://localhost:5000/portfolio", formData)
      .then((res) => {})
      .catch((err) => {});
  };
  const handleChange = (e) => {
    setNewAuthor({ ...newUser, name: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="title"
        value={newUser.name}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default Portfo;
