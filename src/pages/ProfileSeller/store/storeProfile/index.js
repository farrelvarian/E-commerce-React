/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import "./style.css";
// import Profile from "../../../../assets/image/logo/profileBig.svg";
import { BASE_URL } from "../../../../configs/configs";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const ProfileSeller = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    phone: 0,
    gender: "",
    dateOfBirth: "",
    role: "",
    store_name: "",
    store_description: "",
    status: "",
    updateAt: new Date(),
  });
  const [imageUser, setImage] = useState("");
  let imagePreview = "";

  if (!imageUser) {
    imagePreview = users.image;
  } else {
    imagePreview = URL.createObjectURL(imageUser[0]);
  }
  useEffect(() => {
    axios
      .get(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const [result] = response.data.data;
        setUsers(result);
      })
      .catch(console.error());
  }, []);
  const handleForm = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setImage(e.target.files);
  };
  const updateUserByid = () => {
    dispatch(updateUser(id, users, imageUser[0]));
  };
  const logoutSeller = () => {
    const isAuth = false;
    const role = localStorage.getItem("role");
    localStorage.setItem("isAuth", isAuth);
    history.push(`/login/${role}`);
  };

  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show1="show" navstore="black" navstoreprofile="black" />
        <section>
          <div className="section-container-storeProfile">
            <h1 className="section-title">My Profile Store</h1>
            <h2 className="section-desc">Manage your profile information</h2>
            <hr size="1px" />
            <div className="section-wrapper-storeProfile">
              <div>
                <div className="section-name-storeProfile">
                  <h2 className="text-section-storeProfile">Store name</h2>
                  <input
                    className="input-storeProfile name-storeProfile"
                    name="store_name"
                    type="name"
                    placeholder="name"
                    value={users.store_name}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-storeProfile">
                  <h2 className="text-section-storeProfile">Email</h2>
                  <input
                    className="input-storeProfile email-storeProfile"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={users.email}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-storeProfile">
                  <h2 className="text-section-storeProfile">Phone number</h2>
                  <input
                    className="input-storeProfile phone-storeProfile"
                    name="phone"
                    type="number"
                    placeholder="phone number"
                    value={users.phone}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-storeProfile">
                  <h2 className="text-section-storeProfile">
                    Store description
                  </h2>
                  <input
                    className="input-storeProfile description-storeProfile"
                    name="store_description"
                    type="description"
                    placeholder=""
                    value={users.store_description}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="vertical-line"></div>
              <div>
                <label htmlFor="select-image">
                  <img
                    className="profile-main"
                    src={imagePreview}
                    alt="profile"
                  />
                </label>
                <input
                  type="file"
                  className="select-image-btn"
                  id="select-image"
                  onChange={(e) => onFileChange(e)}
                />
                <label htmlFor="select-image">
                  <div className="btn btn-select-image">Select Image</div>
                </label>
              </div>
            </div>
            <button
              type="button "
              className="btn btn-save-storeProfile"
              onClick={updateUserByid}
            >
              Save
            </button>
          </div>
          <button
            type="button "
            className="btn btn-logout-storeProfile"
            onClick={logoutSeller}
          >
            Log Out
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
