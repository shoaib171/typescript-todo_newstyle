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
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <Nav className="justify-content-center" activeKey="/">
              <Nav.Item className="mx-3">
                <Link
                  to="/?TodoData=all"
                  className={`FontFamily fs-5 ${
                    Todo === null ? "active-tab" : "" // Apply the active-tab class
                  } text-dark`}
                >
                  All
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Link
                  to="/?TodoData=active"
                  className={`FontFamily fs-5  ${
                    Todo === "active" ? "active-tab" : "" // Apply the active-tab class
                  } text-dark`}
                >
                  Active
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Link
                  to="/?TodoData=completed"
                  className={`FontFamily  fs-5 ${
                    Todo === "completed" ? "active-tab" : "" // Apply the active-tab class
                  } text-dark`}
                >
                  Completed
                </Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
