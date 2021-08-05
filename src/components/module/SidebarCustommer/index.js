import React from "react";
import "./sidebarCustommer.css";
// import ProfileSeller from "../../../assets/image/logo/profileBig.svg";
import LogoPencil from "../../../assets/image/logo/pencil.svg";
import MyAccount from "../../../assets/image/logo/myAccount.png";
import ShoppingAddress from "../../../assets/image/logo/shoppingAddress.png";
import MyOrder from "../../../assets/image/logo/myOrder.png";
import { Link } from "react-router-dom";

const sidebarCustommer = (props) => {
 const name = localStorage.getItem("name");
 const image = localStorage.getItem("image");
    return (
      <div className="sidebar-container">
        <div class="sidebar-image">
          <img className="sidebar-profile-custommer" src={image} alt="profile" />
          <div>
            <h2 className="sidebar-profile-name">{name}</h2>
            <h3 className="ubah-profile-wrapper">
              <img className="logo-pencil" alt="edit" src={LogoPencil} />
              Ubah profile
            </h3>
          </div>
        </div>
        <div className="sidebar-custommer-wrapper">
          <Link to="/profile/custommer/myaccount">
            <div className="sidebar-menu-wrapper">
              <div className="sidebar-menu-custommer">
                <img
                  className="sidebar-logo-custommer"
                  alt="MY Account"
                  src={MyAccount}
                />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: props.show1 }}
                >
                  My Account
                </h3>
              </div>
            </div>
          </Link>
          <Link to="/profile/custommer/shippingaddress">
            <div className="sidebar-menu-wrapper">
              <div className="sidebar-menu-custommer">
                <img
                  className="sidebar-logo-custommer"
                  alt="shoppingaddress"
                  src={ShoppingAddress}
                />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: props.show2 }}
                >
                  Shipping Address
                </h3>
              </div>
            </div>{" "}
          </Link>
          <Link to="/profile/custommer/myorder">
            <div className="sidebar-menu-wrapper">
              <div className="sidebar-menu-custommer">
                <img
                  className="sidebar-logo-custommer"
                  alt="myorder"
                  src={MyOrder}
                />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: props.show3 }}
                >
                  My Order
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }


export default sidebarCustommer;
