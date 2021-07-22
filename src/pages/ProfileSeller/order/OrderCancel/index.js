import React from "react";
import Navbar from "../../../../components/module/NavbarProfileSeller";
import Sidebar from "../../../../components/module/SidebarSeller";
import SearchInput from "../../../../components/base/SearchInput";
import "./style.css";
import NoOrder from "../../../../assets/image/image/no-order.png"


const ProfileSeller = (props) => {
  

    
  return (
    <div className="page">
      <Navbar />
      <div className="content-container">
        <Sidebar show3="show" navorder="black" navordercancel="black" />
        <section>
          <div className="section-container-myorder-seller">
            <h1 className="section-title">My product</h1>

            <hr size="1px" />
            <div className="section-wrapper">
              <div className="nav-tabs-wrapper">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/seller/myorder">
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
                    <a
                      class="nav-link active"
                      href="/profile/seller/ordercancel"
                    >
                      Order Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <SearchInput />
            <div className="image-noOrder">
              <img src={NoOrder} alt="no-order" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSeller;
