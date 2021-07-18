import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import "./style.css";
import { useHistory, useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
const axios = require("axios");

const ProfileSeller = (props) => {
  const editorRef = useRef(null);

  const [products, setProducts] = useState({
    name: "",
    brand: "",
    price: 0,
    description: "",
    category_id: 0,
    category: "",
    image: "",
    updateAt: new Date(),
  });

  const params = useParams();

  const url = "http://localhost:4000/";

  useEffect(() => {
    axios
      .get(`${url}products/${params.id}`)
      .then((response) => {
        const [result] = response.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch(console.error());
  }, []);

  const handleForm = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const updateProductByid = () => {
    axios
      .put(`${url}products/${params.id}`, products)
      .then(() => {
        console.log("success update data");
      })
      .catch(console.error());
  };

  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show2="show" />
        <section>
          <div className="section-container">
            <h1 className="section-title">Inventory</h1>
            <hr size="1px" />
            <h2 className="section-desc">Name of goods</h2>
            <input
              className="input name"
              name="name"
              type="name"
              value={products.name}
              onChange={(e) => handleForm(e)}
              autocomplete="off"
            />
          </div>

          <div className="section-container">
            <h1 className="section-title">Item details</h1>
            <hr size="1px" />
            <h2 className="section-desc">Unit price</h2>
            <input
              className="input price"
              name="price"
              type="price"
              value={products.price}
              onChange={(e) => handleForm(e)}
              autocomplete="off"
            />
            <h2 className="section-desc">stock</h2>
            <input
              className="input stock"
              name="stock"
              type="stock"
              placeholder="buah"
              autocomplete="off"
            />
            <h2 className="section-desc">stock</h2>
            <div className="section-name">
              <input
                className="radio stock"
                type="radio"
                name="stock"
                value="1"
              />
              <label for="stock" className="text-radio-stock">
                Baru
              </label>
              <input
                className="radio stock"
                type="radio"
                name="stock"
                value="2"
              />
              <label for="stock" className="text-radio-stock">
                Bekas
              </label>
            </div>
          </div>
          <div className="section-container-photo">
            <h1 className="section-title">Photo of goods</h1>
            <hr size="1px" />
            <div className="container-photo">
              <div className="photo-wrapper">
                <img
                  className="foto utama"
                  src="../assets/images/foto.png"
                  alt="foto utama"
                />
                <img
                  className="foto"
                  src="../assets/images/foto.png"
                  alt="foto"
                />
                <img
                  className="foto"
                  src="../assets/images/foto.png"
                  alt="foto"
                />
                <img
                  className="foto"
                  src="../assets/images/foto.png"
                  alt="foto"
                />
                <img
                  className="foto"
                  src="../assets/images/foto.png"
                  alt="foto"
                />
              </div>
              <h2 className="section-desc photo">Foto utama</h2>
              <hr size="1px" />
              <button type="button" className="btn btn-upload">
                Upload foto
              </button>
            </div>
          </div>
          <div className="section-container-desc">
            <h1 className="section-title">Description</h1>
            <div className="container">
              {" "}
              <Editor
                name="description"
                apiKey="rildaruegewa87otvjms49g68pepw1sp8nv2e0n5863iw0ie"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={products.description}
                onChange={(e) => handleForm(e)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </div>

          <button
            type="button "
            className="btn btn-jual"
            onClick={updateProductByid}
          >
            Jual
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
