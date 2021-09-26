/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import SearchInput from "../../../../components/base/SearchInput";
import "./style.css";
import NoOrder from "../../../../assets/image/image/no-order.png";
import { BASE_URL } from "../../../../configs/configs";
const axios = require("axios");

const ProfileSeller = (props) => {
  let pageNumbers = [];
  const [Refresh, setRefresh] = useState(false);
  const [payments, setPayments] = useState([]);
  const [pagination, setPagination] = useState("");
  const [Number, setNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`${BASE_URL}payments/?page=${Number}`)
      .then((response) => {
        const { result } = response.data.data;
        const { pagination } = response.data.data;
        setPayments(result);
        setPagination(pagination);
      })
      .catch(console.error());
  }, [Refresh]);

  for (let i = 1; i <= pagination.totalPages; i++) {
    pageNumbers.push(i);
  }

  const btnPagination = (Number) => {
    setNumber(Number);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };

  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show3="show" navorder="black" navmyorder="black" />
        <section>
          <div className="section-container-myorder-seller">
            <h1 className="section-title">My product</h1>

            <hr size="1px" />
            <div className="section-wrapper">
              <div className="nav-tabs-wrapper">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="/profile/seller/myorder">
                      All item
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myorder">
                      Get paid
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myorder">
                      processed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myorder">
                      Sent
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myorder">
                      Completed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/ordercancel">
                      Order Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <SearchInput />
            <div className="image-noOrder">
              <img src={NoOrder} alt="no-order" />
            </div> */}
            <div className="container table-myproduct">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Buyer Name</th>
                    <th scope="col">Total</th>
                    <th scope="col">Ordered At</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.total}</td>
                      <td>{item.createdAt}</td>
                      {/* <td className="button-wrapper"></td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                      <button
                        onClick={() => btnPagination(number)}
                        className="page-link"
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
