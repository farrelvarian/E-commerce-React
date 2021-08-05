/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/module/NavbarAfterLogin";
import Sidebar from "../../../components/module/SidebarCustommer";
import "./style.css";
// import Profile from "../../../assets/image/logo/profileBig.svg";
import { BASE_URL } from "../../../configs/configs";
import { useDispatch } from "react-redux";
import { updateUser} from "../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const ProfileCustommer = (props) => {
    const dispatch = useDispatch();
    const history = useHistory()
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
   const logoutCustommer = () => {
    const isAuth = false;
    const role = localStorage.getItem("role");
    localStorage.setItem("isAuth", isAuth);
    history.push(`/login/${role}`);
   };
  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show2="#9B9B9B" show3="#9B9B9B" />
        <section>
          <div className="section-container-myaccount">
            <h1 className="section-title">My Profile</h1>
            <h2 className="section-desc">Manage your profile information</h2>
            <hr size="1px" />
            <div className="section-wrapper-myaccount">
              <div>
                <div className="section-name-myaccount">
                  <h2 className="text-section-myaccount">Name</h2>
                  <input
                    className="input-myaccount name-myaccount"
                    name="name"
                    type="name"
                    placeholder="name"
                    value={users.name}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-myaccount">
                  <h2 className="text-section-myaccount">Email</h2>
                  <input
                    className="input-myaccount email-myaccount"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={users.email}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-myaccount">
                  <h2 className="text-section-myaccount">Phone number</h2>
                  <input
                    className="input-myaccount phone-myaccount"
                    name="phone"
                    type="number"
                    placeholder="phone number"
                    value={users.phone}
                    onChange={(e) => handleForm(e)}
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-myaccount">
                  <h2 className="text-section-myaccount">Gender</h2>
                  <div className="input-radio-button">
                    <input
                      className="radio gender"
                      type="radio"
                      name="gender"
                      value="MALE"
                      onChange={(e) => handleForm(e)}
                    />
                    <label for="gender" className="text-radio-gender">
                      Laki-Laki
                    </label>
                    <input
                      className="radio gender"
                      type="radio"
                      name="gender"
                      value="FEMALE"
                      onChange={(e) => handleForm(e)}
                    />
                    <label for="gender" className="text-radio-gender">
                      Perempuan
                    </label>
                  </div>
                </div>
                <div className="section-name-myaccount">
                  <h2 className="text-section-myaccount">Date of birth</h2>
                  <div className="select-input-wrapper">
                    <select className="select-input" id="date" name="date">
                      <option value="">Date</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select className="select-input" id="month" name="month">
                      <option value="">Month</option>
                      <option value="1">Januari</option>
                      <option value="2">Februari</option>
                      <option value="3">Maret</option>
                      <option value="4">April</option>
                      <option value="5">Mei</option>
                      <option value="6">Juni</option>
                      <option value="7">Juli</option>
                      <option value="8">Agustus</option>
                      <option value="9">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </select>
                    <select className="select-input" id="year" name="year">
                      <option value="">Year</option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
                      <option value="4">2018</option>
                      <option value="5">2017</option>
                      <option value="6">2016</option>
                      <option value="7">2015</option>
                      <option value="8">2014</option>
                      <option value="9">2013</option>
                      <option value="10">2012</option>
                      <option value="11">2011</option>
                      <option value="12">2010</option>
                      <option value="13">2009</option>
                      <option value="14">2008</option>
                      <option value="15">2007</option>
                      <option value="16">2006</option>
                      <option value="17">2005</option>
                      <option value="18">2004</option>
                      <option value="19">2003</option>
                      <option value="20">2002</option>
                      <option value="21">2001</option>
                      <option value="22">2000</option>
                      <option value="23">1999</option>
                      <option value="24">1998</option>
                      <option value="25">1997</option>
                      <option value="26">1996</option>
                      <option value="27">1995</option>
                      <option value="28">1994</option>
                      <option value="29">1993</option>
                      <option value="30">1992</option>
                      <option value="31">1991</option>
                      <option value="32">1990</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="vertical-line"></div>
              <div>
                <img
                  className="profile-main"
                  src={imagePreview}
                  alt="profile"
                />
                <input
                  type="file"
                  className="btn btn-select-image"
                  onChange={(e) => onFileChange(e)}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-save-myaccount"
              onClick={updateUserByid}
            >
              Save
            </button>
          </div>
          <button
            type="button"
            className="btn btn-logout-myaccount"
            onClick={logoutCustommer}
          >
            Log Out
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileCustommer;
