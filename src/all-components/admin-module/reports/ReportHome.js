import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  List,
  ListGroupItem,
  Row,
} from "reactstrap";
import AdminNavigation from "../home/AdminNavigation";
import { Link } from "react-router-dom";
const ReportHome = () => {
  const [startValid, setStartValid] = useState(false);
  const [endValid, setEndValid] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("start-date"))
    console.log(data.get("end-date"));
  }

  const handleStartDateChange = (e) => {
    const selected = e.target.valueAsDate;
    if (selected && selected.getDate() === new Date().getDate() + 1) {
      // check if the selected date is tomorrow
      alert("You cannot select tomorrow's date!");
      setSelectedStartDate(null); // reset the selected date to null
      e.target.value = ""; // clear the input value
    } else {
      setStartValid(true);
      setSelectedStartDate(selected);
    }
  };

  const handleEndDateChange = (e) => {
    const selected = e.target.valueAsDate;
    if (selected && selected.getDate() === new Date().getDate() + 1) {
      // check if the selected date is tomorrow
      alert("You cannot select tomorrow's date!");
      setSelectedEndDate(null); // reset the selected date to null
      e.target.value = ""; // clear the input value
    } else {
      setEndValid(true);
      setSelectedEndDate(selected);
    }
  };

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
            <h4>Admin Dashboard</h4>
      </div>
      <div className="my-margin">
        <Card className="text-center emp-card my-1 mx-2  m-auto">
          <CardBody>
            <List type="inline">
              <Link to="/personal-report" className="report-btn radius-start">
                <ListGroupItem>Personal Reports</ListGroupItem>
              </Link>
              <Link to="/team-report" className="report-btn">
                <ListGroupItem>Team Reports</ListGroupItem>
              </Link>
              <Link to="/leave-report" className="report-btn">
                <ListGroupItem>Leave Reports</ListGroupItem>
              </Link>
              <Link to="/payroll-report" className="report-btn">
                <ListGroupItem>Payroll Reports</ListGroupItem>
              </Link>
              <Link to="/contact-report" className="report-btn">
                <ListGroupItem>Contact Reports</ListGroupItem>
              </Link>
              <Link to="/email-report" className="report-btn">
                <ListGroupItem>Email Reports</ListGroupItem>
              </Link>
              <Link to="/security-report" className="report-btn">
                <ListGroupItem>Security Reports</ListGroupItem>
              </Link>
              <Link to="/work-from-home" className="report-btn radius-end">
                <ListGroupItem>Work From Home</ListGroupItem>
              </Link>
            </List>
          </CardBody>
        </Card>
      </div><br/>
      <div className=" my-1 my-margin">
        <Card className="trainer-welcome emp-card my-1 mx-2">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Container>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="start-date">From</Label>
                      <Input
                        type="date"
                        value={
                          selectedStartDate
                            ? selectedStartDate.toISOString().split("T")[0]
                            : ""
                        }
                        max={new Date().toISOString().split("T")[0]}
                        onChange={handleStartDateChange}
                        id="start-date"
                        name="start-date"
                        invalid={!startValid}
                        // placeholder="Start Date"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="end-date">To</Label>
                      <Input
                        type="date"
                        value={
                          selectedEndDate
                            ? selectedEndDate.toISOString().split("T")[0]
                            : ""
                        }
                        max={new Date().toISOString().split("T")[0]}
                        onChange={handleEndDateChange}
                        id="end-date"
                        name="end-date"
                        invalid={!endValid}
                        // placeholder="End Date"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" className="text-center  m-auto">
                    <Button
                      className="w-50"
                      type="submit"
                      color="primary"
                      outline
                      disabled={!startValid && !endValid}
                    >
                      Apply Filter
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>

    </div>
  );
};
export default ReportHome;
