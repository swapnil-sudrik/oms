import React, { useState } from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  List,
  Row,
} from "reactstrap";
import GetInTouch from "../../images/draw.webp";
import Square from "../../images/g-square.png";
import { Divider } from "primereact/divider";
import { Image } from "react-bootstrap";
import Case from "../../images/case.svg";
import Tool from "../../images/tool.svg";
import Live from "../../images/live.svg";
import Money from "../../images/money.svg";
import Thinking from "../../images/thinking.svg";
import Certificate from "../../images/cetificate.svg";
import Adviser from "../../images/advisor.svg";
import Opportunity from "../../images/opportunity.svg";
import Doubt from "../../images/doubt.svg";
import NoCost from "../../images/no-cost.svg";
import EducationApp from "../../images/education-app.svg";
import StudyArea from "../../images/study-area.svg";
import AWS from "../../images/aws.webp";
import Eclipse from "../../images/eclipse.webp";
import Java from "../../images/java.webp";
import HTML from "../../images/html.webp";
import Jira from "../../images/jira.webp";
import Jquary from "../../images/jquery.webp";
import JS from "../../images/js.webp";
import Jtest from "../../images/jtest.webp";
import MongoDB from "../../images/mongodb.webp";
import MySQL from "../../images/mysql.webp";
import PyTest from "../../images/pytest.webp";
import Python from "../../images/python.webp";
import Scrum from "../../images/scrum.webp";
import Spring from "../../images/spring.webp";
import VS from "../../images/vs.webp";
import Bootstrap from "../../images/boostrap.webp";
import Angular from "../../images/angular.webp";
import CSS from "../../images/css.webp";
import Django from "../../images/django.webp";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MenuFooter from "./MenuFooter";
import { toast } from "react-toastify";
const Welcome = () => {
  const [open, setOpen] = useState("");
  const [values, setValues] = useState({
    mobileNumber: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const Validation = (values) => {
    const errors = {};

    const mobileNumber_pattern = /^\d{10}$/;
    const name_pattern = /^[a-zA-Z\s]+$/;
    //   const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]{2}$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    //name
    if (values.name === "") {
      errors.name = "Name is Required!";
    } else if (!name_pattern.test(values.name)) {
      errors.name = "Name is not correct";
    }
    //email
    if (values.email === "") {
      errors.email = "Email is Required!";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email is not correct";
    }
    //mobile number
    if (values.mobileNumber === "") {
      errors.mobileNumber = "Mobile Number is Required!";
    } else if (!mobileNumber_pattern.test(values.mobileNumber)) {
      errors.mobileNumber = "Mobile Number is not correct";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Enter Valid Inputs");
    } else {
      toast.success("Form submitted successfully! We'll be in touch soon.");
      document.getElementById("form").reset();
      document.getElementById("form1").reset();
      setValues({ mobileNumber: "", name: "", email: "" });
    }
  };
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    Validation(values);
  };
  return (
    <div>
      <WelcomeNavigation
        url="/login"
        btnName="Login"
        class="fa-right-to-bracket"
      />
      <div className="main-container my-5">
        {/* <CardBody> */}
        <div className="columns text-center">
          <h1 className="course-para">
            An Industry-aligned&nbsp;
            <b style={{ color: "limegreen" }}>
              Full
              <br /> Stack Development course
            </b>
            <br />
            with 100% Job Guarantee
          </h1>
          <br />
          <div className="cource">
            <p>
              <u>In association with</u> : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Image src={Square} alt="G Square" width="100" />
            </p>
          </div>
          <div className="a" style={{ justifyContent: "center" }}>
            <div className="b mx-1 my-1">
              Duration:
              <br />
              <span className="align-bottom">
                <b>
                  <i className="fa-solid fa-clock"></i> 12 Months
                </b>
              </span>
            </div>
            <div className="b mx-1 my-1">
              Case Studies:
              <br />
              <span className="align-bottom">
                <b>
                  <i className="fa-solid fa-book-open"></i> 15 +
                </b>
              </span>
            </div>
            <div className="b mx-1 my-1">
              Mode Of Training:
              <br />
              <span className="align-bottom">
                <b>
                  <i className="fa-solid fa-people-roof"></i> Classroom & Online
                </b>
              </span>
            </div>
          </div>
          <div className="my-4">
            <Container>
              <Button color="warning">
                Download Brochure&nbsp;
                <i className="fa-sharp fa-solid fa-rectangle-list"></i>
              </Button>
              &nbsp;
              <Link
                to="https://www.youtube.com/watch?v=od4hT9abIMQ"
                target="_blank"
                className="text-decoration-none"
              >
                <Button color="warning" className="my-2">
                  Course Intro&nbsp;<i className="fa-solid fa-video"></i>
                </Button>
              </Link>
            </Container>
          </div>
          <br />
        </div>
        {/* </CardBody> */}
        <div className="columns m-auto" style={{ marginRight: "-20px" }}>
          <Container className="text-center">
            <Card className="py-3 px-3 reg-card">
              <h4>Let's connect. We are just a click away!</h4>
              <div>
                <div className="reg-input">
                  <Form id="form" onSubmit={submitForm}>
                    <br />
                    <p style={{ textAlign: "left", lineHeight: "0" }}>
                      Mobile Number
                    </p>
                    <InputGroup className="">
                      <InputGroupText>+91</InputGroupText>
                      <Input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter 10 digit Mobile Number"
                        onChange={(e) => {
                          setValues({
                            ...values,
                            mobileNumber: e.target.value,
                          });
                        }}
                      />
                    </InputGroup>
                    {errors.mobileNumber && (
                      <p
                        style={{ color: "red", textAlign: "left", margin: "0" }}
                      >
                        {errors.mobileNumber}
                      </p>
                    )}
                    <br />
                    <FormGroup>
                      <p style={{ textAlign: "left", lineHeight: "0" }}>
                        Full Name
                      </p>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
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
                    <FormGroup>
                      <p style={{ textAlign: "left", lineHeight: "0" }}>
                        Email
                      </p>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. yourname@gmail.com"
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
                    <Button className="w-100" type="submit" color="success">
                      Submit&nbsp;<i className="fa-solid fa-paper-plane"></i>
                    </Button>
                  </Form>
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </div>

      {/* Full Stack Developer Curriculum */}
      <div className="curriculum">
        <br />
        <h1 className="text-center text-light">
          Full Stack Developer Curriculum
        </h1>
        <div className="main-container">
          <div className="column-curriculum">
            <Container>
              <br />
              <Card
                className="py-3 px-3"
                style={{ backgroundColor: "#22577a" }}
              >
                <CardTitle>
                  <h1 className="text-light text-center">
                    Industry Oriented Curriculum
                  </h1>
                </CardTitle>
                <CardText className="text-light">
                  An exhaustive curriculum designed by our industry experts
                  which will help you to get placed in your dream IT company
                </CardText>
                <br />
                <div
                  className="d-flex bg-light "
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    <Image src={Case} alt="case image" className="my-2 mx-2" />
                  </div>
                  <Divider layout="vertical" />
                  <div>
                    <CardText>
                      <h1>30 +</h1>
                      <br />
                    </CardText>
                    <CardText style={{ marginTop: "-50px" }}>
                      Case Studies & Projects
                    </CardText>
                  </div>
                </div>
                <br />
                <div
                  className="d-flex bg-light"
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    <Image src={Tool} alt="case image" className="my-2 mx-2" />
                  </div>
                  <Divider layout="vertical" />
                  <div>
                    <CardText>
                      <h1>25 +</h1>
                      <br />
                    </CardText>
                    <CardText style={{ marginTop: "-50px" }}>
                      Languages & Tools
                    </CardText>
                  </div>
                </div>
                <br />
                <div
                  className="d-flex bg-light"
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    <Image src={Live} alt="case image" className="my-2 mx-2" />
                  </div>
                  <Divider layout="vertical" />
                  <div>
                    <CardText className="text-left">
                      <h1>250 +</h1>
                      <br />
                    </CardText>
                    <CardText style={{ marginTop: "-50px" }}>
                      Live Sessions
                    </CardText>
                  </div>
                </div>
                <br />
                <br />
              </Card>
            </Container>
          </div>
          <div className="column-curriculum">
            <br />
            <Container>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">HTML5 & CSS3</AccordionHeader>
                  <AccordionBody accordionId="1">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Text formatting Tags</li>
                          <li>HTML Structures - List, Tables</li>
                          <li>HTML Forms</li>
                          <li>GET VS POST</li>
                          <li>Fieldset and Legend Tag</li>
                          <li>HTML5 elements</li>
                          <li>Audio,Video tags</li>
                          <li>Types of CSS</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>CSS Selectors</li>
                          <li>CSS Properties</li>
                          <li>CSS Advanced Properties</li>
                          <li>CSS3 Properties</li>
                          <li>Transition Properties</li>
                          <li>Keyframe Animation</li>
                          <li>Responsive Layout</li>
                          <li>Media Queries</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 2 */}
                <AccordionItem>
                  <AccordionHeader targetId="2">JavaScript</AccordionHeader>
                  <AccordionBody accordionId="2">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to JavaScript</li>
                          <li>Data Types and Variables</li>
                          <li>Operators and Expressions</li>
                          <li>Control Flow and Loops</li>
                          <li>Functions</li>
                          <li>Arrays</li>
                          <li>Objects</li>
                          <li>DOM Manipulation</li>
                          <li>Events</li>
                          <li>Asynchronous JavaScript and AJAX</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Error Handling and Debugging</li>
                          <li>Modules and Libraries</li>
                          <li>ES6+ Features</li>
                          <li>JSON and APIs</li>
                          <li>Regular Expressions</li>
                          <li>
                            JavaScript Frameworks (e.g., React, Angular, Vue.js)
                          </li>
                          <li>Testing JavaScript Code</li>
                          <li>JavaScript Best Practices</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>

                {/* 3 */}
                <AccordionItem>
                  <AccordionHeader targetId="3">Bootstrap 5.2</AccordionHeader>
                  <AccordionBody accordionId="3">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Bootstrap</li>
                          <li>Setting Up Bootstrap</li>
                          <li>Bootstrap Grid System</li>
                          <li>Responsive Design with Bootstrap</li>
                          <li>Typography and Text Utilities</li>
                          <li>Buttons and Button Groups</li>
                          <li>Navigation Bars</li>
                          <li>Forms and Form Controls</li>
                          <li>Alerts</li>
                          <li>Badges and Labels</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Modals</li>
                          <li>Dropdowns</li>
                          <li>Carousel and Slideshow</li>
                          <li>Accordion and Collapse</li>
                          <li>Tabs and Pills</li>
                          <li>Scrollspy</li>
                          <li>Utilities and Helper Classes</li>
                          <li>Customizing Bootstrap</li>
                          <li>Advanced Bootstrap Components</li>
                          <li>Best Practices for Bootstrap Development</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 4 */}
                <AccordionItem>
                  <AccordionHeader targetId="4">Angular</AccordionHeader>
                  <AccordionBody accordionId="4">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Angular</li>
                          <li>Setting Up Angular Development Environment</li>
                          <li>Components and Templates</li>
                          <li>Directives</li>
                          <li>Data Binding</li>
                          <li>Services and Dependency Injection</li>
                          <li>Routing and Navigation</li>
                          <li>Forms and Validation</li>
                          <li>HTTP and APIs</li>
                          <li>Angular CLI</li>
                          <li>Modules and Lazy Loading</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Angular Material</li>
                          <li>Angular Animation</li>
                          <li>Unit Testing in Angular</li>
                          <li>Angular Best Practices</li>
                          <li>State Management (e.g., NgRx)</li>
                          <li>Internationalization and Localization</li>
                          <li>Security in Angular Applications</li>
                          <li>Deployment and Build Optimization</li>
                          <li>Performance Optimization</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 5 */}
                <AccordionItem>
                  <AccordionHeader targetId="5">SQL</AccordionHeader>
                  <AccordionBody accordionId="5">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to SQL</li>
                          <li>Relational Database Management System (RDBMS)</li>
                          <li>SQL Data Types</li>
                          <li>SQL Syntax and Statements</li>
                          <li>SELECT Statement</li>
                          <li>Filtering and Sorting Data</li>
                          <li>Aggregate Functions</li>
                          <li>Joins</li>
                          <li>Subqueries</li>
                          <li>Views</li>
                          <li>Indexing and Optimization</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Data Manipulation Language (DML)</li>
                          <li>Data Definition Language (DDL)</li>
                          <li>Transactions and Concurrency Control</li>
                          <li>Database Security</li>
                          <li>Stored Procedures</li>
                          <li>Triggers</li>
                          <li>Normalization and Database Design</li>
                          <li>Advanced SQL Concepts</li>
                          <li>Performance Tuning</li>
                          <li>SQL Best Practices</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 6 */}
                <AccordionItem>
                  <AccordionHeader targetId="6">MongoDB</AccordionHeader>
                  <AccordionBody accordionId="6">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to MongoDB</li>
                          <li>Installation and Setup</li>
                          <li>CRUD Operations in MongoDB</li>
                          <li>Querying and Filtering Data</li>
                          <li>Indexes and Performance Optimization</li>
                          <li>Aggregation Framework</li>
                          <li>Data Modeling in MongoDB</li>
                          <li>Working with Embedded Documents</li>
                          <li>Data Validation and Schema Design</li>
                          <li>Transactions and Concurrency</li>
                          <li>Replication and High Availability</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Sharding and Scalability</li>
                          <li>Backup and Recovery</li>
                          <li>Security and Access Control</li>
                          <li>MongoDB Atlas and Cloud Deployment</li>
                          <li>MongoDB Compass and GUI Tools</li>
                          <li>MongoDB with Node.js</li>
                          <li>MongoDB with Python</li>
                          <li>MongoDB with Java</li>
                          <li>MongoDB with .NET</li>
                          <li>Monitoring and Performance Tuning</li>
                          <li>Best Practices for MongoDB Development</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 7 */}

                {/* 8 */}
                <AccordionItem>
                  <AccordionHeader targetId="8">
                    Python Programming
                  </AccordionHeader>
                  <AccordionBody accordionId="8">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Python</li>
                          <li>Python Installation and Setup</li>
                          <li>Python Syntax and Data Types</li>
                          <li>Variables and Operators</li>
                          <li>Conditional Statements</li>
                          <li>Loops</li>
                          <li>Functions</li>
                          <li>Modules and Packages</li>
                          <li>File Handling</li>
                          <li>Exception Handling</li>
                          <li>Object-Oriented Programming (OOP)</li>
                          <li>Inheritance and Polymorphism</li>
                          <li>Working with Databases</li>
                          <li>Regular Expressions</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Working with APIs</li>
                          <li>Web Scraping</li>
                          <li>
                            Python Libraries (e.g., NumPy, Pandas, Matplotlib)
                          </li>
                          <li>Testing and Debugging</li>
                          <li>Python Best Practices</li>
                          <li>Deployment and Packaging</li>
                          <li>Python Frameworks (e.g., Django, Flask)</li>
                          <li>Concurrency and Parallelism</li>
                          <li>Python for Data Science</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 9 */}
                <AccordionItem>
                  <AccordionHeader targetId="9">Core Java</AccordionHeader>
                  <AccordionBody accordionId="9">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Java</li>
                          <li>Java Development Environment Setup</li>
                          <li>Java Syntax and Data Types</li>
                          <li>Variables and Operators</li>
                          <li>Control Flow Statements</li>
                          <li>Arrays</li>
                          <li>Object-Oriented Programming (OOP) Concepts</li>
                          <li>Classes and Objects</li>
                          <li>Inheritance and Polymorphism</li>
                          <li>Interfaces and Abstract Classes</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Exception Handling</li>
                          <li>File Handling</li>
                          <li>Generics</li>
                          <li>Collections Framework</li>
                          <li>Multithreading</li>
                          <li>Java I/O</li>
                          <li>Networking and Sockets</li>
                          <li>Java GUI and Event Handling</li>
                          <li>Java Database Connectivity (JDBC)</li>
                          <li>Java Servlets</li>
                          <li>JavaServer Pages (JSP)</li>
                          <li>Java Persistence API (JPA)</li>
                          <li>Java Unit Testing</li>
                          <li>Java Best Practices</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 10 */}
                <AccordionItem>
                  <AccordionHeader targetId="10">
                    Django Framework
                  </AccordionHeader>
                  <AccordionBody accordionId="10">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Django</li>
                          <li>Setting Up Django Project</li>
                          <li>Django Models</li>
                          <li>Django Views</li>
                          <li>Django Templates</li>
                          <li>URLs and Routing</li>
                          <li>Django Forms</li>
                          <li>Database Connectivity with Django</li>
                          <li>Querying Data with Django ORM</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Django Authentication and Authorization</li>
                          <li>Django Admin Interface</li>
                          <li>File Handling and Storage</li>
                          <li>Django Middleware</li>
                          <li>Django REST Framework</li>
                          <li>Working with APIs</li>
                          <li>Testing Django Applications</li>
                          <li>Deployment and Production Considerations</li>
                          <li>Django Security Best Practices</li>
                          <li>Performance Optimization in Django</li>
                          <li>Caching in Django</li>
                          <li>Internationalization and Localization</li>
                          <li>Django Signals</li>
                          <li>Third-Party Libraries and Integrations</li>
                          <li>Django Project Structure and Best Practices</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 11 */}
                <AccordionItem>
                  <AccordionHeader targetId="11">Spring Boot</AccordionHeader>
                  <AccordionBody accordionId="11">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Spring Boot</li>
                          <li>Spring Boot Project Setup</li>
                          <li>Spring Boot Configuration</li>
                          <li>Spring Boot Annotations</li>
                          <li>Dependency Injection with Spring Boot</li>
                          <li>Spring Boot MVC</li>
                          <li>Spring Boot RESTful APIs</li>
                          <li>Spring Boot Data Access</li>
                          <li>Spring Boot and JPA</li>
                          <li>Spring Boot and Hibernate</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Spring Boot Security</li>
                          <li>Spring Boot Testing</li>
                          <li>Spring Boot Actuator</li>
                          <li>Spring Boot DevTools</li>
                          <li>Spring Boot Logging</li>
                          <li>Spring Boot Error Handling</li>
                          <li>Spring Boot Caching</li>
                          <li>Spring Boot Messaging (JMS, RabbitMQ)</li>
                          <li>Spring Boot and Microservices</li>
                          <li>Spring Boot and Docker</li>
                          <li>Spring Boot and Kubernetes</li>
                          <li>
                            Spring Boot Performance Monitoring and Optimization
                          </li>
                          <li>Spring Boot Best Practices</li>
                          <li>Project Work</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 12 */}
                <AccordionItem>
                  <AccordionHeader targetId="12">
                    SDLC & Agile Methodology
                  </AccordionHeader>
                  <AccordionBody accordionId="12">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to SDLC</li>
                          <li>Waterfall Model</li>
                          <li>Iterative Model</li>
                          <li>Spiral Model</li>
                          <li>V-Model</li>
                          <li>Agile Model</li>
                          <li>DevOps Model</li>
                          <li>Selection of SDLC Models</li>
                          <li>Requirements Gathering and Analysis</li>
                          <li>System Design</li>
                          <li>Coding and Implementation</li>
                          <li>Testing and Quality Assurance</li>
                          <li>Deployment and Maintenance</li>
                          <li>SDLC Documentation</li>
                          <li>Change Management</li>
                          <li>Project Management Methodologies</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Introduction to Agile Methodology</li>
                          <li>Agile Manifesto and Principles</li>
                          <li>Scrum Framework</li>
                          <li>Kanban Methodology</li>
                          <li>Extreme Programming (XP)</li>
                          <li>Lean Software Development</li>
                          <li>Feature-Driven Development (FDD)</li>
                          <li>Dynamic Systems Development Method (DSDM)</li>
                          <li>Agile Project Management</li>
                          <li>User Stories and Backlog</li>
                          <li>Sprint Planning and Execution</li>
                          <li>
                            Scrum Roles (Product Owner, Scrum Master,
                            Development Team)
                          </li>
                          <li>Agile Estimation and Planning</li>
                          <li>Continuous Integration and Delivery</li>
                          <li>Agile Testing and Quality Assurance</li>
                          <li>Retrospectives and Continuous Improvement</li>
                          <li>Scaling Agile</li>
                          <li>Agile Metrics and Reporting</li>
                          <li>Agile Leadership and Culture</li>
                          <li>Agile Project Management Tools</li>
                          <li>Agile Best Practices</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 13 */}
                <AccordionItem>
                  <AccordionHeader targetId="13">Scrum</AccordionHeader>
                  <AccordionBody accordionId="13">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Scrum</li>
                          <li>Agile Principles and Values</li>
                          <li>
                            Scrum Roles (Product Owner, Scrum Master,
                            Development Team)
                          </li>
                          <li>
                            Scrum Artifacts (Product Backlog, Sprint Backlog,
                            Increment)
                          </li>
                          <li>
                            Scrum Events (Sprint Planning, Daily Scrum, Sprint
                            Review, Sprint Retrospective)
                          </li>
                          <li>Scrum Ceremonies and Time-Boxes</li>
                          <li>Definition of Done</li>
                          <li>Creating and Refining the Product Backlog</li>
                          <li>Estimating and Prioritizing User Stories</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Sprint Planning and Sprint Goals</li>
                          <li>Executing the Sprint and Daily Scrum</li>
                          <li>Scrum Task Boards and Burn-Down Charts</li>
                          <li>Sprint Review and Product Increment</li>
                          <li>
                            Sprint Retrospective and Continuous Improvement
                          </li>
                          <li>Managing Change and Handling Impediments</li>
                          <li>Scaling Scrum and Distributed Teams</li>
                          <li>Scrum in Large Projects and Organizations</li>
                          <li>Advanced Scrum Concepts</li>
                          <li>Scrum Master Skills and Responsibilities</li>
                          <li>Product Owner Skills and Responsibilities</li>
                          <li>Development Team Skills and Collaboration</li>
                          <li>Scrum Tools and Software</li>
                          <li>
                            Scrum Certification and Professional Development
                          </li>
                          <li>Scrum Case Studies and Success Stories</li>
                          <li>Project Work and Scrum Simulation</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 14 */}
                <AccordionItem>
                  <AccordionHeader targetId="14">Jira</AccordionHeader>
                  <AccordionBody accordionId="14">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Jira</li>
                          <li>Jira Project Setup and Configuration</li>
                          <li>Jira Issue Types and Workflows</li>
                          <li>Jira Boards (Scrum Board, Kanban Board)</li>
                          <li>Jira Agile Methodologies</li>
                          <li>Jira Epics and Stories</li>
                          <li>Jira Sprints and Backlog</li>
                          <li>Jira Dashboards and Reporting</li>
                          <li>Jira Customization and Configuration</li>
                          <li>Jira Filters and JQL (Jira Query Language)</li>
                          <li>
                            Jira Integration with Development Tools (e.g., Git,
                            Bitbucket)
                          </li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Jira Service Management</li>
                          <li>Jira Automation and Workflows</li>
                          <li>Jira Plugins and Marketplace</li>
                          <li>Jira Permissions and User Management</li>
                          <li>Jira Administration and Best Practices</li>
                          <li>Jira Cloud vs. Jira Server</li>
                          <li>Jira Data Import and Export</li>
                          <li>Jira Advanced Reporting and Analytics</li>
                          <li>Jira Security and Access Control</li>
                          <li>Jira Migration and Upgrades</li>
                          <li>
                            Jira Software Development Lifecycle Integration
                          </li>
                          <li>Jira Tips, Tricks, and Productivity Hacks</li>
                          <li>Project Work and Case Studies</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 15 */}
                <AccordionItem>
                  <AccordionHeader targetId="15">
                    Manual Testing
                  </AccordionHeader>
                  <AccordionBody accordionId="15">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to Manual Testing</li>
                          <li>Software Development Life Cycle (SDLC)</li>
                          <li>Software Testing Life Cycle (STLC)</li>
                          <li>Testing Techniques and Strategies</li>
                          <li>Test Planning and Test Design</li>
                          <li>Test Case Creation and Execution</li>
                          <li>Test Execution and Defect Management</li>
                          <li>Defect Reporting and Tracking</li>
                          <li>
                            Types of Testing (Functional, Non-Functional, etc.)
                          </li>
                          <li>Unit Testing</li>
                          <li>Integration Testing</li>
                          <li>System Testing</li>
                          <li>User Acceptance Testing (UAT)</li>
                          <li>Regression Testing</li>
                          <li>Smoke and Sanity Testing</li>
                          <li>Black Box Testing</li>
                          <li>White Box Testing</li>
                          <li>Grey Box Testing</li>
                          <li>Boundary Value Analysis</li>
                          <li>Equivalence Partitioning</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Static Testing Techniques</li>
                          <li>Exploratory Testing</li>
                          <li>Ad-hoc Testing</li>
                          <li>Usability Testing</li>
                          <li>Compatibility Testing</li>
                          <li>Performance Testing</li>
                          <li>Security Testing</li>
                          <li>Localization and Internationalization Testing</li>
                          <li>Test Documentation</li>
                          <li>Test Management and Test Reporting</li>
                          <li>Risk-Based Testing</li>
                          <li>Testing in Agile Projects</li>
                          <li>Test Estimation and Test Effort Planning</li>
                          <li>Test Metrics and Measurements</li>
                          <li>Test Environment Setup and Test Data</li>
                          <li>Test Tools and Techniques</li>
                          <li>Quality Assurance and Quality Control</li>
                          <li>Defect Prevention and Process Improvement</li>
                          <li>Project Work and Case Studies</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 16 */}
                <AccordionItem>
                  <AccordionHeader targetId="16">Junit Testing</AccordionHeader>
                  <AccordionBody accordionId="16">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to JUnit</li>
                          <li>JUnit Test Structure</li>
                          <li>Writing Test Cases</li>
                          <li>Assertions in JUnit</li>
                          <li>Test Fixtures</li>
                          <li>Test Suites</li>
                          <li>
                            JUnit Annotations (e.g., @Test, @Before, @After)
                          </li>
                          <li>Parameterized Tests</li>
                          <li>Test Execution Order</li>
                          <li>JUnit Test Runners</li>
                          <li>JUnit Categories</li>
                          <li>JUnit Test Rules</li>
                          <li>JUnit Expected Exceptions</li>
                          <li>JUnit Timeout</li>
                          <li>JUnit Test Coverage</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>JUnit Test Reports</li>
                          <li>
                            JUnit Integration with Build Tools (e.g., Maven,
                            Gradle)
                          </li>
                          <li>JUnit Best Practices</li>
                          <li>JUnit and Test-Driven Development (TDD)</li>
                          <li>JUnit and Continuous Integration (CI)</li>
                          <li>JUnit and Mocking Frameworks (e.g., Mockito)</li>
                          <li>JUnit and Test Doubles</li>
                          <li>JUnit and Legacy Code</li>
                          <li>JUnit and Code Quality Metrics</li>
                          <li>JUnit and Code Coverage Tools</li>
                          <li>JUnit and Parameterized Test Data</li>
                          <li>JUnit and Test Automation</li>
                          <li>JUnit and Spring Framework Integration</li>
                          <li>JUnit and Android Testing</li>
                          <li>JUnit 5 Features and Enhancements</li>
                          <li>Project Work and Case Studies</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                {/* 17 */}
                <AccordionItem>
                  <AccordionHeader targetId="17">PyTest</AccordionHeader>
                  <AccordionBody accordionId="17">
                    <div className="d-flex">
                      <div>
                        <List>
                          <li>Introduction to pytest</li>
                          <li>Setting up pytest</li>
                          <li>Writing Test Functions</li>
                          <li>Test Discovery</li>
                          <li>Test Execution and Reporting</li>
                          <li>Assertions in pytest</li>
                          <li>Test Fixtures</li>
                          <li>Test Parameters and Data-driven Testing</li>
                          <li>Skipping Tests and Conditional Marking</li>
                          <li>Test Organization and Grouping</li>
                          <li>Fixture Scope and Dependency</li>
                          <li>Setup and Teardown Methods</li>
                          <li>Plugins and Extensibility</li>
                          <li>Mocking and Patching with pytest</li>
                          <li>Parametrizing Tests</li>
                          <li>Running Tests in Parallel</li>
                          <li>Code Coverage with pytest</li>
                          <li>Skipping and Skipping with Reason</li>
                        </List>
                      </div>
                      <div>
                        <List>
                          <li>Skipping and Skipping with Condition</li>
                          <li>Test Hooks and Configuration</li>
                          <li>pytest.ini Configuration</li>
                          <li>Pytest Markers and Custom Markers</li>
                          <li>Parametrizing Tests with CSV and Excel Files</li>
                          <li>Fixtures with Class-level Scope</li>
                          <li>Test-driven Development (TDD) with pytest</li>
                          <li>pytest and Continuous Integration (CI)</li>
                          <li>pytest and Mock Framework Integration</li>
                          <li>pytest and Selenium Web Testing</li>
                          <li>pytest and API Testing</li>
                          <li>pytest and Database Testing</li>
                          <li>pytest and Performance Testing</li>
                          <li>pytest and Code Quality</li>
                          <li>pytest and Test Reporting</li>
                          <li>pytest and Documentation</li>
                          <li>Project Work and Case Studies</li>
                        </List>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Container>
            <br />
          </div>
        </div>
      </div>

      {/* key highlights */}

      <div style={{ alignItems: "center", textAlign: "center" }}>
        <Container>
          <br />
          <h1 className="text-center">Key Highlights</h1>
          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Money}
                alt="img"
                style={{ width: "80px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  100% Job
                  <br /> Guarantee
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Thinking}
                alt="img"
                style={{ width: "67px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  100% Job
                  <br /> Guarantee
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Certificate}
                alt="img"
                style={{ width: "72px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  2 Global
                  <br /> Certifications
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "180px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Adviser}
                alt="img"
                style={{ width: "67px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  Weekday Weekend
                  <br /> Batches
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Opportunity}
                alt="img"
                style={{ width: "67px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  Personalized
                  <br /> Career Coach
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={Doubt}
                alt="img"
                style={{ width: "67px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  Instant Doubt
                  <br /> Solving
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={NoCost}
                alt="img"
                style={{ width: "67px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  No Cost EMI
                  <br /> option
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={EducationApp}
                alt="img"
                style={{ width: "45px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  Study
                  <br /> App/Material
                </h6>
              </CardText>
            </Card>
          </div>

          <div
            className="my-2 mx-4"
            style={{ width: "150px", display: "inline-block" }}
          >
            <Card className="py-3 px-3">
              <CardImg
                src={StudyArea}
                alt="img"
                style={{ width: "70px", margin: "auto" }}
              />
              <CardText className="text-center my-2">
                <h6>
                  Profile Building
                  <br /> Session
                </h6>
              </CardText>
            </Card>
          </div>
        </Container>
      </div>
      <br />
      <div style={{ backgroundColor: "black" }}>
        <Container>
          <Row className="py-3 px-3">
            <Col sm="7" className="text-center text-light m-auto">
              <p style={{ fontSize: "17px" }}>
                Industry-focused curriculum designed by industry experts to help
                students in understanding real-world case studies with a
                practical approach.
              </p>
            </Col>
            <Col sm="5" className="text-center m-auto">
              <Button color="warning">
                Download Brochure&nbsp;
                <i className="fa-solid fa-file-arrow-down"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div>
        <Container className="text-center">
          <h2 className="text-center">Programming Languages & Tools Covered</h2>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={AWS}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Eclipse}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Java}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={HTML}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Jira}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Jquary}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={JS}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Jtest}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={MongoDB}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={MySQL}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={PyTest}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Python}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Scrum}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Spring}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={VS}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Bootstrap}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Angular}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={CSS}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
          <div
            className="my-2 mx-2"
            style={{ width: "90px", display: "inline-block" }}
          >
            <Card className="py-3 px-3" style={{ mixBlendMode: "difference" }}>
              <CardImg
                src={Django}
                alt="img"
                style={{ width: "50px", margin: "auto" }}
              />
            </Card>
          </div>
        </Container>
      </div>
      <br />
      <hr />
      <br />

      <div>
        <Container>
          <h2 className="text-center">
            Let's connect. We are just a click away!
          </h2>
          <p className="text-center">
            We believe in giving the right guidance. Our team of career guide
            ninjas are ready to hear from you.
          </p>
          {/* <section className="vh-100"> */}
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Form id="form1" onSubmit={submitForm}>
                  <p style={{ textAlign: "left" }}>Mobile Number</p>
                  <InputGroup>
                    <InputGroupText>+91</InputGroupText>
                    <Input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter 10 digit Mobile Number"
                      onChange={(e) => {
                        setValues({
                          ...values,
                          mobileNumber: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                  {errors.mobileNumber && (
                    <p style={{ color: "red", textAlign: "left", margin: "0" }}>
                      {errors.mobileNumber}
                    </p>
                  )}
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Full Name</p>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
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
                  <FormGroup>
                    <p style={{ textAlign: "left" }}>Email</p>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
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
                  <Button className="w-100" type="submit" color="success">
                    Submit&nbsp;<i className="fa-solid fa-paper-plane"></i>
                  </Button>
                </Form>
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5 getInTouch">
                <img
                  src={GetInTouch}
                  className="img-fluid"
                  alt="get in touch"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <br />
      <br />
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default Welcome;
