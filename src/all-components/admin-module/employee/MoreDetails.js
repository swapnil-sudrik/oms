import React, { useEffect, useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
import {
  Card,
  Button,
  CardBody,
  CardText,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { Avatar } from "primereact/avatar";
import Footer from "../../public-components/Footer";
import { toast } from "react-toastify";
const MoreDetails = () => {
  const [profile, setProfile] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  const navigate = useNavigate();
  const { emp_id } = useParams();

  useEffect(() => {
    getEmployeeDetails(emp_id);
  }, []);

  const getEmployeeDetails = (id) => {
    axios.get(`${base_url}/employee/` + id).then(
      (response) => {
        setEmployeeData(response.data);
        console.log(response.data);
        const data = response.data;
        const emails = data.map((item) => item.email);
        getProfilePhoto(emails);
        const post = data.map((item) => item.post);
        const jobType = data.map((item) => item.jobType);
        setPosition({ post: post, jobType: jobType });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const getProfilePhoto = (email) => {
    axios
      .get(`${base_url}/profile/` + email, {
        responseType: "blob",
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (response) => {
          console.log(email);
          const reader = new FileReader();
          reader.readAsDataURL(response.data);
          reader.onloadend = () => {
            setProfile(reader.result);
          };
        },
        (error) => {
          console.log(email);
          console.log("in error");
          console.log(error);
        }
      );

    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  const [showSalaryPopup, setShowSalaryPopup] = useState(false);
  const [position, setPosition] = useState({
    post: "",
    jobType: "",
  });

  const [updateSalary, setUpdateSalary] = useState({ salary: "" });
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const myData = new FormData();
    myData.append("post", position.post);
    myData.append("jobType", position.jobType);
    updatePost(myData);
    setShowPopup(false);
  };
  const updatePost = (data) => {
    axios.put(`${base_url}/employee/` + emp_id, data).then(
      (response) => {
        getEmployeeDetails(emp_id);
        toast.success("employee updated");
      },
      (error) => {
        toast.error("Something went wrong ! please try Again...");
      }
    );
  };
  const handleSalarySubmit = (e) => {
    e.preventDefault();
    const salaryData = new FormData();
    salaryData.append("salary", updateSalary.salary);
    updateEmployeeSalary(salaryData);
    setShowSalaryPopup(false);
  };

  const updateEmployeeSalary = (salary) => {
    axios.put(`${base_url}/employee/salary/` + emp_id, salary).then(
      (response) => {
        console.log(response);
        getEmployeeDetails(emp_id);
        toast.success("Employee Salary Updated..");
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong ? please try again...!");
      }
    );
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const salaryClose = () => {
    setShowSalaryPopup(false);
  };
  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      {employeeData.map((item) => (
        <div className="my-margin">
          <Row className="mx-2 my-2">
            <Col sm="4">
              <Card className="text-center admin-welcome">
                <CardBody>
                  <Avatar
                    image={profile}
                    className="align-item-center my-3"
                    size="xlarge"
                    shape="circle"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <CardText
                    className="text-center"
                    tag="h1"
                    style={{ color: "darkblue" }}
                  >
                    {item.fname} {item.lname}
                  </CardText>
                  <CardText className="text-center">{item.email}</CardText>
                </CardBody>
              </Card>
            </Col>
            <br />
            <Col sm="4">
              <Card className="admin-welcome">
                <CardBody>
                  <CardText tag="h4">Position</CardText>
                  <hr />
                  <Input
                    type="text"
                    className="my-2 py-2"
                    name="job-title"
                    id="job-title"
                    value={item.post}
                    placeholder="Job Title"
                    disabled
                  />
                  <Input
                    type="text"
                    className="my-2 py-2"
                    name="job-type"
                    id="job-type"
                    value={item.jobType}
                    placeholder="Job Type"
                    disabled
                  />
                  <Container className="text-center">
                    <Button
                      className="py-1 text-center w-100"
                      color="primary"
                      onClick={() => setShowPopup(true)}
                    >
                      Edit&nbsp;&nbsp;
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </Container>
                </CardBody>
              </Card>
            </Col>
            <br />
            <Col sm="4">
              <Card className="admin-welcome">
                <CardBody>
                  <CardText tag="h4">Working Week</CardText>
                  <hr />
                  <CardText>
                    <Button
                      label="Mon"
                      color="primary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Mon
                    </Button>
                    <Button
                      label="Tue"
                      color="primary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Tue
                    </Button>
                    <Button
                      label="Wed"
                      color="primary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Wed
                    </Button>
                    <Button
                      label="Thu"
                      color="primary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Thu
                    </Button>
                    <Button
                      label="Fri"
                      color="primary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Fri
                    </Button>
                    <Button
                      label="Sat"
                      color="secondary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Sat
                    </Button>
                    <Button
                      label="Sun"
                      color="secondary"
                      className="mx-1 my-1 py-2 px-3"
                      style={{ borderRadius: "40%" }}
                    >
                      Sun
                    </Button>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <br />
          </Row>
          <Row className="mx-2 my-3">
            <Col sm="4">
              <Card className="admin-welcome">
                <CardBody>
                  <CardText tag="h4">Basic Information</CardText>
                  <hr />
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Preferred Name :
                    </p>{" "}
                    {item.fname}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      First Name :
                    </p>{" "}
                    {item.fname}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Middle Name :
                    </p>{" "}
                    {item.mname}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Last Name :
                    </p>{" "}
                    {item.lname}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Nationality :
                    </p>{" "}
                    {item.nationality}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Date of Birth :
                    </p>{" "}
                    {item.bdate}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Gender :
                    </p>{" "}
                    {item.gender}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Gender :
                    </p>{" "}
                    {item.bloodGroup}
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </Col>
            <Col sm="4">
              <Card className="admin-welcome">
                <CardBody>
                  <CardText tag="h4">Contact</CardText>
                  <hr />
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Phone Number :
                    </p>{" "}
                    {item.mobileNumber}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Email :
                    </p>{" "}
                    {item.mobileNumber}
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </Col>
            <Col sm="4">
              <Card className="admin-welcome">
                <CardBody>
                  <CardText tag="h4">Dates</CardText>
                  <hr />
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Start Date :
                    </p>
                    {item.jdate}
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </Col>
          </Row>
          <Row className="mx-2 my-2">
            {/* <Container> */}
            <Col sm="6">
              <Card className="mx-2 admin-welcome">
                <CardBody>
                  <CardText tag="h4">Salary</CardText>
                  <hr />
                  <br />
                  <Input
                    type="text"
                    // placeholder="20000"
                    value={item.salary}
                    disabled
                  />
                  <br />
                  <Container className="text-center">
                    <Button
                      className="py-1 text-center w-100"
                      color="primary"
                      onClick={() => setShowSalaryPopup(true)}
                    >
                      Edit&nbsp;&nbsp;
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </Container>
                </CardBody>
              </Card>
              <br />
            </Col>
            <Col sm="6">
              <Card className="mx-2 admin-welcome">
                <CardBody>
                  <CardText tag="h4">Payroll Details</CardText>
                  <hr />
                  <br />
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Bank Name :
                    </p>
                    {item.bankName}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      Bank Account Number :
                    </p>
                    {item.accountNumber}
                  </CardText>
                  <CardText tag="h6" className="text-center">
                    <p
                      style={{
                        color: "darkblue",
                        display: "inline",
                        lineHeight: "25px",
                      }}
                    >
                      IFSC Number :
                    </p>
                    {item.ifscNumber}
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </Col>
            {/* </Container> */}
          </Row>
          <div>
            {showPopup && (
              <Card>
                <CardBody>
                  <div className="popup">
                    <div className="popup-content">
                      <button className="close-button" onClick={handleClose}>
                        X
                      </button>
                      <CardText tag="h5">Edit Position</CardText>
                      <Form onSubmit={handlePostSubmit}>
                        <FormGroup>
                          <Input
                            type="select"
                            name="post"
                            id="post"
                            required
                            value={position.post}
                            onChange={(e) => {
                              setPosition({
                                ...position,
                                post: e.target.value,
                              });
                            }}
                          >
                            <option value="hr">HR</option>
                            <option value="counsellors">Counsellor</option>
                            <option value="trainers">Trainer</option>
                            <option value="digital-marketing">
                              Digital Marketing
                            </option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="select"
                            name="jobType"
                            id="jobType"
                            value={position.jobType}
                            onChange={(e) => {
                              setPosition({
                                ...position,
                                jobType: e.target.value,
                              });
                            }}
                          >
                            <option value="permanent">Permanent</option>
                            <option value="partTime">Part Time</option>
                            <option value="contract-basis">
                              Contract basis
                            </option>
                          </Input>
                        </FormGroup>
                        <Container className="text-center">
                          <Button
                            className="w-100 text-center"
                            color="primary"
                            outline
                            type="submit"
                          >
                            Save&nbsp;&nbsp;
                            <i className="fa-solid fa-bookmark"></i>
                          </Button>
                        </Container>
                      </Form>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>

          <div>
            {showSalaryPopup && (
              <Card>
                <CardBody>
                  <div className="popup">
                    <div className="popup-content">
                      <button className="close-button" onClick={salaryClose}>
                        X
                      </button>
                      <CardText tag="h5">Edit Salary</CardText>
                      <br />
                      <Form>
                        <FormGroup>
                          <Input
                            type="number"
                            name="salary"
                            id="salary"
                            value={updateSalary.salary}
                            onChange={(e) => {
                              setUpdateSalary({
                                ...updateSalary,
                                salary: e.target.value,
                              });
                            }}
                          />
                          <br />
                          <Container className="text-center">
                            <Button
                              className="w-100 text-center"
                              color="primary"
                              onClick={handleSalarySubmit}
                            >
                              Save&nbsp;&nbsp;
                              <i className="fa-solid fa-bookmark"></i>
                            </Button>
                          </Container>
                        </FormGroup>
                      </Form>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      ))}

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default MoreDetails;
