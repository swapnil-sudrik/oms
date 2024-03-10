import axios from "axios";
import { Avatar } from "primereact/avatar";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardText } from "reactstrap";
import base_url from "../../../api/SpringBootApi";
import { toast } from "react-toastify";

const Employee = ({ employee, update }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [visible, setVisible] = useState(true);

  const email = employee.email;

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
    if(employee.post==='trainers'){
      setVisible(false);
    }
    else{
      setVisible(true);
    }

    getProfilePhoto(email);
  });

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
  const deleteEmployee = (id) => {
    axios.delete(`${base_url}/employees/` + id).then(
      (response) => {
        toast.success("Employee Delete Success");
        update(id);
      },
      (error) => {
        toast.error("something went wrong. please try again..!!");
      }
    );
  };

  return (
    <div style={{ display: "inline-block", lineHeight: "15px" }}>
      <Card
        className="text-center mx-2 admin-welcome"
        style={{ width: "400px" }}
      >
        <CardBody>
          {/* <CardText> */}
          <Avatar
            image={profile}
            size="xlarge"
            style={{ width: "100px", height: "100px" }}
            shape="circle"
          />
          {/* </CardText> */}
          <CardText tag="h3" style={{ color: "darkblue" }}>
            {employee.fname} {employee.lname}
          </CardText>
          <CardText>{employee.post}</CardText>
          <CardText className="text-secondary">{employee.email}</CardText>

          <CardText>
            <Link
              to={`/more-details/${employee.emp_id}`}
              className="text-decoration-none"
            >
              <Button
                color="primary"
                outline
                className="py-1 px-2 more-details"
              >
                More details&nbsp;<i className="fa-solid fa-circle-info"></i>
              </Button>
            </Link>
            &nbsp;&nbsp;
            {visible && (
              <Link
                to={`/set-target/${employee.emp_id}`}
                className="text-decoration-none"
              >
                <Button
                  color="success"
                  outline
                  className="py-1 px-2 more-details"
                >
                  Set Target&nbsp;<i className="fa-solid fa-bullseye"></i>
                </Button>
              </Link>
            )}
            &nbsp;&nbsp;
            <Link
              onClick={() => {
                deleteEmployee(employee.emp_id);
              }}
              className="text-decoration-none"
            >
              <Button color="danger" outline className="py-1 px-2 more-details">
                Delete&nbsp;<i className="fa-solid fa-trash-can"></i>
              </Button>
            </Link>
          </CardText>
        </CardBody>
      </Card>
      <br /><br/>
    </div>
  );
};
export default Employee;
