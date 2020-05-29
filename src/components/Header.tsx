import * as React from "react";
import { Navbar} from 'react-bootstrap';

export const Header: React.FC = () => {
  
  return (
    <Navbar bg="light" className="main-header">
      <div className="container">
        <div className="col-md-3">
          <h2 className="neosoft vertical-align-middle">
            <img
              alt="Neo-logo"
              src={require("../images/neosoft.svg")}
            />
          </h2>
        </div>
      </div>
      <div className="header-nav desk col-md-9">
          <ul className="top-links">
            <li className="top-heading">Lead Course Management System</li>
          </ul>
      </div>
    </Navbar>
  );
};
