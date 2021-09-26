import React, { useState}from "react";
import style from "./navbar.module.css";
import Logo from "../../base/Logo";
import { ReactComponent as SearchImage } from "../../../assets/image/logo/search.svg";
import { ReactComponent as FilterImage } from "../../../assets/image/logo/filter.svg";
import { ReactComponent as CartImage } from "../../../assets/image/logo/cart.svg";
import { ReactComponent as NotifImage } from "../../../assets/image/logo/bell.svg";
import { ReactComponent as MailImage } from "../../../assets/image/logo/mail.svg";
import NoImage from "../../../assets/image/logo/user.svg";
// import ProfileImage from "../../../assets/image/logo/profile.png";
import "./style.css";
import { useHistory,Link } from "react-router-dom";

const NavbarAfter = (props) => {
  const image = localStorage.getItem("image");
  const [search, setSearch] = useState("");

  let location = useHistory();

  const handleForm = (e) => {
    setSearch(e.target.value);
  };

  
  const searchProduct = () => {
    location.push(`/search?search=${search}`);
    location.go(0)
  };
   let linkProfile = "";
   const role = localStorage.getItem("role");
   if (role==="CUSTOMMER") {linkProfile = "/profile/custommer/myaccount";
   }else if(role==="SELLER"){linkProfile = "/profile/seller/storeprofile";}
  return (
    <div>
      <nav className={style.navbar_container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.search_filter}>
          <div className={`${style.input_group} ${style.with_icon}`}>
            <input
              className={style.form_control_inputan}
              name="suche"
              type="search"
              placeholder="Search"
              autocomplete="off"
              onChange={(e) => handleForm(e)}
            />
            <SearchImage className={style.fas} onClick={searchProduct} />
          </div>
          <button
            className={style.btnFilter}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <FilterImage />
          </button>
        </div>
        <div className={style.cart_notif_mail_profile}>
          <div className={style.cart}>
            <Link to="/mybag">
              <CartImage />
            </Link>
          </div>
          <div className={style.notification}>
            <NotifImage />
          </div>
          <div className={style.mail}>
            <MailImage />
          </div>
          <div className={style.profile}>
            <Link to={linkProfile}>
              <img
                className={style.profile_image}
                src={image === "null" ? NoImage : image}
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- Modal filter --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content filter">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Filter
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="color">
                <h1 className="modal-content-title">Colors</h1>
                <div className="wrapper color">
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="black"
                  ></input>
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="white"
                  ></input>
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="maroon"
                  ></input>
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="grey"
                  ></input>
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="mustard"
                  ></input>
                  <input
                    type="checkbox"
                    className="checkColor"
                    id="blue"
                  ></input>
                </div>
              </div>
              <hr size="1px" width="100%" />
              <div className="sizes">
                <h1 className="modal-content-title">Sizes</h1>
                <div className="wrapper sizes">
                  <div>
                    <input
                      type="checkbox"
                      className="checkSizes"
                      name=""
                      id="sizes1"
                    />
                    <label htmlFor="sizes1">
                      <span>XS</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkSizes"
                      name=""
                      id="sizes2"
                    />
                    <label htmlFor="sizes2">
                      <span>S</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkSizes"
                      name=""
                      id="sizes3"
                    />
                    <label htmlFor="sizes3">
                      <span>M</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkSizes"
                      name=""
                      id="sizes4"
                    />
                    <label htmlFor="sizes4">
                      <span>L</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkSizes"
                      name=""
                      id="sizes5"
                    />
                    <label htmlFor="sizes5">
                      <span>XL</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr size="1px" width="100%" />
              <div className="category">
                <h1 className="modal-content-title">Category</h1>
                <div className="wrapper category">
                  <div>
                    <input
                      type="checkbox"
                      className="checkCtgr"
                      name=""
                      id="ctgr1"
                    />
                    <label htmlFor="ctgr1">
                      <span>All</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkCtgr"
                      name=""
                      id="ctgr2"
                    />
                    <label htmlFor="ctgr2">
                      <span>Women</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkCtgr"
                      name=""
                      id="ctgr3"
                    />
                    <label htmlFor="ctgr3">
                      <span>Men</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkCtgr"
                      name=""
                      id="ctgr4"
                    />
                    <label htmlFor="ctgr4">
                      <span>Boys</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkCtgr"
                      name=""
                      id="ctgr5"
                    />
                    <label htmlFor="ctgr5">
                      <span>Girls</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr size="1px" width="100%" />
              <div className="brand">
                <h1 className="modal-content-title">Brand</h1>
                <div className="wrapper category">
                  <select className="brand-select" id="brand">
                    <option selected>
                      adidas Originals, Jack & Jones, s.Oliver
                    </option>
                    <option value="1 ">Adidas Originals</option>
                    <option value="2 ">Jack & Jones</option>
                    <option value="3 ">S. Oliver</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer ">
              <button
                type="button "
                className="btn btn-discard "
                data-dismiss="modal "
              >
                Discard
              </button>
              <button type="button " className="btn btn-apply ">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAfter;
