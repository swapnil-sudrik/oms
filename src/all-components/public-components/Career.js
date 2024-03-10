import React, { useState } from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import Placement from "../../images/placement-vector.png";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import Frame from "../../images/Frame.png";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";
import { toast } from "react-toastify";

const Career = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    qualification: "",
    position: "",
    city: "",
    experiance: "",
  });

  const validate = (values) => {
    const error = {};

    const mobileNumber_pattern = /^\d{10}$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

    if (values.name === "") {
      error.name = "Name is Required!";
    }

    if (values.mobileNumber === "") {
      error.mobileNumber = "Mobile Number is Required!";
    } else if (!mobileNumber_pattern.test(values.mobileNumber)) {
      error.mobileNumber = "Mobile Number is Not Correct!";
    }
    if (values.email === "") {
      error.email = "Email is Required!";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email is Not Correct!";
    }

    if (values.qualification === "") {
      error.qualification = "Qualification is Required!";
    }

    if (values.position === "") {
      error.position = "Position is Required!";
    }
    if (values.city === "") {
      error.city = "City is Required!";
    }
    if (values.experiance === "") {
      error.experiance = "Experiance is Required!";
    }

    setErrors(error);

    if (Object.keys(error).length > 0) {
      toast.error("Invalid Inputs!");
    } else {
      toast.success("Form submitted successfully! We'll be in touch soon.");
      document.getElementById("form1").reset();
      setValues({
        name: "",
        mobileNumber: "",
        email: "",
        qualification: "",
        position: "",
        city: "",
        experiance: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(values);
  };

  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <div style={{ backgroundColor: "black" }}>
        <br />
        <h3 className="text-center text-light">
          Career Opportunities at Future Scope
        </h3>
        <hr className="text-light" />
        <div>
          <Container>
            <div className="main-container my-4">
              <div className="frame text-light my-4">
                <p>
                  Future Scope Software Training Institute that is trusted by
                  organizations across the globe. We are an Institute offering a
                  wide range of Master Courses in Data Software Engineering,
                  Full Stack Developer, AWS, and Data Science and AI. We have
                  been training students and transforming them into IT
                  Professionals for a decade.
                </p>
                <br />
                <p>
                  The reason behind becoming one of the most preferred IT
                  Training Institutes is that we offer global certifications
                  along with career guidance and placement assistance. Besides
                  that, the professors at our Institute are Experts from the
                  Industry which gives an authentic touch to our up-to-date and
                  interesting curriculum.
                </p>
                <br />
                <p>
                  We offer advanced IT Courses with Placements, making us stand
                  out in the market. Future Scope Institute is one step ahead as
                  we are offering IT jobs for freshers now. Our workplace is not
                  just about completing daily tasks, but it is more about having
                  a healthy as well as friendly environment for you to work in.
                </p>
                <br />
                <p>
                  Our platform offers a range of IT jobs for freshers, providing
                  an opportunity to build your career in the Tech Industry.
                </p>
              </div>
              <div className="frame my-4">
                <img src={Frame} alt="my-frame" className="frame-img" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div>
        <Container>
          <div className="text-center">
            <h3 className=" my-3">
              <b>Submit your application</b>
            </h3>
            <p>
              If the answer to your question missing or just want to enquire?
              Get in touch with us.
            </p>
          </div>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Form id="form1" onSubmit={handleSubmit}>
                  <Row>
                    <Col sm="6">
                      <FormGroup style={{ display: "inline" }}>
                        <p style={{ textAlign: "left" }}>Name</p>
                        <Input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          onChange={(e) => {
                            setValues({ ...values, name: e.target.value });
                          }}
                        />
                        {errors.name && (
                          <p
                            style={{
                              color: "red",
                              textAlign: "left",
                              margin: "0",
                            }}
                          >
                            {errors.name}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <p style={{ textAlign: "left" }}>Mobile Number</p>
                      <InputGroup>
                        <InputGroupText>+91</InputGroupText>
                        <Input
                          type="tel"
                          id="mobile-no"
                          name="mobile-no"
                          placeholder="Enter 10 digit Mobile Number"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              mobileNumber: e.target.value,
                            });
                          }}
                        />
                        {errors.mobileNumber && (
                          <p
                            style={{
                              color: "red",
                              textAlign: "left",
                              margin: "0",
                            }}
                          >
                            {errors.mobileNumber}
                          </p>
                        )}
                      </InputGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Email</p>
                    <Input
                      type="email"
                      name="email"
                      placeholder="e.g yourname@gmail.com"
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                      }}
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "red",
                          textAlign: "left",
                          margin: "0",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Your Qualification</p>
                    <Input
                      type="text"
                      name="qualification"
                      placeholder="e.g MBA , Graduate , Diploma"
                      onChange={(e) => {
                        setValues({ ...values, qualification: e.target.value });
                      }}
                    />
                    {errors.qualification && (
                      <p
                        style={{
                          color: "red",
                          textAlign: "left",
                          margin: "0",
                        }}
                      >
                        {errors.qualification}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>
                      Enter Department or Position
                    </p>
                    <Input
                      type="text"
                      name="companyName"
                      placeholder="e.g Accounts Manager"
                      onChange={(e) => {
                        setValues({ ...values, position: e.target.value });
                      }}
                    />
                    {errors.position && (
                      <p
                        style={{
                          color: "red",
                          textAlign: "left",
                          margin: "0",
                        }}
                      >
                        {errors.position}
                      </p>
                    )}
                  </FormGroup>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <p style={{ textAlign: "left" }}>City</p>
                        <Input
                          type="select"
                          onChange={(e) => {
                            setValues({ ...values, city: e.target.value });
                          }}
                        >
                          <option>Select</option>
                          <option value="0-2">Thane</option>
                          <option value="0-2">Pune</option>
                          <option value="0-2">Mumbai</option>
                          <option value="0-2">Navi Mumbai</option>
                          <option value="0-2">Chennai</option>
                          <option value="0-2">Bangalore</option>
                          <option value="0-2">Hyderabad</option>
                        </Input>
                        {errors.city && (
                          <p
                            style={{
                              color: "red",
                              textAlign: "left",
                              margin: "0",
                            }}
                          >
                            {errors.city}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <p style={{ textAlign: "left" }}>Experiance</p>
                        <Input
                          type="select"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              experiance: e.target.value,
                            });
                          }}
                        >
                          <option>Select</option>
                          <option value="0-2">0-2 Years</option>
                          <option value="0-2">3-5 Years</option>
                          <option value="0-2">6 or More</option>
                        </Input>
                        {errors.experiance && (
                          <p
                            style={{
                              color: "red",
                              textAlign: "left",
                              margin: "0",
                            }}
                          >
                            {errors.experiance}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    className="w-100"
                    type="submit"
                    style={{
                      backgroundColor: "#b9d719",
                      borderColor: "#b9d719",
                      color: "black",
                    }}
                  >
                    Submit&nbsp;<i className="fa-solid fa-paper-plane"></i>
                  </Button>
                </Form>
              </div>
              <div
                className="col-md-9 col-lg-6 col-xl-5 getInTouch my-4"
                style={{ width: "600px" }}
              >
                <img
                  src={Placement}
                  className="img-fluid my-5"
                  alt="get in touch"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <br />
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default Career;
