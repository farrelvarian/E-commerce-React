/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import "./style.css";
import { Editor } from "@tinymce/tinymce-react";
import PhotoUpload from "../../../../assets/image/image/foto.png";
import { BASE_URL } from "../../../../configs/configs";
const axios = require("axios");

const ProfileSeller = () => {
  const token  = localStorage.getItem("token")

  const editorRef = useRef(null);
  
  const [products, setProducts] = useState({
    name: "",
    brand: "",
    price: 0,
    description: "",
    category_id: 25,
    category: "No Category",
    updateAt: new Date(),
  });
  const [selectedFile, setSelectedFile] = useState([]);

  const handleForm = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {return setSelectedFile([...e.target.files]);}

  const addProductByid = () => {
    
      const formData = new FormData();
      formData.append("name",products.name);
      formData.append("brand", products.brand);
      formData.append("price", products.price);
      formData.append("description", products.description);
      formData.append("category_id", products.category_id);
      formData.append("category", products.category);
      formData.append("updateAt", products.updateAt);
      for (let i = 0 ; i<selectedFile.length;i++){
        formData.append("images",selectedFile[i]);
      }
      
      console.log(selectedFile);
    axios
      .post(`${BASE_URL}products/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("success add data");
        alert("data berhasil ditambahkan");
      })
      .catch(console.error());
  }

  console.log(products);

  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show2="show" navproduct="black" navsellingproducts="black" />
        <section>
          <div className="section-container-sellingproduct-add">
            <h1 className="section-title">Inventory</h1>
            <hr size="1px" />
            <h2 className="section-desc">Name of goods</h2>
            <input
              className="input name"
              name="name"
              type="name"
              onChange={(e) => handleForm(e)}
              autocomplete="off"
            />
          </div>
          <div className="section-container-sellingproduct-add">
            <h1 className="section-title">Item details</h1>
            <hr size="1px" />
            <h2 className="section-desc">Unit price</h2>
            <input
              className="input price"
              name="price"
              type="price"
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
                  src={PhotoUpload}
                  alt="foto utama"
                />
                <div className="photo-preview-wrapper">
                  <img className="foto" src={PhotoUpload} alt="foto" />
                  <img className="foto" src={PhotoUpload} alt="foto" />
                  <img className="foto" src={PhotoUpload} alt="foto" />
                  <img className="foto" src={PhotoUpload} alt="foto" />
                </div>
              </div>
              <h2 className="section-desc photo">Foto utama</h2>
              <hr size="1px" />
              <input
              multiple
                type="file"
                className="btn btn-upload"
                // value={selectedFile}
                onChange={(e) => onFileChange(e)}
              />
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
                initialValue=""
                onChange={(e) =>
                  setProducts({
                    ...products,
                    description: e.target
                      .getContent()
                      .replace(/(&nbsp;)*/g, "")
                      .replace(/(<p>)*/g, "")
                      .replace(/<(\/)?p[^>]*>/g, ""),
                  })
                }
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
            onClick={addProductByid}
          >
            Jual
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
