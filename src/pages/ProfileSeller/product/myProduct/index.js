/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import SearchInput from "../../../../components/base/SearchInput";
import "./style.css";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../../../configs/configs";
import { useDispatch } from "react-redux";
import { myProduct } from "../../../../configs/redux/actions/productAction";
const axios = require("axios");

const ProfileSeller = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState("");
  const [Number, setNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [Refresh, setRefresh] = useState(false);
  // const token = localStorage.getItem("token");

  const history = useHistory();

  let pageNumbers = [];

  useEffect(() => {
    axios
      .get(`${BASE_URL}products?npp=5&page=${Number}${search}`)
      .then((response) => {
        const { result } = response.data.data;
        const { pagination } = response.data.data;
        setProducts(result);
        setPagination(pagination);
      })
      .catch(console.error());
  }, [Refresh]);

  const deleteProductByid = (id) => {
 dispatch(myProduct(id, Refresh,setRefresh));
    // axios
    //   .delete(`${BASE_URL}products/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(() => {
    //     console.log("success delete");
    //     Refresh === true ? setRefresh(false) : setRefresh(true);
    //   })
    //   .catch(console.error());
  };
  const updateProductByid = (id) => {
    history.push(`/profile/seller/sellingproduct/${id}`);
  };

  for (let i = 1; i <= pagination.totalPages; i++) {
    pageNumbers.push(i);
  }

  const btnPagination = (Number) => {
    setNumber(Number);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };

  const handleForm = (e) => {
    setSearch(`&search=${e.target.value}`);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };


  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show2="show" navproduct="black" navmyproducts="black" />
        <section>
          <div className="section-container-myproduct">
            <h1 className="section-title">My product</h1>

            <hr size="1px" />
            <div className="section-wrapper">
              <div className="nav-tabs-wrapper">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="/profile/seller/myproduct">
                      All item
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myproduct">
                      Sold out
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myproduct">
                      Archived
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <SearchInput onChange={(e) => handleForm(e)} />
            <div className="container table-myproduct">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr>
                      <th scope="row">{item.name}</th>
                      <td>
                        <img className="list-image-product" src={item.image1} alt={item.name} />
                      </td>
                      <td>{item.price}</td>
                      <td className="button-wrapper">
                        <button
                          className="btn-update-delete"
                          onClick={() => updateProductByid(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-update-delete"
                          onClick={() => {
                            if (window.confirm("Delete the item?")) {
                              deleteProductByid(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
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
