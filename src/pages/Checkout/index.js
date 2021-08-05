import React from "react";
import Navbar from "../../components/module/NavbarAfterLogin";
import "./style.css";
// import ImageProduct from "../../assets/image/image/item.png"
import Gopay from "../../assets/image/payment/gopay.png";
import Mastercard from "../../assets/image/payment/mastercard.png";
import PosIndonesia from "../../assets/image/payment/pos.png";
import CardBox from "../../components/base/CardBox";
import { useSelector } from "react-redux";
const Checkout = (props) => {
   const { product, totalPrice } = useSelector((state) => state.order);
   const summaryPrice=totalPrice+5000
    const name = localStorage.getItem("name");
     const address = localStorage.getItem("address");
  return (
    <div>
      <div className="container-page">
        <Navbar />
        <div className="container content-checkout">
          <div className="container wrapper-checkout">
            <h1 className="title">Checkout</h1>
            <h1 className="detail">Shipping Address</h1>
            <div className="container address">
              <h1 className="text-name">{name}</h1>
              <h2 className="text-address">
               {address}
              </h2>
              <button
                className="btnAddress"
                data-toggle="modal"
                data-target="#shippingModal"
              >
                Choose another address
              </button>
            </div>
            {product.map((item) => (
              <CardBox
                name={item.name}
                brand={item.brand}
                image={item.image1}
                price={item.price}
                type="checkout"
              />
            ))}
          </div>
          <div className="container shopping-checkout">
            <h1 className="shopping-summary">Shopping summary</h1>
            <h1 className="text-order">
              Order<span className="text-price-order">Rp. {totalPrice}</span>
            </h1>
            <h1 className="text-delivery">
              Delivery<span className="text-price-delivery">Rp. 5000</span>
            </h1>
            <hr size="1px" width="100%" />
            <h1 className="shopping-summary">
              Shopping summary
              <span className="text-price-summary">Rp. {summaryPrice}</span>
            </h1>
            <button
              className="btnSelectPayment"
              data-toggle="modal"
              data-target="#paymentModal"
            >
              Select payment
            </button>
          </div>
        </div>

        {/* <!-- Modal Shipping Address  --> */}

        <div
          className="modal fade"
          id="shippingModal"
          tabindex="-1"
          aria-labelledby="shippingModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content shipping-address">
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
              <div className="modal-body shipping-address">
                <h1 className="modal-title shipping-address">
                  Choose another address
                </h1>
                <button
                  className="btn-add-new"
                  data-toggle="modal"
                  data-target="#newAddressModal"
                >
                  {" "}
                  Add new address
                </button>
                <div className="wrapper-address">
                  <h2 className="text-name-address">Andreas Jane</h2>
                  <h2 className="text-detail-address">
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </h2>
                  <button className="btn-change-address">Change address</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal Payment Method  --> */}

        <div
          className="modal fade"
          id="paymentModal"
          tabindex="-1"
          aria-labelledby="paymentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content payment ">
              <div className="modal-header">
                <h5 className="modal-title" id="paymentModalLabel">
                  Payment
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
                <h2 className="text-payment-method">payment method</h2>
                <div className="container payment">
                  <img src={Gopay} alt="gopay" />
                  <input type="radio" name="payment" id="gopay" value="1" />
                </div>
                <div className="container payment">
                  <img src={PosIndonesia} alt="pos" />
                  <input type="radio" name="payment" id="pos" value="2" />
                </div>
                <div className="container payment">
                  <img src={Mastercard} alt="mastercard" />
                  <input
                    type="radio"
                    name="payment"
                    id="mastercard"
                    value="3"
                  />
                </div>
                <hr width="100% " />
                <h2 className="text-shopping-summary ">Shopping summary</h2>
                <h2 className="text-summary-modal">
                  Order
                  <span className="text-summary-price">Rp. {totalPrice}</span>
                </h2>
                <h2 className="text-summary-modal">
                  Delivery<span className="text-summary-price">Rp. 5000</span>
                </h2>
              </div>
              <div className="modal-footer payment">
                <div>
                  <h2 className="text-summary-footer">Shopping summary</h2>
                  <h2 className="text-summary-price-footer">
                    Rp. {summaryPrice}
                  </h2>
                </div>
                <button type="button " className="btn btn-buy ">
                  Buy
                </button>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Checkout;
