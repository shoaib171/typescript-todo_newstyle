/** @format */

import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useSearchParams } from "react-router-dom";

interface IAppProps {}

const Tabs: React.FunctionComponent<IAppProps> = () => {
  const [searchParams] = useSearchParams();
  let Todo = searchParams.get("TodoData");
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item className="mx-5">
          <Link
            to="/?TodoData=all"
            className={`FontFamily  ${
              Todo === null ? "active-tab" : "" // Apply the active-tab class
            } text-dark`}
          >
            All
          </Link>
        </Nav.Item>
        <Nav.Item className="mx-5">
          <Link
            to="/?TodoData=active"
            className={`FontFamily  ${
              Todo === "active" ? "active-tab" : "" // Apply the active-tab class
            } text-dark`}
          >
            Active
          </Link>
        </Nav.Item>
        <Nav.Item className="ms-5">
          <Link
            to="/?TodoData=completed"
            className={`FontFamily  ${
              Todo === "completed" ? "active-tab" : "" // Apply the active-tab class
            } text-dark`}
          >
            Completed
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Tabs;
