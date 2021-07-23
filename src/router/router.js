import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LoginCustommer from "../pages/Login/Custommer";
import LoginSeller from "../pages/Login/Seller";
import RegisterCustommer from "../pages/Register/Custommer";
import RegisterSeller from "../pages/Register/Seller";
import ResetPassword from "../pages/ResetPassword";
import ConfirmPassword from "../pages/ConfirmPassword";
import ConfirmLoginPassword from "../pages/confirmLoginPassword";
import Product from "../pages/pageProduct";
import Category from "../pages/Category";
import MyBag from "../pages/MyBag";
import Checkout from "../pages/Checkout";
import MyAccount from "../pages/ProfileCustommer/myAccount";
import ShippingAddress from "../pages/ProfileCustommer/shippingAddress";
import MyOrderCustommer from "../pages/ProfileCustommer/myOrder";
import StoreProfile from "../pages/ProfileSeller/store/storeProfile";
import MyProduct from "../pages/ProfileSeller/product/myProduct";
import SellingProductAdd from "../pages/ProfileSeller/product/SellingProductAdd";
import SellingProductUpdate from "../pages/ProfileSeller/product/SellingProductUpdate";
import MyOrderSeller from "../pages/ProfileSeller/order/myOrder";
import OrderCancel from "../pages/ProfileSeller/order/OrderCancel";
import Search from "../pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Login/Custommer" component={LoginCustommer} />
        <Route exact path="/Login/Seller" component={LoginSeller} />
        <Route exact path="/Register/Custommer" component={RegisterCustommer} />
        <Route exact path="/Register/Seller" component={RegisterSeller} />
        <Route exact path="/ResetPassword" component={ResetPassword} />
        <Route exact path="/ConfirmPassword" component={ConfirmPassword} />
        <Route
          exact
          path="/ConfirmPassword/Login"
          component={ConfirmLoginPassword}
        />
        <Route path="/Product/:id" component={Product} />
        <Route path="/Category/:id" component={Category} />
        <Route path="/MyBag/" component={MyBag} />
        <Route path="/Checkout/" component={Checkout} />
        <Route
          exact
          path="/Profile/Custommer/MyAccount"
          component={MyAccount}
        />
        <Route
          exact
          path="/Profile/Custommer/ShippingAddress"
          component={ShippingAddress}
        />
        <Route
          exact
          path="/Profile/Custommer/MyOrder"
          component={MyOrderCustommer}
        />
        <Route
          exact
          path="/Profile/Seller/StoreProfile"
          component={StoreProfile}
        />
        <Route exact path="/Profile/Seller/MyProduct" component={MyProduct} />
        <Route
          exact
          path="/Profile/Seller/SellingProduct"
          component={SellingProductAdd}
        />
        <Route
          exact
          path="/Profile/Seller/SellingProduct/:id"
          component={SellingProductUpdate}
        />
        <Route exact path="/Profile/Seller/MyOrder" component={MyOrderSeller} />
        <Route
          exact
          path="/Profile/Seller/OrderCancel"
          component={OrderCancel}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
