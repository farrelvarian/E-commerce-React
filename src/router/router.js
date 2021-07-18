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
import StoreProfile from "../pages/ProfileSeller/store/storeProfile";
import MyProduct from "../pages/ProfileSeller/product/myProduct";
import SellingProductAdd from "../pages/ProfileSeller/product/SellingProductAdd";
import SellingProductUpdate from "../pages/ProfileSeller/product/SellingProductUpdate";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/Custommer" component={LoginCustommer} />
        <Route exact path="/login/Seller" component={LoginSeller} />
        <Route exact path="/Register/Custommer" component={RegisterCustommer} />
        <Route exact path="/Register/Seller" component={RegisterSeller} />
        <Route exact path="/ResetPassword" component={ResetPassword} />
        <Route exact path="/ConfirmPassword" component={ConfirmPassword} />
        <Route
          exact
          path="/ConfirmPassword/Login"
          component={ConfirmLoginPassword}
        />
        <Route path="/product/:id" component={Product} />
        <Route path="/category/:id" component={Category} />
        <Route path="/mybag/" component={MyBag} />
        <Route
          exact
          path="/Profile/Seller/storeProfile"
          component={StoreProfile}
        />
        <Route exact path="/Profile/Seller/myProduct" component={MyProduct} />
        <Route
          exact
          path="/Profile/Seller/sellingProduct"
          component={SellingProductAdd}
        />
        <Route
          exact
          path="/Profile/Seller/sellingProduct/:id"
          component={SellingProductUpdate}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
