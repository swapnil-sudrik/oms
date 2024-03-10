import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Logo from '../../images/logo.png';

const WelcomeNavigation = (props) => {
  return (
    <div>
      <Navbar color="dark" className="w-100">
        <NavbarBrand href="/">
          <Image src={Logo} alt="Logo" className="logo" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem className="ml-auto mx-0 my-0">
            <Link
              to={props.url}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className="login-btn" color="primary" type="button">
                {props.btnName}
              </Button>
              <div className="login-logo mx-2">
              <i className={`fa-solid ${props.class}`}></i>
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default WelcomeNavigation;
