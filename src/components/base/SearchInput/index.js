import React, { Component } from "react";
import { ReactComponent as SearchImage } from "../../../assets/image/logo/search.svg";
import style from "./searchInput.module.css";
export class index extends Component {
  render() {
    return (
      <div className={`${style.input_group} ${style.with_icon}`}>
        <input
          className={style.form_control_inputan}
          name="suche"
          type="search"
          placeholder="Search"
          autocomplete="off"
        />
        <SearchImage className={style.fas} />
      </div>
    );
  }
}
export default index;
