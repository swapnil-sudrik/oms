import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Avatar } from "primereact/avatar";
import Swapnil from "../../../images/swapnil.jpg";
import AdminHomePieChart from "./AdminHomePieChart";
import AdminHomeLineChart from "./AdminHomeLineChart";
import TodaySpecials from "./TodaySpecials";
import TeamLeads from "./TeamLeads";
import UpcomingLeave from "./UpcomingLeave";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";

const AdminHome = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const email = localStorage.getItem("email");
  useEffect(() => {
    document.title = "admin home";
    getProfilePhoto(email);
    if (!localStorage.getItem("email")) {
      navigate("/login");
      toast.error("Something went wrong ! please try again..!!");
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
  const [todaySpecial, setTodaySpecial] = useState([
    {
      id:10,
      icon: "fa-solid fa-cake-candles",
      data: "No Birthdays Today",
      color: "blueviolet",
      image: Swapnil,
    },
    {
      id:11,
      icon: "fa-solid fa-bed",
      data: "swapnil is off sick today",
      color: "yellow",
      image: Swapnil,
    },
    {
      id:13,
      icon: "fa-solid fa-person",
      data: "swapnil is parenting leave today",
      color: "green",
      image: Swapnil,
    },
    {
      id:17,
      icon: "fa-solid fa-briefcase",
      data: "Danny ward is away today",
      color: "deeppink",
      image: Swapnil,
    },
    {
      id:15,
      icon: "fa-solid fa-house-chimney",
      data: "You are working from home today",
      color: "darkred",
      image: Swapnil,
    },
  ]);

  const [teamLeads, setTeamLeads] = useState([
    {
      image: Swapnil,
      name: "swapnil sudrik",
      post: "full stack developer",
      id: "10",
    },
    {
      image: Swapnil,
      name: "swapnil sudrik",
      post: "full stack developer",
      id: "20",
    },
    {
      image: Swapnil,
      name: "swapnil sudrik",
      post: "full stack developer",
      id: "23",
    },
    {
      image: Swapnil,
      name: "swapnil sudrik",
      post: "full stack developer",
      id: "230",
    },
    {
      image: Swapnil,
      name: "swapnil sudrik",
      post: "full stack developer",
      id: "250",
    },
  ]);

  const [myActivities, setMyActivities] = useState([
    {
      image: Swapnil,
      activity: "i was compalted my todays taks",
      name: "swapnil sudrik",
      hours: "2 houres",
    },
    {
      image: Swapnil,
      activity: "i was compalted my todays taks",
      name: "swapnil sudrik",
      hours: "2 houres",
    },
    {
      image: Swapnil,
      activity: "i was compalted my todays taks",
      name: "swapnil sudrik",
      hours: "2 houres",
    },
    {
      image: Swapnil,
      activity: "i was compalted my todays taks",
      name: "swapnil sudrik",
      hours: "2 houres",
    },
    {
      image: Swapnil,
      activity: "i was compalted my todays taks",
      name: "swapnil sudrik",
      hours: "2 houres",
    },
  ]);

  const [myUpcomingLeave, setMyUpcomingLeave] = useState([
    {
      icon: "fa-solid fa-briefcase",
      color: "darkred",
      leaveSubject: "swapnil is off sick today",
      date: "23-10-2023",
      image: Swapnil,
      name: "swapnil sudrik",
      id:101,
    },
    {
      icon: "fa-solid fa-briefcase",
      color: "darkred",
      leaveSubject: "swapnil is off sick today",
      date: "23-10-2023",
      image: Swapnil,
      name: "swapnil sudrik",
      id:105,
    },
    {
      icon: "fa-solid fa-briefcase",
      color: "darkred",
      leaveSubject: "swapnil is off sick today",
      date: "23-10-2023",
      image: Swapnil,
      name: "swapnil sudrik",
      id:108,
    },
    {
      icon: "fa-solid fa-briefcase",
      color: "darkred",
      leaveSubject: "swapnil is off sick today",
      date: "23-10-2023",
      image: Swapnil,
      name: "swapnil sudrik",
      id:120,
    },
    {
      icon: "fa-solid fa-briefcase",
      color: "darkred",
      leaveSubject: "swapnil is off sick today",
      date: "23-10-2023",
      image: Swapnil,
      name: "swapnil sudrik",
      id:104,
    },
  ]);
  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="text-center my-margin">
        <div style={{ display: "inline-block" }}>
          <div className="my-2 mx-2 admin-card">
            <Card
              className="text-center align-items-center admin-welcome"
              style={{ padding: "0 6em" }}
            >
              <Avatar
                image={profile}
                className="align-item-center my-3"
                size="xlarge"
                shape="circle"
                style={{ width: "100px", height: "100px" }}
              />
              <br />
              <CardText
                className="text-bold"
                tag="h4"
                style={{ lineHeight: "25px" }}
              >
                Welcome Swapnil
              </CardText>
              <CardText>Thu, 27 Apr 2023</CardText>
              <br />
            </Card>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <div
            className="my-2 mx-2"
            style={{ display: "inline-block", width: "170px" }}
          >
            <Card className="py-2 admin-welcome">
              <div
                className="d-flex"
                style={{
                  width: "fit-content",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    backgroundColor: "darkviolet",
                    padding: "12px",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <i
                    className="fa-solid fa-users"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </div>

                <div style={{ marginLeft: "15px", textAlign: "left" }}>
                  <CardText>Employees</CardText>
                  <CardText style={{ lineHeight: "10px" }} tag="h2">
                    100
                  </CardText>
                </div>
              </div>
            </Card>
          </div>

          <div
            className="my-2 mx-2"
            style={{ display: "inline-block", width: "170px" }}
          >
            <Card className="py-2 admin-welcome">
              <div
                className="d-flex"
                style={{
                  width: "fit-content",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    backgroundColor: "darkred",
                    padding: "12px",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <i
                    className="fa-solid fa-briefcase"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </div>
                <div style={{ marginLeft: "15px", textAlign: "left" }}>
                  <CardText>Leaves</CardText>
                  <CardText style={{ lineHeight: "10px" }} tag="h2">
                    10
                  </CardText>
                </div>
              </div>
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ display: "inline-block", width: "170px" }}
          >
            <Card className="py-2 admin-welcome">
              <div
                className="d-flex"
                style={{
                  width: "fit-content",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    backgroundColor: "darkgreen",
                    padding: "12px",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <i
                    className="fa-solid fa-money-bill-1"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </div>
                <div style={{ marginLeft: "15px", textAlign: "left" }}>
                  <CardText>Salary</CardText>
                  <CardText style={{ lineHeight: "10px" }} tag="h2">
                    100
                  </CardText>
                </div>
              </div>
            </Card>
          </div>

          <div
            className="my-2 mx-2"
            style={{ display: "inline-block", width: "170px" }}
          >
            <Card className="py-2 admin-welcome">
              <div
                className="d-flex"
                style={{
                  width: "fit-content",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    backgroundColor: "darkred",
                    padding: "12px",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <i
                    className="fa-solid fa-user-graduate"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </div>
                <div style={{ marginLeft: "15px", textAlign: "left" }}>
                  <CardText>Students</CardText>
                  <CardText style={{ lineHeight: "10px" }} tag="h2">
                    200
                  </CardText>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <br />
      <div className="my-margin">
        <Container className="custom-container" fluid>
          <Row className="text-center">
            <Col md="6" className="text center">
              <AdminHomePieChart />
            </Col>
            <Col md="6" className="text center">
              <AdminHomeLineChart />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="containers my-margin">
        <div className="column">
          <Card className="admin-welcome mx-2">
            <CardBody>
              <CardTitle style={{ fontSize: "22px" }}>Today</CardTitle>

              {todaySpecial.length > 0
                ? todaySpecial.map((item) => (
                    <TodaySpecials key={item.id} todaySpecials={item} />
                  ))
                : "Nothing Today Special"}
            </CardBody>
          </Card>
          <br />
        </div>
        <div className="column">
          <Card className="admin-welcome mx-2">
            <CardBody>
              <CardTitle style={{ fontSize: "22px" }}>Team Leads</CardTitle>

              {teamLeads.length > 0
                ? teamLeads.map((item) => (
                    <TeamLeads key={item.id} teamLeads={item} />
                  ))
                : "No Team Leads"}
            </CardBody>
          </Card>
          <br />
        </div>
        <div className="column">
          <Card className="admin-welcome mx-2">
            <CardBody>
              <CardTitle style={{ fontSize: "22px" }}>
                Your Upcoming Leave
              </CardTitle>
              {myUpcomingLeave.length > 0
                ? myUpcomingLeave.map((item) => (
                    <UpcomingLeave key={item.id} upcomingLeave={item} />
                  ))
                : "No Upcoming Leaves"}
            </CardBody>
          </Card>
        </div>
      </div>
      <br />
      <div
        style={{ bottom: "0" }}
        className="text-center w-100 bg-dark text-light py-2"
      >
        <p className="text-center f-size">
          &nbsp;Copyright ©
          <Link to="#" className="text-light text-decoration-none f-size">
            &nbsp;Future Scope Technology Pvt. Ltd.&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none text-light">
            &nbsp;Terms&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Placement&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Privacy&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Refund&nbsp;
          </Link>
          |
          <Link to="#" className="text-light text-decoration-none">
            &nbsp;Referral Policy
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AdminHome;
