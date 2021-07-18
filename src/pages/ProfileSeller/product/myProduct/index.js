import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import SearchInput from "../../../../components/base/SearchInput";
import "./style.css";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const ProfileSeller = (props) => {
  const [products, setProducts] = useState([]);

const history = useHistory()

  const url = "http://localhost:4000/";

  useEffect(() => {
    axios
      .get(`${url}products?npp=5&page=0`)
      .then((response) => {
        const { result } = response.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch(console.error());
  }, [products]);

  const deleteProductByid =(id)=>{
    console.log(id);
    axios
      .delete(`${url}products/${id}`)
      .then(() => {
        console.log("success delete");
      })
      .catch(console.error());
  }
  const updateProductByid =(id)=>{
    console.log(history);
    history.push("/profile/seller/sellingproduct",id)
    
  }
  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show2="show" />
        <section>
          <div className="section-container">
            <h1 className="section-title">My product</h1>

            <hr size="1px" />
            <div className="section-wrapper">
              <div className="nav-tabs-wrapper">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      All item
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Sold out
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Archived
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <SearchInput />
            <div className="container table-myproduct">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td className="button-wrapper">
                        <button
                          className="btn-update-delete"
                          onClick={() => updateProductByid(item.id)}
                        >
                          Edit{" "}
                        </button>
                        <button
                          className="btn-update-delete"
                          onClick={() => deleteProductByid(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
