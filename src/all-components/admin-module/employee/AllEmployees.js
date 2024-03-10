import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Employee from "./Employee";
import AdminNavigation from "../home/AdminNavigation";
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
import Footer from "../../public-components/Footer";

const AllEmployees = () => {
  const [employeeData, setMyEmployeeData] = useState({});

  const updateEmployee = (emp_id) => {
    setMyEmployeeData(employeeData.filter((f) => f.emp_id !== emp_id));
  };

  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/employees/hr") {
      axios.get(`${base_url}/employees/hr`).then(
        (response) => {
          setMyEmployeeData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (location === "/employees/digital-marketing") {
      axios.get(`${base_url}/employees/digital-marketing`).then(
        (response) => {
          // console.log(response.data);
          setMyEmployeeData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (location === "/employees/counsellors") {
      axios.get(`${base_url}/employees/counsellors`).then(
        (response) => {
          // console.log(response.data);
          setMyEmployeeData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (location === "/employees/trainers") {
      axios.get(`${base_url}/employees/trainers`).then(
        (response) => {
          setMyEmployeeData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [location]);

  return (
    <div className="main">
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="my-1 py-2 px-3 d-flex trainer-welcome my-margin">
        <div className="px-3">
          <h5>{employeeData.length} Employees</h5>
        </div>
        <div
          style={{ position: "absolute", right: "0", marginTop: "-5px" }}
          className="px-5"
        >
          <Link className="text-decoration-none" to="/new-employee">
            <Button color="primary" className="py-1 px-2">
              <i className="fa-solid fa-user-plus"></i>&nbsp;Add Person
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-1 m-auto">
        <div className="text-center my-3  my-margin">
          {/* <Card className="my-3 mx-3 emp-card text-center">
            <CardBody> */}
          {employeeData.length > 0
            ? employeeData.map((item) => (
                <Employee
                  key={item.id}
                  employee={item}
                  update={updateEmployee}
                />
              ))
            : "No Employees"}
          {/* </CardBody>
          </Card> */}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "-webkit-fill-available",

        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default AllEmployees;
