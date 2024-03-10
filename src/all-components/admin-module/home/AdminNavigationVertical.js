import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
const AdminNavigationVertical = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          navigate("/" + selected);
        }}
        className="bg-dark vertical-nav"
        style={{ position: "fixed" }}
      >
        <Toggle />
        <Nav defaultSelected="admin-home">
          <NavItem eventKey="admin-home" title="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>

          <NavItem eventKey="employees" title="employees">
            <NavIcon>
              <i
                className="fa-solid fa-users"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Employees</NavText>
            <NavItem eventKey="employees/trainers">
              <NavText>Trainers</NavText>
            </NavItem>
            <NavItem eventKey="employees/hr">
              <NavText>HR's</NavText>
            </NavItem>
            <NavItem eventKey="employees/counsellors">
              <NavText>Counsellors</NavText>
            </NavItem>
            <NavItem eventKey="employees/digital-marketing">
              <NavText>Digital Marketing</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="notice" title="notice">
            <NavIcon>
              <i
                className="fa-sharp fa-solid fa-notes-medical"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Notice</NavText>
          </NavItem>
          <NavItem eventKey="new-employee" title="new-employee">
            <NavIcon>
              <i
                className="fa-solid fa-user-plus"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>New Employee</NavText>
          </NavItem>

          <NavItem eventKey="calender" title="calender">
            <NavIcon>
              <i
                className="fa-regular fa-calendar-days"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Calender</NavText>
          </NavItem>

          <NavItem eventKey="leave" title="leavs">
            <NavIcon>
              <i
                className="fa-solid fa-briefcase"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Leaves</NavText>
          </NavItem>

          <NavItem eventKey="report" title="reports">
            <NavIcon>
              <i
                className="fa-solid fa-file-pen"
                style={{ fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Reports</NavText>
            <NavItem eventKey="report/contact-report">
              <NavText>Contact Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/email-report">
              <NavText>Email Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/leave-report">
              <NavText>Leave Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/payroll-report">
              <NavText>Payroll Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/personal-report">
              <NavText>Personal Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/security-report">
              <NavText>Security Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/team-report">
              <NavText>Team Reports</NavText>
            </NavItem>
            <NavItem eventKey="report/work-from-home-report">
              <NavText>WFH Reports</NavText>
            </NavItem>
          </NavItem>
        </Nav>
      </SideNav>
    </div>
  );
};

export default AdminNavigationVertical;
