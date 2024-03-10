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
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import AdminNavigation from "../home/AdminNavigation";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../../public-components/Footer";
const Registration = () => {
  const email=localStorage.getItem("email");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    bdate: "",
    post: "",
    hrEmail:email,
    salary: "",
    jdate: "",
    mobileNumber: "",
    address: "",
    adharNumber: "",
    panNumber: "",
    accountNumber: "",
    ifscNumber: "",
    branch: "",
    password: "",
    confirmPassword: "",
    image: null,
    nationality: "",
    bloodGroup: "",
    gender: "",
    jobType: "",
    bankName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("fname", formData.fname);
    formDataToSend.append("mname", formData.mname);
    formDataToSend.append("lname", formData.lname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("bdate", formData.bdate);
    formDataToSend.append("post", formData.post);
    formDataToSend.append("hrEmail", formData.hrEmail);
    formDataToSend.append("salary", formData.salary);
    formDataToSend.append("jdate", formData.jdate);
    formDataToSend.append("mobileNumber", formData.mobileNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("adharNumber", formData.adharNumber);
    formDataToSend.append("panNumber", formData.panNumber);
    formDataToSend.append("accountNumber", formData.accountNumber);
    formDataToSend.append("ifscNumber", formData.ifscNumber);
    formDataToSend.append("branch", formData.branch);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("nationality", formData.nationality);
    formDataToSend.append("bloodGroup", formData.bloodGroup);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("jobType", formData.jobType);
    formDataToSend.append("bankName", formData.bankName);
    newEmployee(formDataToSend);
    console.log(formDataToSend);
    console.log(formData);
  };
  const newEmployee = (data) => {
    axios.post(`${base_url}/add-employee`, data).then(
      (response) => {
        toast.success("Successful Employee Added..");
        navigate("/admin-home");
      },
      (error) => {
        toast.error("Something went wrong !");
      }
    );
  };

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      {/* login form */}
      <div className="my-4 my-margin">
        <Card className="admin-welcome py-2 px-1 mx-3">
          <CardBody>
            <h3 className="text-center" style={{ color: "darkblue" }}>
              <b>Register New Employee</b>
            </h3>
            <Form id="form" onSubmit={handleSubmit}>
              <Row>
                <hr />
                <h6 className="text-center">
                  <b>Personal Information</b>
                </h6>
                <hr />
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="fname">First Name</Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. John"
                      required
                      value={formData.fname}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="mname">Middle Name</Label>
                    <Input
                      type="text"
                      id="mname"
                      name="mname"
                      placeholder="e.g. Christopher"
                      required
                      value={formData.mname}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="e.g Depp"
                      required
                      value={formData.lname}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g john@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="bdate">Birth Date</Label>
                    <Input
                      type="date"
                      id="bdate"
                      name="bdate"
                      required
                      value={formData.bdate}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="image">Profile Photo</Label>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      // value={formData.image}
                      onChange={handleFileInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="enter employee address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input
                      type="select"
                      name="nationality"
                      id="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- select one --</option>
                      <option value="afghan">Afghan</option>
                      <option value="albanian">Albanian</option>
                      <option value="algerian">Algerian</option>
                      <option value="american">American</option>
                      <option value="andorran">Andorran</option>
                      <option value="angolan">Angolan</option>
                      <option value="antiguans">Antiguans</option>
                      <option value="argentinean">Argentinean</option>
                      <option value="armenian">Armenian</option>
                      <option value="australian">Australian</option>
                      <option value="austrian">Austrian</option>
                      <option value="azerbaijani">Azerbaijani</option>
                      <option value="bahamian">Bahamian</option>
                      <option value="bahraini">Bahraini</option>
                      <option value="bangladeshi">Bangladeshi</option>
                      <option value="barbadian">Barbadian</option>
                      <option value="barbudans">Barbudans</option>
                      <option value="batswana">Batswana</option>
                      <option value="belarusian">Belarusian</option>
                      <option value="belgian">Belgian</option>
                      <option value="belizean">Belizean</option>
                      <option value="beninese">Beninese</option>
                      <option value="bhutanese">Bhutanese</option>
                      <option value="bolivian">Bolivian</option>
                      <option value="bosnian">Bosnian</option>
                      <option value="brazilian">Brazilian</option>
                      <option value="british">British</option>
                      <option value="bruneian">Bruneian</option>
                      <option value="bulgarian">Bulgarian</option>
                      <option value="burkinabe">Burkinabe</option>
                      <option value="burmese">Burmese</option>
                      <option value="burundian">Burundian</option>
                      <option value="cambodian">Cambodian</option>
                      <option value="cameroonian">Cameroonian</option>
                      <option value="canadian">Canadian</option>
                      <option value="cape verdean">Cape Verdean</option>
                      <option value="central african">Central African</option>
                      <option value="chadian">Chadian</option>
                      <option value="chilean">Chilean</option>
                      <option value="chinese">Chinese</option>
                      <option value="colombian">Colombian</option>
                      <option value="comoran">Comoran</option>
                      <option value="congolese">Congolese</option>
                      <option value="costa rican">Costa Rican</option>
                      <option value="croatian">Croatian</option>
                      <option value="cuban">Cuban</option>
                      <option value="cypriot">Cypriot</option>
                      <option value="czech">Czech</option>
                      <option value="danish">Danish</option>
                      <option value="djibouti">Djibouti</option>
                      <option value="dominican">Dominican</option>
                      <option value="dutch">Dutch</option>
                      <option value="east timorese">East Timorese</option>
                      <option value="ecuadorean">Ecuadorean</option>
                      <option value="egyptian">Egyptian</option>
                      <option value="emirian">Emirian</option>
                      <option value="equatorial guinean">
                        Equatorial Guinean
                      </option>
                      <option value="eritrean">Eritrean</option>
                      <option value="estonian">Estonian</option>
                      <option value="ethiopian">Ethiopian</option>
                      <option value="fijian">Fijian</option>
                      <option value="filipino">Filipino</option>
                      <option value="finnish">Finnish</option>
                      <option value="french">French</option>
                      <option value="gabonese">Gabonese</option>
                      <option value="gambian">Gambian</option>
                      <option value="georgian">Georgian</option>
                      <option value="german">German</option>
                      <option value="ghanaian">Ghanaian</option>
                      <option value="greek">Greek</option>
                      <option value="grenadian">Grenadian</option>
                      <option value="guatemalan">Guatemalan</option>
                      <option value="guinea-bissauan">Guinea-Bissauan</option>
                      <option value="guinean">Guinean</option>
                      <option value="guyanese">Guyanese</option>
                      <option value="haitian">Haitian</option>
                      <option value="herzegovinian">Herzegovinian</option>
                      <option value="honduran">Honduran</option>
                      <option value="hungarian">Hungarian</option>
                      <option value="icelander">Icelander</option>
                      <option value="indian">Indian</option>
                      <option value="indonesian">Indonesian</option>
                      <option value="iranian">Iranian</option>
                      <option value="iraqi">Iraqi</option>
                      <option value="irish">Irish</option>
                      <option value="israeli">Israeli</option>
                      <option value="italian">Italian</option>
                      <option value="ivorian">Ivorian</option>
                      <option value="jamaican">Jamaican</option>
                      <option value="japanese">Japanese</option>
                      <option value="jordanian">Jordanian</option>
                      <option value="kazakhstani">Kazakhstani</option>
                      <option value="kenyan">Kenyan</option>
                      <option value="kittian and nevisian">
                        Kittian and Nevisian
                      </option>
                      <option value="kuwaiti">Kuwaiti</option>
                      <option value="kyrgyz">Kyrgyz</option>
                      <option value="laotian">Laotian</option>
                      <option value="latvian">Latvian</option>
                      <option value="lebanese">Lebanese</option>
                      <option value="liberian">Liberian</option>
                      <option value="libyan">Libyan</option>
                      <option value="liechtensteiner">Liechtensteiner</option>
                      <option value="lithuanian">Lithuanian</option>
                      <option value="luxembourger">Luxembourger</option>
                      <option value="macedonian">Macedonian</option>
                      <option value="malagasy">Malagasy</option>
                      <option value="malawian">Malawian</option>
                      <option value="malaysian">Malaysian</option>
                      <option value="maldivan">Maldivan</option>
                      <option value="malian">Malian</option>
                      <option value="maltese">Maltese</option>
                      <option value="marshallese">Marshallese</option>
                      <option value="mauritanian">Mauritanian</option>
                      <option value="mauritian">Mauritian</option>
                      <option value="mexican">Mexican</option>
                      <option value="micronesian">Micronesian</option>
                      <option value="moldovan">Moldovan</option>
                      <option value="monacan">Monacan</option>
                      <option value="mongolian">Mongolian</option>
                      <option value="moroccan">Moroccan</option>
                      <option value="mosotho">Mosotho</option>
                      <option value="motswana">Motswana</option>
                      <option value="mozambican">Mozambican</option>
                      <option value="namibian">Namibian</option>
                      <option value="nauruan">Nauruan</option>
                      <option value="nepalese">Nepalese</option>
                      <option value="new zealander">New Zealander</option>
                      <option value="ni-vanuatu">Ni-Vanuatu</option>
                      <option value="nicaraguan">Nicaraguan</option>
                      <option value="nigerien">Nigerien</option>
                      <option value="north korean">North Korean</option>
                      <option value="northern irish">Northern Irish</option>
                      <option value="norwegian">Norwegian</option>
                      <option value="omani">Omani</option>
                      <option value="pakistani">Pakistani</option>
                      <option value="palauan">Palauan</option>
                      <option value="panamanian">Panamanian</option>
                      <option value="papua new guinean">
                        Papua New Guinean
                      </option>
                      <option value="paraguayan">Paraguayan</option>
                      <option value="peruvian">Peruvian</option>
                      <option value="polish">Polish</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="qatari">Qatari</option>
                      <option value="romanian">Romanian</option>
                      <option value="russian">Russian</option>
                      <option value="rwandan">Rwandan</option>
                      <option value="saint lucian">Saint Lucian</option>
                      <option value="salvadoran">Salvadoran</option>
                      <option value="samoan">Samoan</option>
                      <option value="san marinese">San Marinese</option>
                      <option value="sao tomean">Sao Tomean</option>
                      <option value="saudi">Saudi</option>
                      <option value="scottish">Scottish</option>
                      <option value="senegalese">Senegalese</option>
                      <option value="serbian">Serbian</option>
                      <option value="seychellois">Seychellois</option>
                      <option value="sierra leonean">Sierra Leonean</option>
                      <option value="singaporean">Singaporean</option>
                      <option value="slovakian">Slovakian</option>
                      <option value="slovenian">Slovenian</option>
                      <option value="solomon islander">Solomon Islander</option>
                      <option value="somali">Somali</option>
                      <option value="south african">South African</option>
                      <option value="south korean">South Korean</option>
                      <option value="spanish">Spanish</option>
                      <option value="sri lankan">Sri Lankan</option>
                      <option value="sudanese">Sudanese</option>
                      <option value="surinamer">Surinamer</option>
                      <option value="swazi">Swazi</option>
                      <option value="swedish">Swedish</option>
                      <option value="swiss">Swiss</option>
                      <option value="syrian">Syrian</option>
                      <option value="taiwanese">Taiwanese</option>
                      <option value="tajik">Tajik</option>
                      <option value="tanzanian">Tanzanian</option>
                      <option value="thai">Thai</option>
                      <option value="togolese">Togolese</option>
                      <option value="tongan">Tongan</option>
                      <option value="trinidadian or tobagonian">
                        Trinidadian or Tobagonian
                      </option>
                      <option value="tunisian">Tunisian</option>
                      <option value="turkish">Turkish</option>
                      <option value="tuvaluan">Tuvaluan</option>
                      <option value="ugandan">Ugandan</option>
                      <option value="ukrainian">Ukrainian</option>
                      <option value="uruguayan">Uruguayan</option>
                      <option value="uzbekistani">Uzbekistani</option>
                      <option value="venezuelan">Venezuelan</option>
                      <option value="vietnamese">Vietnamese</option>
                      <option value="welsh">Welsh</option>
                      <option value="yemenite">Yemenite</option>
                      <option value="zambian">Zambian</option>
                      <option value="zimbabwean">Zimbabwean</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <Input
                      type="select"
                      name="bloodGroup"
                      id="bloodGroup"
                      value={formData.bloodGroup}
                      required
                      onChange={handleInputChange}
                    >
                      <option>--Select Blood Group --</option>
                      <option value="a+">A+</option>
                      <option value="a-">A-</option>
                      <option value="b+">B+</option>
                      <option value="b-">B-</option>
                      <option value="ab+">AB+</option>
                      <option value="ab-">AB-</option>
                      <option value="o+">O+</option>
                      <option value="o-">O-</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      value={formData.gender}
                      required
                      onChange={handleInputChange}
                    >
                      <option>select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <hr />
                <h6 className="text-center">
                  <b>Official Information</b>
                </h6>
                <hr />
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="post">Select Post</Label>
                    <Input
                      type="select"
                      name="post"
                      id="post"
                      required
                      value={formData.post}
                      onChange={handleInputChange}
                    >
                      <option value="no selected" defaultValue>
                        select post
                      </option>
                      <option value="hr">HR</option>
                      <option value="counsellors">Counsellor</option>
                      <option value="trainers">Trainer</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="jobType">Job Type</Label>
                    <Input
                      type="select"
                      name="jobType"
                      id="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Job Type --</option>
                      <option value="permanent">Permanent</option>
                      <option value="partTime">Part Time</option>
                      <option value="contract-basis">Contract basis</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="hrEmail">HR Email</Label>
                    <Input
                      type="email"
                      name="hrEmail"
                      id="hrEmail"
                      required
                      value={localStorage.getItem("email")}
                      onChange={handleInputChange}
                      disabled
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="salary">Salary</Label>
                    <Input
                      type="number"
                      id="salary"
                      name="salary"
                      placeholder="e.g 25,000"
                      required
                      value={formData.salary}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <Label htmlFor="jdate">Joining Date</Label>
                  <Input
                    type="date"
                    id="jdate"
                    name="jdate"
                    placeholder="12/10/2023"
                    required
                    value={formData.jdate}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md="4">
                  <Label htmlFor="mobileNumber">Mobile Number</Label>
                  <InputGroup>
                    <InputGroupText>+91</InputGroupText>
                    {/* <FormGroup> */}
                    <Input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter Mobile Number"
                      required
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    />
                    {/* </FormGroup> */}
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="adharNumber">Adhar Number</Label>
                    <Input
                      type="number"
                      id="adharNumber"
                      name="adharNumber"
                      placeholder="Adhar Number"
                      required
                      value={formData.adharNumber}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="panNumber">Pan Number</Label>
                    <Input
                      type="text"
                      id="panNumber"
                      name="panNumber"
                      placeholder="Enter Pan Number"
                      required
                      value={formData.panNumber}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <hr />
                <h6 className="text-center">
                  <b>Banking Information</b>
                </h6>
                <hr />
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      type="select"
                      name="bankName"
                      id="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                    >
                      <option value="">--Select --</option>
                      <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                      <option value="ANDHRA BANK">ANDHRA BANK</option>
                      <option value="AXIS BANK">AXIS BANK</option>
                      <option value="STATE BANK OF INDIA">
                        STATE BANK OF INDIA
                      </option>
                      <option value="BANK OF BARODA">BANK OF BARODA</option>
                      <option value="UCO BANK">UCO BANK</option>
                      <option value="UNION BANK OF INDIA">
                        UNION BANK OF INDIA
                      </option>
                      <option value="BANK OF INDIA">BANK OF INDIA</option>
                      <option value="BANDHAN BANK LIMITED">
                        BANDHAN BANK LIMITED
                      </option>
                      <option value="CANARA BANK">CANARA BANK</option>
                      <option value="GRAMIN VIKASH BANK">
                        GRAMIN VIKASH BANK
                      </option>
                      <option value="CORPORATION BANK">CORPORATION BANK</option>
                      <option value="INDIAN BANK">INDIAN BANK</option>
                      <option value="INDIAN OVERSEAS BANK">
                        INDIAN OVERSEAS BANK
                      </option>
                      <option value="ORIENTAL BANK OF COMMERCE">
                        ORIENTAL BANK OF COMMERCE
                      </option>
                      <option value="PUNJAB AND SIND BANK">
                        PUNJAB AND SIND BANK
                      </option>
                      <option value="PUNJAB NATIONAL BANK">
                        PUNJAB NATIONAL BANK
                      </option>
                      <option value="RESERVE BANK OF INDIA">
                        RESERVE BANK OF INDIA
                      </option>
                      <option value="SOUTH INDIAN BANK">
                        SOUTH INDIAN BANK
                      </option>
                      <option value="UNITED BANK OF INDIA">
                        UNITED BANK OF INDIA
                      </option>
                      <option value="CENTRAL BANK OF INDIA">
                        CENTRAL BANK OF INDIA
                      </option>
                      <option value="VIJAYA BANK">VIJAYA BANK</option>
                      <option value="DENA BANK">DENA BANK</option>
                      <option value="BHARATIYA MAHILA BANK LIMITED">
                        BHARATIYA MAHILA BANK LIMITED
                      </option>
                      <option value="FEDERAL BANK LTD ">
                        FEDERAL BANK LTD{" "}
                      </option>
                      <option value="HDFC BANK LTD">HDFC BANK LTD</option>
                      <option value="ICICI BANK LTD">ICICI BANK LTD</option>
                      <option value="IDBI BANK LTD">IDBI BANK LTD</option>
                      <option value="PAYTM BANK">PAYTM BANK</option>
                      <option value="FINO PAYMENT BANK">
                        FINO PAYMENT BANK
                      </option>
                      <option value="INDUSIND BANK LTD">
                        INDUSIND BANK LTD
                      </option>
                      <option value="KARNATAKA BANK LTD">
                        KARNATAKA BANK LTD
                      </option>
                      <option value="KOTAK MAHINDRA BANK">
                        KOTAK MAHINDRA BANK
                      </option>
                      <option value="YES BANK LTD">YES BANK LTD</option>
                      <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                      <option value="BANK OF INDIA">BANK OF INDIA</option>
                      <option value="BANK OF MAHARASHTRA">
                        BANK OF MAHARASHTRA
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      type="number"
                      name="accountNumber"
                      id="accountNumber"
                      placeholder="Enter Account Number"
                      required
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="ifscNumber">IFSC Number</Label>
                    <Input
                      type="text"
                      id="ifscNumber"
                      name="ifscNumber"
                      placeholder="Enter IFSC Number"
                      required
                      value={formData.ifscNumber}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="branch">Branch</Label>
                    <Input
                      type="text"
                      name="branch"
                      id="branch"
                      placeholder="Enter Branch Name"
                      required
                      value={formData.branch}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <hr />
                <h6 className="text-center">
                  <b>Security</b>
                </h6>
                <hr />
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md="12">
                  <Container>
                    <Button
                      color="primary"
                      type="submit"
                      className="py-1 px-5 w-100"
                    >
                      Register&nbsp;<i className="fa-solid fa-paper-plane"></i>
                    </Button>
                  </Container>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
      <div style={{ bottom: "0", width: "-webkit-fill-available" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Registration;
