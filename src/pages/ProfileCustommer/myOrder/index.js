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
        <Sidebar show1="#9B9B9B" show2="#9B9B9B" />
        <section>
          <div className="section-container-myorder-custommer">
            <h1 className="section-title">My Order</h1>
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
                      Not yet paid
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Packed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Sent
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Completed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                     orderCancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileCustommer;