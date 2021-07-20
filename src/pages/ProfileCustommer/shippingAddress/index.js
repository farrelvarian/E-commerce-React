import React from "react";
import Navbar from "../../../components/module/NavbarAfterLogin";
import Sidebar from "../../../components/module/SidebarCustommer";
import "./style.css";
import Profile from "../../../assets/image/logo/profileBig.svg";

const ProfileCustommer = (props) => {
  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show1="#9B9B9B" show3="#9B9B9B" />
        <section>
          <div className="section-container-shippingAddress">
            <h1 className="section-title-shippingAddress">
              Choose another address
            </h1>
            <h2 className="section-desc-shippingAddress">
              Manage your shipping address
            </h2>
            <hr size="1px" />
            <div className="wrapper-btn-address-shippingAddress">
              <button
                className="btn-add-new-shippingAddress"
                data-toggle="modal"
                data-target="#newAddressModal"
              >
                Add new address
              </button>
              <div className="wrapper-address-shippingAddress">
                <h2 className="text-name-address-shippingAddress">
                  Andreas Jane
                </h2>
                <h2 className="text-detail-address-shippingAddress">
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                  16] Sokaraja, Kab. Banyumas, 53181
                </h2>
                <button className="btn-change-address-shippingAddress">
                  Change address
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Modal New Shipping Address  --> */}
      <div
        className="modal fade"
        id="newAddressModal"
        tabindex="-1"
        aria-labelledby="newAddressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content new-address">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body new-address">
              <h1 className="modal-title new-address">Add new address</h1>
              <div className="container">
                <div>
                  <h2 className="name-address">
                    Save address as (ex : home address, office address)
                  </h2>
                  <input
                    className="input-name-address"
                    type="text"
                    placeholder="Rumah"
                  />
                </div>
                <div className="input-wrapper-modal-checkout">
                  <div>
                    <div>
                      <h2 className="text-input">Recipient’s name</h2>
                      <input className="input-detail-address" type="text" />
                    </div>
                    <div>
                      <h2 className="text-input">address</h2>
                      <input className="input-detail-address" type="text" />
                    </div>
                    <div>
                      <h2 className="text-input">City or Subdistrict</h2>
                      <input className="input-detail-address" type="text" />
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="primary-address"
                        name="primary-address"
                        value="Primary"
                      />
                      <label
                        className="text-primary-address"
                        for="primary-address"
                      >
                        {" "}
                        Make it the primary address
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="text-input">
                        Recipient's telephone number
                      </h2>
                      <input className="input-detail-address" type="text" />
                    </div>
                    <div>
                      <h2 className="text-input">Postal code</h2>
                      <input className="input-detail-address" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer new-shipping-address">
              <button
                type="button"
                className="btn btn-cancel"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-save-modal">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCustommer;
