/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import "./style.css";
import { Editor } from "@tinymce/tinymce-react";
// import PhotoUpload from "../../../../assets/image/image/foto.png";
// import { BASE_URL } from "../../../../configs/configs";
import { useDispatch } from "react-redux";
import { sellingProductAdd } from "../../../../configs/redux/actions/productAction";
// const axios = require("axios");
import NoImage from "../../../../assets/image/image/foto.png";

const ProfileSeller = () => {
    const dispatch = useDispatch();
   
  // const token = localStorage.getItem("token");

  const editorRef = useRef(null);

  const [products, setProducts] = useState({
    name: "",
    brand: "",
    price: 0,
    description: "",
    category_id: 25,
    category: "No Category",
    color: "red",
    size: "XL",
    quantity: "",
    status:"New",
    image_id: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });
  const [images, setImages] = useState([]);
  const [imagesPreview] = [images.map((item) => URL.createObjectURL(item))]
  

  const handleForm = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setImages([...e.target.files]);
    // setImagesPreview([...URL.createObjectURL(e.target.files)]);
  };

  const addProductByid = () => {
       dispatch(sellingProductAdd(products, images));
    // const formData = new FormData();
    // formData.append("name", products.name);
    // formData.append("brand", products.brand);
    // formData.append("price", products.price);
    // formData.append("description", products.description);
    // formData.append("category_id", products.category_id);
    // formData.append("category", products.category);
    // formData.append("updateAt", products.updateAt);
    // for (let i = 0; i < images.length; i++) {
    //   formData.append("images", images[i]);
    // }

    // axios
    //   .post(`${BASE_URL}products/`, formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(() => {
    //     console.log("success add data");
    //     alert("data berhasil ditambahkan");
    //   })
    //   .catch(console.error());
  };

  console.log(imagesPreview);

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
              name="quantity"
              type="stock"
              placeholder="buah"
              onChange={(e) => handleForm(e)}
              autocomplete="off"
            />
            {/* <h2 className="section-desc">stock</h2>
            <div className="section-name">
              <input
                className="radio stock"
                type="radio"
                name="New"
                value="New"
              />
              <label for="New" className="text-radio-stock">
                New
              </label>
              <input
                className="radio stock"
                type="radio"
                name="Used"
                value="Used"
              />
              <label for="Used" className="text-radio-stock">
                Used
              </label>
            </div> */}
          </div>
          <div className="section-container-photo">
            <h1 className="section-title">Photo of goods</h1>
            <hr size="1px" />
            <div className="container-photo">
              <div className="photo-wrapper">
                <img
                  className="foto utama"
                  src={imagesPreview[0] ? imagesPreview[0] : NoImage}
                  alt="foto utama"
                />
                <div className="photo-preview-wrapper">
                  <img
                    className="foto"
                    src={imagesPreview[1] ? imagesPreview[1] : NoImage}
                    alt="foto"
                  />
                  <img
                    className="foto"
                    src={imagesPreview[2] ? imagesPreview[2] : NoImage}
                    alt="foto"
                  />
                  <img
                    className="foto"
                    src={imagesPreview[3] ? imagesPreview[3] : NoImage}
                    alt="foto"
                  />
                  <img
                    className="foto"
                    src={imagesPreview[4] ? imagesPreview[4] : NoImage}
                    alt="foto"
                  />
                </div>
              </div>
              <h2 className="section-desc photo">Foto utama</h2>
              <hr size="1px" />
              <input
                multiple
                type="file"
                className="upload-images-btn"
                id="upload-images"
                // value={selectedFile}
                onChange={(e) => onFileChange(e)}
              />
              <label htmlFor="upload-images">
                <div className="btn btn-upload">Upload Images</div>
              </label>
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
