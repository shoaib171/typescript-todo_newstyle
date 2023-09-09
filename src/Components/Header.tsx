/** @format */

import * as React from "react";
import ListIcon from "../Assets/list.svg";
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
        <img src={ListIcon} height="30px" width="30px" alt="List_Icon" />
        <h3 className="HeadTag ms-2">Add Todo's</h3>
      </div>
    </>
  );
};

export default Header;
