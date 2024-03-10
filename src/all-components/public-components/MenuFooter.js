import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, List } from "reactstrap";
import Logo from '../../images/logo.png';

const MenuFooter=()=>{
    return(
        <div className="main-container footer">
        <div className="footer-column">
          <Container>
            <Image src={Logo} alt="logo" width="300" />
            <hr />
            <List    type="unstyled">
              <li>ADDRESS : Future Scope Technology Pvt. Ltd.</li>
              <br />
              <li>
                2nd floor Pisal Building Bazartal, Karjat, Ahmednagar 414402
              </li>
              <br />
              <li style={{ color: "gray" }}>EMAIL ID:</li>
              <li>
                <Link to="mailto:futurescopeinstitute.info@gmail.com" className="text-light text-decoration-none">
                  futurescopeinstitute.info@gmail.com
                </Link>
              </li>
              <br />
              <li style={{ color: "gray" }}>FOR COURSE ENQUIRY CONTACT NUMBER:</li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  +91-9284465209
                </Link>
              </li>
              <br />
              <li style={{ color: "gray" }}>FOLLOW US ON :</li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  &nbsp;<i className="fa-brands fa-instagram"></i>&nbsp;
                </Link>
                <Link to="#" className="text-light text-decoration-none">
                  &nbsp;<i className="fa-brands fa-facebook"></i>&nbsp;
                </Link>
                <Link to="#" className="text-light text-decoration-none">
                  &nbsp;<i className="fa-brands fa-whatsapp"></i>&nbsp;
                </Link>
                <Link to="#" className="text-light text-decoration-none">
                  &nbsp;<i className="fa-brands fa-linkedin"></i>&nbsp;
                </Link>
                <Link to="#" className="text-light text-decoration-none">
                  &nbsp;<i className="fa-brands fa-youtube"></i>&nbsp;
                </Link>
              </li>
            </List>
          </Container>
        </div>
        <div className="footer-column">
          <Container>
            <h1>Menu</h1>
            <hr />
            <List type="unstyled">
              <li style={{ color: "gray" }}>QUICK LINKS</li>
              <br />
              <li>
                <Link
                  to="/placements"
                  className="text-light text-decoration-none"
                  // onClick={() => scollToRef.scrollIntoView()}
                >
                  Placements
                </Link>
              </li>
              <br />
              <li>
                <Link to="/career" className="text-light text-decoration-none">
                  Career
                </Link>
              </li>
              <br />
              {/* <li>
                <Link to="#" className="text-light text-decoration-none">
                  Pay Fees
                </Link>
              </li>
              <br />
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Refer & Earn
                </Link>
              </li>
              <br />
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Success Strories
                </Link>
              </li>
              <br />
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Corporate Training
                </Link>
              </li>
              <br />
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Contact us
                </Link>
              </li> */}
              <br />
              <li style={{ color: "gray" }}>JOB ASSISTANCE COURSES</li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  Machine Learning & AI
                </h6>
              </li>
              <br />
             
              <li>
                <h6 className="text-light text-decoration-none">
                  Data Analytics
                </h6>
              </li>
              <br />
             
            </List>
          </Container>
        </div>
        <div className="footer-column">
          <Container>
            <h1>Our Courses</h1>
            <hr />
            <List type="unstyled">
              <li  style={{ color: "gray" }}>JOB GUARANTEE COURSES</li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  Full Stack Development
                </h6>
              </li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  Data Science & Analytics with AI
                </h6>
              </li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  AWS Cloud Technology
                </h6>
              </li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  Python Development
                </h6>
              </li>
              <br />
              <li>
                <h6 className="text-light text-decoration-none">
                  Data Science
                </h6>
              </li>
              <br />
            </List>
          </Container>
        </div>
      </div>
    )
}
export default MenuFooter;