/** @format */

import * as React from "react";
import ListIcon from "../Assets/list.svg";

const Header: React.FunctionComponent = (props) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
            <img src={ListIcon} height="30px" width="30px" alt="List_Icon" />
            <h3 className="HeadTag ms-2">Add Todo's</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
