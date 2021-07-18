import React, { Component, Fragment } from "react";
import Router from "./router/router";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    console.log("ini method render");
    return (
      <Router />
      // <BrowserRouter>
      //   <Switch>
      //     {/* <Route exact path="/" component={Home} />
      //     <Route exact path="/about" component={About} />
      //     <Route path="/about/1" component={Detail} />
      //     <Route path="/login" component={Login} /> */}
      //   </Switch>
      // </BrowserRouter>
    );
  }
}
export default App;
