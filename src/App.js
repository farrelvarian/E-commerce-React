import React, { Component } from "react";
import Router from "./configs/router/router";


class App extends Component {
  render() {
    console.log("ini method render");
    return (
      <Router />
    );
  }
}
export default App;
