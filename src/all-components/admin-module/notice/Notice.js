import React, { useEffect, useState } from "react";
import AdminNavigation from "../../admin-module/home/AdminNavigation";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Footer from "../../public-components/Footer";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Notice = () => {
 const navigate = useNavigate();

  useEffect(() => {
    document.title = "send Notice";
  });

  const [formData, setFormData] = useState({
    forWho: " ",
    subject: " ",
    noticeBody: " ",
  });

  const sendNoticeToEmployee = async () => {
    try {
      const response = await axios.post(`${base_url}/sendNotice`, formData);
      console.log(response);
      document.getElementById("form").reset();
      navigate("/notice");
      toast.success("Notice send..");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ? Notice not Send ..!");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="my-3 notice m-auto">
        <Card className="py-2 px-2 admin-welcome">
          <CardBody>
            <CardText tag="h4" className="text-center text-primary">
              Notice
            </CardText>
            <Form id="form">
              <FormGroup>
                <Label htmlFor="forWho">Select Employee</Label>
                <Input
                  type="select"
                  id="forWho"
                  name="forWho"
                  onChange={handleChange}
                >
                  <option value="select" selected>Select Employee Type</option>
                  <option value="All-Employee">All Employees</option>
                  <option value="digital-marketing" >Digital Marketing</option>
                  <option value="counsellor">Counsellor's</option>
                  <option value="trainer">Trainer's</option>
                  <option value="hr">HR's</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Notice Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="e.g.: Meeting Cancellation Notice"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="noticeBody">Description</Label>
                <Input
                  type="textarea"
                  id="noticeBody"
                  name="noticeBody"
                  rows="4"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  color="success"
                  onClick={sendNoticeToEmployee}
                  className="w-100"
                >
                  Send&nbsp;<i className="fa-solid fa-paper-plane"></i>
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "-webkit-fill-available",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};
export default Notice;
