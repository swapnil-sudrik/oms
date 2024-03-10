import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "../../api/SpringBootApi";
import { toast } from "react-toastify";
import WelcomeNavigation from "./WelcomeNavigation";
import Footer from "./Footer";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors , setErrors] = useState({});
  const naviate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    validateDetails(username, password);
  };

  const validateDetails = (username, password) => {
    const error={};
    if(username==""){
      error.username="Username is Required!"
      setErrors({...errors , error});
    }
    if(password==""){
      error.password="Password is Required!"
      setErrors({...errors , error});
    }
   
    axios.post(`${base_url}/login`, { username, password }).then(
      (response) => {
        const post = response.data.post;
        if (post === "admin") {
          naviate("/admin-home");
        }
        if (post === "hr") {
          naviate("/bnbnbn");
        }
        localStorage.setItem("email", username);
      },
      (error) => {
        toast.error("Incorrect username or password");
      }
    );
  };

  return (
    <div>
      <WelcomeNavigation url="/oms" btnName="Back" class="fa-backward" />
      <div className="my-5">
        <h2 className="text-center" style={{color:'darkblue'}}>We are The Future Team</h2>
        <br />
        <Container className="text-center" style={{ width: "300px" }}>
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <p className="text-center text-success">
                  Please login to your account
                </p>
                <Input
                  type="email"
                  id="uname"
                  name="uname"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  id="pass"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormGroup>

              <Button className="w-100" type="submit" color="primary">
                Login
              </Button>
              <br />
              <br />
              <Link className="text-decoration-none" to="#">
                Forgot password?
              </Link>
              <br />
            </Form>
        </Container>
      </div>
      <div
          style={{
          position: "absolute",
          bottom: "0",
          width: "-webkit-fill-available",
          fontSize:'10px'
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Login;
