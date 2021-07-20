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
                    name="name"
                    type="name"
                    placeholder="name"
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
                    autocomplete="off"
                  />
                </div>
                <div className="section-name-storeProfile">
                  <h2 className="text-section-storeProfile">
                    Store description
                  </h2>
                  <input
                    className="input-storeProfile description-storeProfile"
                    name="description"
                    type="description"
                    placeholder=""
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="vertical-line"></div>
              <div>
                <img className="profile-main" src={Profile} alt="profile" />
                <button type="button " className="btn btn-select-image">
                  Select image
                </button>
              </div>
            </div>
            <button type="button " className="btn btn-save-storeProfile">
              Save
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
