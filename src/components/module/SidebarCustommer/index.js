import React, { Component } from "react";
import "./sidebarCustommer.css";
import ProfileSeller from "../../../assets/image/logo/profileBig.svg";
import LogoPencil from "../../../assets/image/logo/pencil.svg";
import MyAccount from "../../../assets/image/logo/myAccount.png";
import ShoppingAddress from "../../../assets/image/logo/shoppingAddress.png";
import MyOrder from "../../../assets/image/logo/myOrder.png";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div class="sidebar-image">
          <img className="profile-seller" src={ProfileSeller} alt="profile" />
          <div>
            <h2 className="sidebar-profile-name">Johanes Mikael</h2>
            <h3 className="ubah-profile-wrapper">
              <img className="logo-pencil" src={LogoPencil} />
              Ubah profile
            </h3>
          </div>
        </div>
        <div className="sidebar-custommer-wrapper">
          <Link to="/profile/custommer/myaccount">
            <a
              href="../custommerProfile-myAccount/index.html"
              className="sidebar-menu-wrapper"
            >
              <div className="sidebar-menu-custommer">
                <img className="sidebar-logo-custommer" src={MyAccount} />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: this.props.show1 }}
                >
                  My Account
                </h3>
              </div>
            </a>
          </Link>
          <Link to="/profile/custommer/shippingaddress">
            <a
              href="../custommerProfile-shippingAddress/index.html"
              className="sidebar-menu-wrapper"
            >
              <div className="sidebar-menu-custommer">
                <img className="sidebar-logo-custommer" src={ShoppingAddress} />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: this.props.show2 }}
                >
                  Shipping Address
                </h3>
              </div>
            </a>{" "}
          </Link>
          <Link to="/profile/custommer/myorder">
            <a
              href="../custommerProfile-myOrder/index.html"
              className="sidebar-menu-wrapper"
            >
              <div className="sidebar-menu-custommer">
                <img className="sidebar-logo-custommer" src={MyOrder} />
                <h3
                  className="sidebar-name-custommer"
                  style={{ color: this.props.show3 }}
                >
                  My Order
                </h3>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
