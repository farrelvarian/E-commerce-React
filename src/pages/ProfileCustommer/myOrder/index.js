/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/module/NavbarAfterLogin";
import Sidebar from "../../../components/module/SidebarCustommer";
import "./style.css";
import { BASE_URL } from "../../../configs/configs";
const axios = require("axios");

const ProfileCustommer = (props) => {
   const user_id = localStorage.getItem("id");
  let pageNumbers = [];
  const [Refresh, setRefresh] = useState(false);
  const [payments, setPayments] = useState([]);
  const [pagination, setPagination] = useState("");
  const [Number, setNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`${BASE_URL}payments/${user_id}?page=${Number}`)
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
        <Sidebar show1="#9B9B9B" show2="#9B9B9B" />
        <section>
          <div className="section-container-myorder-custommer">
            <h1 className="section-title">My Order</h1>
            <hr size="1px" />
            <div className="section-wrapper">
              <div className="nav-tabs-wrapper">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="/profile/custommer/myorder"
                    >
                      All item
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/custommer/myorder">
                      Not yet paid
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/custommer/myorder">
                      Packed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/custommer/myorder">
                      Sent
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/custommer/myorder">
                      Completed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/custommer/myorder">
                      orderCancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container table-myproduct">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Total</th>
                    <th scope="col">Ordered At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.total}</td>
                      <td>{item.createdAt}</td>
                      <td className="button-wrapper"></td>
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

export default ProfileCustommer;
