import React, { useState } from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import { Dialog } from "primereact/dialog";
import {
  Button,
  Card,
  CardText,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  FormGroup,
} from "reactstrap";
import { Avatar } from "primereact/avatar";
import Candidate from "../../images/candidate.svg";
import Learning from "../../images/learning.svg";
import Company from "../../images/company.svg";
import Salary from "../../images/salary.svg";
import Pooja from "../../images/pooja-manchekar.webp";
import Diacto from "../../images/diacto.webp";
import Vamshi from "../../images/vamshi-gadde.webp";
import Scholenberg from "../../images/scholenberg-international.webp";
import Abhijit from "../../images/abhijit-mane.webp";
import SequerString from "../../images/sequelstring-solutions.webp";
import Akshita from "../../images/akshita-chormule.webp";
import Vyom from "../../images/vyom-labs.webp";
import Akshay from "../../images/akshay-jankar.webp";
import OneRoof from "../../images/oneroof.webp";
import Aniket from "../../images/aniket-talekar.webp";
import CloudStrats from "../../images/cloudstrats.webp";
import Rutuja from "../../images/rutuja-gaikwad.webp";
import Harshit from "../../images/harshit-jain.webp";
import Walchand from "../../images/walchand-institute.webp";
import Rakshita from "../../images/rakshita.webp";
import IDFC from "../../images/idfc.webp";
import Tejas from "../../images/tejas-gire.webp";
import Basai from "../../images/basal-analytics.webp";
import Career from "../../images/career.png";
import FAQ from "../../images/faq.png";
import Placement from "../../images/placement-vector.png";
import Footer from "./Footer";
import MenuFooter from "./MenuFooter";
import { toast } from "react-toastify";
const Placements = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [values, setValues] = useState({ mobileNumber: "" });
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);

  const [formError, setFormError] = useState({});
  const [formValues, setFormValues] = useState({
    mobileNumber: "",
    name: "",
    companyName: "",
    email: "",
    designation: "",
    interest: "",
  });
  const validate = (values) => {
    const errors = {};
    const mobileNumber_pattern = /^\d{10}$/;

    if (values.mobileNumber === "") {
      errors.mobileNumber = "Mobile Number is Required!";
    } else if (!mobileNumber_pattern.test(values.mobileNumber)) {
      errors.mobileNumber = "Mobile Number is not correct";
      // console.log("went")
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Enter Valid Inputs");
    } else {
      toast.success("Form submitted successfully! We'll be in touch soon.");
      document.getElementById("form").reset();
      setVisible(false);
      setValues({mobileNumber: ""});
    }
    return errors;
  };
  const validateForm = (formValues) => {
    const formError = {};
    const mobileNumber_pattern = /^\d{10}$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

    if (formValues.mobileNumber === "") {
      formError.mobileNumber = "Mobile Number is Required!";
    } else if (!mobileNumber_pattern.test(formValues.mobileNumber)) {
      formError.mobileNumber = "Mobile Number is not correct";
      // console.log("went")
    }
    if (formValues.email === "") {
      formError.email = "Email is Required!";
    } else if (!email_pattern.test(formValues.email)) {
      formError.email = "Email is Not Correct";
    }
    if (formValues.name === "") {
      formError.name = "Name is Required!";
    }
    if (formValues.companyName === "") {
      formError.companyName = "Company Name is Required!";
    }
    if (formValues.designation === "") {
      formError.designation = "Designation is Required!";
    }
    if (formValues.interest === "") {
      formError.interest = "Interest is Required!";
    }
    setFormError(formError);
    if (Object.keys(formError).length > 0) {
      toast.error("Enter Valid Inputs");
    } else {
      toast.success("Form submitted successfully! We'll be in touch soon.");
      document.getElementById("form1").reset();
      setFormValues({
        mobileNumber: "",
        name: "",
        companyName: "",
        email: "",
        designation: "",
        interest: "",
      });
    }
    return formError;
  };
  const submitMobileNumber = (e) => {
    e.preventDefault();
    validate(values);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm(formValues);
  };
  const currentDate = new Date(); // Get the current date

  const futureDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000); // Add three days (in milliseconds)

  const day = futureDate.getDate();
  const month = futureDate.toLocaleString("default", { month: "long" });
  const year = futureDate.getFullYear().toString().slice(-2);

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div id="placement">
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <div
        id="m"
        className="main-container"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        {/* <CardBody> */}
        <div className="columns text-center my-5">
          <h1 className="course-para">
            Future Scope Institute, leading&nbsp;
            <br />
            career-transforming
            <br />
            institute provides&nbsp;
            <b style={{ color: "#b9d719" }}>
              IT
              <br /> Courses with Placements
            </b>
          </h1>
          <br />
          <Container>
            <div>
              <h6 className="text-center m-auto">
                8000+ students have created their success stories with us. Are
                you excited to be the next one ?
              </h6>
            </div>
          </Container>
          <Container>
            <Button
              className="my-4 px-5 py-3"
              onClick={() => setVisible(true)}
              style={{
                backgroundColor: "#b9d719",
                borderColor: "#b9d719",
                color: "black",
              }}
            >
              <b style={{ fontSize: "18px" }}>Get Career Guidance</b>
              &nbsp;&nbsp;
              <img className="m-auto" src={Career} alt="img" width="30px" />
            </Button>
          </Container>
          <Dialog
            header="Our team of career guide ninjas are ready to guide you"
            visible={visible}
            // style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            <Container>
              <Form id="form" onSubmit={submitMobileNumber}>
                <p>Mobile Number</p>
                <InputGroup>
                  <InputGroupText>+91</InputGroupText>
                  <Input
                    type="tel"
                    id="mobile-no"
                    name="mobile-no"
                    placeholder="Enter 10 digit Mobile Number"
                    onChange={(e) => {
                      setValues({ mobileNumber: e.target.value });
                    }}
                  />
                </InputGroup>
                {errors.mobileNumber && (
                  <p style={{ color: "red", textAlign: "left", margin: "0" }}>
                    {errors.mobileNumber}
                  </p>
                )}
                <Container>
                  <Button className="w-100 my-4" type="submit" color="success">
                    Submit&nbsp;<i className="fa-solid fa-paper-plane"></i>
                  </Button>
                </Container>
              </Form>
            </Container>
          </Dialog>
        </div>
        <div className="columns m-auto my-5">
          <Container>
            <Card className="py-3 px-5 placement">
              <h6>Upcoming Drive ({formattedDate}) </h6>
              <br />
              <h1 style={{ fontFamily: "fantasy" }}>
                Campus Placement Drive with Applied Cloud Computing
              </h1>
              <br />
              Future Scope Training Institute provides
              <b style={{ display: "contents" }}>
                &nbsp;IT Courses with Placement.&nbsp;
              </b>
              Applied Cloud Computing acknowledges the fact that having an
              extensive understanding of AWS is of great importance. ACC pays
              attention to the Software Development capabilities which helps the
              clients achieve their business goals faster. Applies Cloud
              Computing has recently hired 18 AWS Programmers from Itvedant. The
              designations who were hired include Python and Java Developers.
              The highest package was upto 5Lac
              <Container className="text-center">
                <Button
                  color="primary"
                  onClick={() => setVisible(true)}
                  outline
                  className="w-50 my-4"
                >
                  Join Now
                </Button>
              </Container>
            </Card>
          </Container>
        </div>
      </div>
      <div>
        <Container>
          <div className="my-4 abt-main">
            <div className="abt">
              <Card className="my-3 mx-2 px-1 py-3 admin-welcome">
                <Avatar
                  image={Candidate}
                  size="xlarge"
                  shape="circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <CardText className="px-3" tag="h1">
                  5K+
                </CardText>
                <CardText className="px-3" tag="h4">
                  Students Trained
                </CardText>
              </Card>
            </div>
            <div className="abt">
              <Card className="my-3 mx-2 px-1 py-3 admin-welcome">
                <Avatar
                  image={Learning}
                  size="xlarge"
                  shape="circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <CardText className="px-3" tag="h1">
                  500+
                </CardText>
                <CardText className="px-3" tag="h4">
                  Hiring Companies
                </CardText>
              </Card>
            </div>
            <div className="abt">
              <Card className="my-3 mx-2 px-1 py-3 admin-welcome">
                <Avatar
                  image={Company}
                  size="xlarge"
                  shape="circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <CardText className="px-3" tag="h1">
                  200+
                </CardText>
                <CardText className="px-3" tag="h4">
                  Placement Drives
                </CardText>
              </Card>
            </div>
            <div className="abt">
              <Card className="my-3 mx-2 px-1 py-3 admin-welcome">
                <Avatar
                  image={Salary}
                  size="xlarge"
                  shape="circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <CardText className="px-3" tag="h1">
                  8LPA
                </CardText>
                <CardText className="px-3" tag="h4">
                  Highest Fresher Salary
                </CardText>
              </Card>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="bg-dark"
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <Container>
          <br />
          <h3 className="text-center text-light">Recent Placements </h3>
          <hr className="text-light" />
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Pooja} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Pooja Manchekar
              </CardText>
              <CardText tag="p">Data Analyst</CardText>
              <Avatar image={Diacto} />
              <CardText>Diacto Technologies</CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Vamshi} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Vamshi Gadde
              </CardText>
              <CardText tag="p">Web Developer</CardText>
              <Avatar image={Scholenberg} />
              <CardText>Scholenberg Ltd</CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Abhijit} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Abhijit Mane
              </CardText>
              <CardText tag="p">Web Developer</CardText>
              <Avatar image={SequerString} />
              <CardText>SequerString Ltd</CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Akshita} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Akshita Chormale
              </CardText>
              <CardText tag="p">Software Engineer</CardText>
              <Avatar image={Vyom} />
              <CardText>Vyom Labs</CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Akshay} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Akshay Jankar
              </CardText>
              <CardText tag="p">Software Engineer</CardText>
              <Avatar image={OneRoof} />
              <CardText>OneRoof LLP</CardText>
            </Card>
          </div>
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Aniket} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Aniket Talekar
              </CardText>
              <CardText tag="p">Full Stack Developer</CardText>
              <Avatar image={CloudStrats} />
              <CardText>CloudStrats</CardText>
            </Card>
          </div>
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Rutuja} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Rutuja Gaikwad
              </CardText>
              <CardText tag="p">AI & Analytics</CardText>
              <Avatar image={CloudStrats} />
              <CardText>CloudStrats</CardText>
            </Card>
          </div>
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Harshit} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Harshit Jain
              </CardText>
              <CardText tag="p">Software Engineer</CardText>
              <Avatar image={Walchand} />
              <CardText>Walchand Institute</CardText>
            </Card>
          </div>
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Rakshita} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Rakshita Rakshe
              </CardText>
              <CardText tag="p">Software Engineer</CardText>
              <Avatar image={IDFC} />
              <CardText>IDFC</CardText>
            </Card>
          </div>
          <div
            className="my-2 mx-1 align-item-center"
            style={{ display: "inline-block", alignItems: "center" }}
          >
            <Card
              className="py-3 px-3"
              style={{
                alignItems: "center",
                width: "180px",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Avatar image={Tejas} size="xlarge" shape="circle" />
              <CardText className="text-center my-2" tag="h6">
                Tejas Gire
              </CardText>
              <CardText tag="p">Web Developer</CardText>
              <Avatar image={Basai} />
              <CardText>BasaL Analytics</CardText>
            </Card>
          </div>
        </Container>
        <br />
      </div>

      <div>
        <Container>
          <h3 className="text-center my-4">
            Frequently Asked Questions About Our Placements
          </h3>

          <div className="my-5 faq-main">
            <div className="my-3 faq faq-col">
              <img src={FAQ} alt="FAQ" />
            </div>
            <div className="m-auto f faq-col">
              <Accordion flush open={open} toggle={toggle}>
                <AccordionItem
                  style={{
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="px-3"
                      style={{
                        borderRight: "1px dashed",
                      }}
                    >
                      <h3>01</h3>
                    </div>
                    <div>
                      <AccordionHeader targetId="1" tag="h1">
                        <b style={{ color: "darkblue" }}>
                          What is the Qualification Required to Enroll me in the
                          Data Science with AI & AWS Course?
                        </b>
                      </AccordionHeader>
                      <AccordionBody accordionId="1">
                        Individuals with a minimum qualification of 12th can
                        enroll in our Data Science with AI & AWS Course.
                      </AccordionBody>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  style={{
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className=" px-3"
                      style={{
                        borderRight: "1px dashed",
                      }}
                    >
                      <h3>02</h3>
                    </div>
                    <div>
                      <AccordionHeader targetId="2">
                        <b style={{ color: "darkblue" }}>
                          What is the Duration of the Master Courses?
                        </b>
                      </AccordionHeader>
                      <AccordionBody accordionId="2">
                        Duration of the Data Science with AI & AWS Course will
                        be 12 Months. However, a student becomes job-ready
                        within the first six months of the course as we teach
                        them all the essential tools and this helps them become
                        industry-ready before their course completion.
                      </AccordionBody>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem
                  style={{
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="px-3"
                      style={{
                        borderRight: "1px dashed",
                      }}
                    >
                      <h3>03</h3>
                    </div>
                    <div>
                      <AccordionHeader targetId="3">
                        <b style={{ color: "darkblue" }}>
                          Can I Pay the Total Fee for my Master's Courses In
                          EMIs?
                        </b>
                      </AccordionHeader>
                      <AccordionBody accordionId="3">
                        Yes, you can benefit from the option- No Cost EMIs (No
                        Interest) at our Institute. To avail of this option, you
                        will be needed to pay 25% of the fees as the first down
                        payment and the remaining fees in 12 Months
                        installments. Therefore, yes, students do get the option
                        to pay their Data Science with AI & AWS Course fees in
                        installments.
                      </AccordionBody>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  style={{
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="px-3"
                      style={{
                        borderRight: "1px dashed",
                      }}
                    >
                      <h3>04</h3>
                    </div>
                    <div>
                      <AccordionHeader targetId="4">
                        <b style={{ color: "darkblue" }}>
                          Can I Expect to Receive Placement Calls?
                        </b>
                      </AccordionHeader>
                      <AccordionBody accordionId="4">
                        Future Scope Institute has a very strong Placement Cell
                        which ensures every student gets placed. So, you will
                        start getting placement alerts in your student portal
                        right after enlisting in the course. You may also
                        receive unlimited placement calls from Our Team.
                      </AccordionBody>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  style={{
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="px-3"
                      style={{
                        borderRight: "1px dashed",
                      }}
                    >
                      <h3>05</h3>
                    </div>
                    <div>
                      <AccordionHeader targetId="5">
                        <b style={{ color: "darkblue" }}>
                          Will I be Granted any Certificate at the End of the
                          Master's Course?
                        </b>
                      </AccordionHeader>
                      <AccordionBody accordionId="5">
                        After having completed your course, a Masters's
                        Certificate for the same will be granted from Future
                        Scope Institute.
                      </AccordionBody>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
      <hr />

      <div>
        <Container>
          <div className="text-center">
            <h3 className=" my-3">
              Are you finding the Right Talent for you Organization?
            </h3>
            <p>Our fresh talent pool can connect the dots to your growth</p>
          </div>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Form id="form1" onSubmit={handleFormSubmit}>
                  <p style={{ textAlign: "left" }}>Mobile Number</p>
                  <InputGroup>
                    <InputGroupText>+91</InputGroupText>
                    <Input
                      type="tel"
                      id="mobile-no"
                      name="mobile-no"
                      placeholder="Enter 10 digit Mobile Number"
                      // required
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          mobileNumber: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                  {formError.mobileNumber && (
                    <p style={{ color: "red", textAlign: "left", margin: "0" }}>
                      {formError.mobileNumber}
                    </p>
                  )}
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Full Name</p>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      onChange={(e) => {
                        setFormValues({ ...formValues, name: e.target.value });
                      }}
                    />
                    {formError.name && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {formError.name}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Company Name</p>
                    <Input
                      type="text"
                      name="companyName"
                      placeholder="e.g google inc."
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          companyName: e.target.value,
                        });
                      }}
                    />
                    {formError.companyName && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {formError.companyName}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Email</p>
                    <Input
                      type="email"
                      name="email"
                      placeholder="e.g yourname@gmail.com"
                      onChange={(e) => {
                        setFormValues({ ...formValues, email: e.target.value });
                      }}
                    />
                    {formError.email && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {formError.email}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Your Designation</p>
                    <Input
                      type="text"
                      placeholder="e.g HR"
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          designation: e.target.value,
                        });
                      }}
                    />
                    {formError.designation && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {formError.designation}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Your looking for:</p>
                    <Input
                      type="select"
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          interest: e.target.value,
                        });
                      }}
                    >
                      <option>Select Your Interest</option>
                      <option value="trainer">Trainer</option>
                      <option value="counsellor">Counsellor</option>
                      <option value="dm">Digital Marketing</option>
                      <option value="hr">HR</option>
                    </Input>
                    {formError.interest && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {formError.interest}
                      </p>
                    )}
                  </FormGroup>
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
export default Placements;
