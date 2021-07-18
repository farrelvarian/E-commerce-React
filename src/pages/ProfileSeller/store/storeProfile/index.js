import React from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import "./style.css";
import Profile from "../../../../assets/image/logo/profileBig.svg";

const ProfileSeller = (props) => {
  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show1="show"/>
        <section>
          <div className="section-container">
            <h1 className="section-title">My Profile Store</h1>
            <h2 className="section-desc">Manage your profile information</h2>
            <hr size="1px" />
            <div className="section-wrapper">
              <div>
                <div className="section-name">
                  <h2 className="text-section">Store name</h2>
                  <input
                    className="input name"
                    name="name"
                    type="name"
                    placeholder="name"
                    autocomplete="off"
                  />
                </div>
                <div className="section-name">
                  <h2 className="text-section">Email</h2>
                  <input
                    className="input email"
                    name="email"
                    type="email"
                    placeholder="email"
                    autocomplete="off"
                  />
                </div>
                <div className="section-name">
                  <h2 className="text-section">Phone number</h2>
                  <input
                    className="input phone"
                    name="phone"
                    type="number"
                    placeholder="phone number"
                    autocomplete="off"
                  />
                </div>
                <div className="section-name">
                  <h2 className="text-section">Store description</h2>
                  <input
                    className="input description"
                    name="description"
                    type="description"
                    placeholder=""
                    autocomplete="off"
                  />
                </div>
                <button type="button " className="btn btn-save">
                  Save
                </button>
              </div>
              <div className="vertical-line"></div>
              <div>
                <img className="profile-main" src={Profile} alt="profile" />
                <button type="button " className="btn btn-select-image">
                  Select image
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
