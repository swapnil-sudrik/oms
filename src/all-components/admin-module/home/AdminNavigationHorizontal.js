import React, { useRef, useState } from "react";
import Logo from "../../../images/logo.png";
import {
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
  Container,
} from "reactstrap";
import { OverlayPanel } from "primereact/overlaypanel";
import Swapnil from "../../../images/swapnil.jpg";
import { Avatar } from "primereact/avatar";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";

const AdminNavigationHorizontal = () => {
  const [profile, setProfile] = useState("");
  const email = localStorage.getItem("email");
  const op = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfilePhoto(email);
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);

  function getProfilePhoto(email) {
    axios
      .get(`${base_url}/profile/` + email, {
        responseType: "blob",
      })
      .then(
        (response) => {
          const reader = new FileReader();
          reader.readAsDataURL(response.data);
          reader.onloadend = () => {
            setProfile(reader.result);
          };
        },
        (error) => {
          console.log("in error");
          console.log(error);
        }
      );
  }

  function OffCanvasNavigation({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div className="d-flex">
          <div title="Apply Leave" className="m-auto mx-3">
            <Link className="text-decoration-none text-dark" to="leave">
              <i
                className="fa-solid fa-briefcase"
                style={{ fontSize: "1.7em" }}
              ></i>
            </Link>
          </div>
          <div style={{ display: "inline" }} className="m-auto">
            <Avatar
              image={profile}
              className="mx-3 my-2 nav-avtar"
              size="large"
              shape="circle"
              onClick={(e) => op.current.toggle(e)}
            />
            <OverlayPanel
              ref={op}
              style={{ lineHeight: "20px", padding: "0px" }}
              className="text-center py-0 px-0"
            >
              <ListGroup>
                <ListGroupItem action tag="button" style={{ border: "none" }}>
                  <Link
                    to="/profile"
                    className="text-decoration-none text-dark"
                  >
                    <i className="fa-solid fa-user"></i>&nbsp;&nbsp;Profile
                  </Link>
                </ListGroupItem>
                <ListGroupItem action tag="button" style={{ border: "none" }}>
                  <Link
                    to="/setting"
                    className="text-decoration-none text-dark"
                  >
                    <i className="fa-solid fa-gear"></i>&nbsp;&nbsp;Setting
                  </Link>
                </ListGroupItem>
                <ListGroupItem action tag="button" style={{ border: "none" }}>
                  <Link
                    onClick={() => {
                      localStorage.removeItem("email");
                      toast.success("Logged out..");
                    }}
                    to="/login"
                    className="text-decoration-none text-dark"
                  >
                    <i className="fa-solid fa-power-off"></i>&nbsp;&nbsp;Logout
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </OverlayPanel>
          </div>
          <div className="m-auto hamb">
            <i
              className="fa-solid fa-bars mx-3 m-auto"
              onClick={handleShow}
              style={{
                fontSize: "30px",
                cursor: "pointer",
                marginTop: "-10px",
              }}
            ></i>
          </div>
        </div>

        <Offcanvas
          show={show}
          onHide={handleClose}
          {...props}
          style={{ width: "260px", marginRight: "0px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="logo" width="200px" />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ padding: "0px", fontSize: "12px" }}>
            <Link to="/admin-home" className="text-decoration-none text-dark">
              <div
                className="py-3 px-3 m-auto my-menu"
                style={{ fontSize: "1.2em" }}
              >
                <i className="fa fa-fw fa-home"></i>&nbsp; Home
              </div>
            </Link>
            <div
              className="dropdown1 py-3 px-3 m-auto my-menu"
              style={{ fontSize: "1.2em" }}
            >
              <Link className="drop-btn text-decoration-none text-dark">
                {" "}
                <i className="fa-solid fa-users"></i>&nbsp; Employee
              </Link>
              <div className="drop-content">
                <Card className=" text-end">
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/employees/trainers"
                  >
                    Trainer
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/employees/hr"
                  >
                    HR's
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/employees/counsellors"
                  >
                    Counsellors
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/employees/digital-marketing"
                  >
                    Digital Marketing
                  </Link>
                </Card>
              </div>
            </div>

            <Link to="/notice" className="text-decoration-none text-dark">
              <div
                className="py-3 px-3 m-auto my-menu"
                style={{ fontSize: "1.2em" }}
              >
                <i className="fa-sharp fa-solid fa-notes-medical"></i>&nbsp;
                Notice
              </div>
            </Link>
            <Link to="/new-employee" className="text-decoration-none text-dark">
              <div
                className="py-3 px-3 m-auto my-menu"
                style={{ fontSize: "1.2em" }}
              >
                <i className="fa-solid fa-user-plus"></i>&nbsp; New Employee
              </div>
            </Link>
            <Link
              to="/admin-calendar"
              className="text-decoration-none text-dark"
            >
              <div
                className="py-3 px-3 m-auto my-menu"
                style={{ fontSize: "1.2em" }}
              >
                <i className="fa-regular fa-calendar-days"></i>&nbsp; Calender
              </div>
            </Link>
            <Link to="/admin-leaves" className="text-decoration-none text-dark">
              <div
                className="py-3 px-3 m-auto my-menu"
                style={{ fontSize: "1.2em" }}
              >
                <i className="fa-solid fa-briefcase"></i>&nbsp; Leaves
              </div>
            </Link>

            <div
              className="dropdown2 py-3 px-3 m-auto my-menu"
              style={{ fontSize: "1.2em" }}
            >
              <Link className="drop-btn text-decoration-none text-dark">
                {" "}
                <i className="fa-solid fa-file-pen"></i>&nbsp; Reports
              </Link>
              <div className="drop-content2">
                <Card className=" text-end">
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/contact-report"
                  >
                    Contact Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/email-report"
                  >
                    Email Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/leave-report"
                  >
                    Leave Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/payroll-report"
                  >
                    Payroll Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/personal-report"
                  >
                    Personal Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/security-report"
                  >
                    Security Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/team-reports"
                  >
                    Team Reports
                  </Link>
                  <Link
                    className="text-decoration-none text-dark my-menu py-2 px-3"
                    to="/report/work-from-home-report"
                  >
                    WFH Reports
                  </Link>
                </Card>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <div className="my-margin">
      {/* <Container> */}
        {/* <Row>
          <Col md="12"> */}
            <nav className="navbar bg-light">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
              <div>
                {["end"].map((placement, idx) => (
                  <OffCanvasNavigation
                    key={idx}
                    placement={placement}
                    name={placement}
                  />
                ))}
              </div>
            </nav>
          {/* </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
};

export default AdminNavigationHorizontal;
