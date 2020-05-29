import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
class PageNotFound extends Component<{}> {
  state = {};

  render() {
   
    return (
      <div className="text-center mt-5 page-not-found">
        <div>404</div>
        <p>Oops ! Something went Wrong. Page Not Found</p>
        <Link to="/">
          <Button className="gradient-fill-btn">Go To Main Page</Button>
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
