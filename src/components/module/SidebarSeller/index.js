import React from "react";
import "./sidebarSeller.css";
// import ProfileSeller from "../../../assets/image/logo/profileBig.svg";
import LogoPencil from "../../../assets/image/logo/pencil.svg";
import Store from "../../../assets/image/logo/store.png";
import Product from "../../../assets/image/logo/product.png";
import Order from "../../../assets/image/logo/order.png";
import NoImage from "../../../assets/image/logo/user.svg";
import { Link } from "react-router-dom";

const sidebarSeller = (props) => {
 const name = localStorage.getItem("name");
 const image = localStorage.getItem("image");
    return (
      <div className="sidebar-container">
        <div class="sidebar-image">
          <img className="sidebar-profile-seller" src={image==="null"?NoImage:image} alt="profile" />
          <div>
            <h2 className="sidebar-profile-name">{name}</h2>
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
                  style={{ color: props.navstore }}
                >
                  <img className="sidebar-logo" alt="store" src={Store} />
                  Store
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className={`collapse ${props.show1}`}
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <Link to="/profile/seller/storeprofile">
                <div
                  className="card-body sidebar"
                  style={{ color: props.navstoreprofile }}
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
                  style={{ color: props.navproduct }}
                >
                  <img className="sidebar-logo" alt="product" src={Product} />
                  Product
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${props.show2}`}
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <Link to="/profile/seller/myproduct">
                <div
                  className="card-body sidebar"
                  style={{ color: props.navmyproducts }}
                >
                  My products
                </div>
              </Link>
              <Link to="/profile/seller/sellingproduct">
                <div
                  className="card-body sidebar"
                  style={{ color: props.navsellingproducts }}
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
                  style={{ color: props.navorder }}
                >
                  <img className="sidebar-logo" alt="order" src={Order} />
                  Order
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className={`collapse ${props.show3}`}
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
              aria-expanded="true"
            >
              {" "}
              <Link to="/profile/seller/myorder">
                <div
                  className="card-body sidebar"
                  style={{ color: props.navmyorder }}
                >
                  My order
                </div>
              </Link>{" "}
              <Link to="/profile/seller/ordercancel">
                <div
                  className="card-body sidebar"
                  style={{ color: props.navordercancel }}
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


export default sidebarSeller;
