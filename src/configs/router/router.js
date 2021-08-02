import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import LoginCustommer from "../../pages/Login/Custommer";
import LoginSeller from "../../pages/Login/Seller";
import RegisterCustommer from "../../pages/Register/Custommer";
import RegisterSeller from "../../pages/Register/Seller";
import ResetPassword from "../../pages/ResetPassword";
import ConfirmPassword from "../../pages/ConfirmPassword";
import ConfirmLoginPassword from "../../pages/confirmLoginPassword";
import Product from "../../pages/pageProduct";
import Category from "../../pages/Category";
import MyBag from "../../pages/MyBag";
import Checkout from "../../pages/Checkout";
import MyAccount from "../../pages/ProfileCustommer/myAccount";
import ShippingAddress from "../../pages/ProfileCustommer/shippingAddress";
import MyOrderCustommer from "../../pages/ProfileCustommer/myOrder";
import StoreProfile from "../../pages/ProfileSeller/store/storeProfile";
import MyProduct from "../../pages/ProfileSeller/product/myProduct";
import SellingProductAdd from "../../pages/ProfileSeller/product/SellingProductAdd";
import SellingProductUpdate from "../../pages/ProfileSeller/product/SellingProductUpdate";
import MyOrderSeller from "../../pages/ProfileSeller/order/myOrder";
import OrderCancel from "../../pages/ProfileSeller/order/OrderCancel";
import Search from "../../pages/Search";
import PrivateRouteCard from "./module/PrivateRouterHomeSearchCategory";
import PrivateRouteOther from "./module/PrivateRouterOther";
import PublicRoute from "./module/PublicRouter";
import PrivateRouteCustommer from "./module/PrivateRouterCustommer";
import PrivateRouteSeller from "./module/PrivateRouteSeller";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouteCard exact path="/" component={Home} />
        <PrivateRouteCard exact path="/Search" component={Search} />
        <PrivateRouteCard path="/Category/:id" component={Category} />
        <PublicRoute exact path="/Login/Custommer" component={LoginCustommer} />
        <PublicRoute exact path="/Login/Seller" component={LoginSeller} />
        <PublicRoute
          exact
          path="/Register/Custommer"
          component={RegisterCustommer}
        />
        <PublicRoute exact path="/Register/Seller" component={RegisterSeller} />
        <PublicRoute exact path="/ResetPassword" component={ResetPassword} />
        <PublicRoute
          exact
          path="/ConfirmPassword"
          component={ConfirmPassword}
        />
        <PublicRoute
          exact
          path="/ConfirmPassword/Login"
          component={ConfirmLoginPassword}
        />
        <PrivateRouteOther path="/Product/:id" component={Product} />
        <PrivateRouteOther path="/MyBag/" component={MyBag} />
        <PrivateRouteOther path="/Checkout/" component={Checkout} />
        <PrivateRouteCustommer
          exact
          path="/Profile/Custommer/MyAccount"
          component={MyAccount}
        />
        <PrivateRouteCustommer
          exact
          path="/Profile/Custommer/ShippingAddress"
          component={ShippingAddress}
        />
        <PrivateRouteCustommer
          exact
          path="/Profile/Custommer/MyOrder"
          component={MyOrderCustommer}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/StoreProfile"
          component={StoreProfile}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/MyProduct"
          component={MyProduct}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/SellingProduct"
          component={SellingProductAdd}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/SellingProduct/:id"
          component={SellingProductUpdate}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/MyOrder"
          component={MyOrderSeller}
        />
        <PrivateRouteSeller
          exact
          path="/Profile/Seller/OrderCancel"
          component={OrderCancel}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
