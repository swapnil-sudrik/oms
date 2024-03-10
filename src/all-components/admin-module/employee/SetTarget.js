import React, { useEffect, useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
const SetTarget = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [target , setTarget] = useState({});
  const { emp_id } = useParams();

  useEffect(() => {
    getEmployeeDetails(emp_id);
  }, []);

  const getEmployeeDetails = (id) => {
    axios.get(`${base_url}/employee/` + id).then(
      (response) => {
        setEmployeeData(response.data);
        const data = response.data;
        var post = data.map((item) => item.post);
        myPost(post);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const myPost =(post)=>{
    console.log(post);
    if(post=='hr'){
      setTarget({vacancyPost:"Vacancy Post",vacancy:'No Of Vacancies' , type:'text' , placeholder:'e.g. Java Trainer' ,placeholder1:'2 vacancies'});
    }
    else if(post=='counsellors'){
      setTarget({vacancyPost:'No Of Students' ,vacancy:'Total Collection', type:'number' , placeholder:'10 student in month' ,placeholder1:'30000 in month'});
    }
    else if(post=='digital-marketing'){
      setTarget({vacancyPost:'No Of Business' ,vacancy:'Total Collection', type:'number' , placeholder:'10 Business in month', placeholder1:'30000 in month'});
    }
    return post;
  }

 

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      {employeeData.map((item) => (
        <div>
          <div className="my-3 notice m-auto">
            <Card className="py-2 px-2 admin-welcome">
              <CardBody>
                <CardText tag="h4" className="text-center text-success">
                 <u> Set Target to<b className="text-dark"> {item.fname}</b></u>
                </CardText>
                <Form>
                  <FormGroup>
                    <Label htmlFor="email">Employee Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={item.email}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">{target.vacancyPost}</Label>
                    <Input
                      type={target.type}
                      name="subject"
                      id="subject"
                      placeholder={target.placeholder}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="vaccancy">{target.vacancy}</Label>
                    <Input
                      type="number"
                      id="vaccancy"
                      name="vaccancy"
                      placeholder={target.placeholder1}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="success" className="w-100">
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
      ))}
    </div>
  );
};

export default SetTarget;
