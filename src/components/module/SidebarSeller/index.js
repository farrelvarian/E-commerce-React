import React, { Component } from "react";
import "./sidebarSeller.css";
import ProfileSeller from "../../../assets/image/logo/profileBig.svg";
import LogoPencil from "../../../assets/image/logo/pencil.svg";
import Store from "../../../assets/image/logo/store.png";
import Product from "../../../assets/image/logo/product.png";
import Order from "../../../assets/image/logo/order.png";
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
              <img className="logo-pencil" alt="Ubah Profile" src={LogoPencil} />
              Ubah profile
            </h3>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="card card-sidebar">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{ color: this.props.navstore }}
                >
                  <img className="sidebar-logo" alt="store" src={Store} />
                  Store
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className={`collapse ${this.props.show1}`}
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <Link to="/profile/seller/storeprofile">
                <div
                  className="card-body sidebar"
                  style={{ color: this.props.navstoreprofile }}
                >
                  Store profile
                </div>
              </Link>
            </div>
          </div>
          <div className="card card-sidebar">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                  style={{ color: this.props.navproduct }}
                >
                  <img className="sidebar-logo" alt="product" src={Product} />
                  Product
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${this.props.show2}`}
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <Link to="/profile/seller/myproduct">
                <div
                  className="card-body sidebar"
                  style={{ color: this.props.navmyproducts }}
                >
                  My products
                </div>
              </Link>
              <Link to="/profile/seller/sellingproduct">
                <div
                  className="card-body sidebar"
                  style={{ color: this.props.navsellingproducts }}
                >
                  Selling products
                </div>
              </Link>
            </div>
          </div>
          <div className="card card-sidebar">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                  style={{ color: this.props.navorder }}
                >
                  <img className="sidebar-logo" alt="order" src={Order} />
                  Order
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className={`collapse ${this.props.show3}`}
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
              aria-expanded="true"
            >
              {" "}
              <Link to="/profile/seller/myorder">
                <div
                  className="card-body sidebar"
                  style={{ color: this.props.navmyorder }}
                >
                  My order
                </div>
              </Link>{" "}
              <Link to="/profile/seller/ordercancel">
                <div
                  className="card-body sidebar"
                  style={{ color: this.props.navordercancel }}
                >
                  Order cancel
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
