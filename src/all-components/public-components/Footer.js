import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div
        style={{bottom: "0" , width:'-webkit-fill-available'}}
        className="text-center bg-dark text-light py-2"
      >
        <p className="text-center f-size" style={{fontSize:'13px'}}>
          &nbsp;Copyright ©
          <Link
            to="/oms"
            className="text-light text-decoration-none f-size"
            style={{fontSize:'13px'}}
          >
            &nbsp;Future Scope Technology Pvt.Ltd.&nbsp;
          </Link>
          |
          <Link to="/terms" className="text-light text-decoration-none text-light">
            &nbsp;Terms&nbsp;
          </Link>
          |
          <Link to="/placement-policy" className="text-light text-decoration-none">
            &nbsp;Placement&nbsp;
          </Link>
          |
          <Link to="/privacy-policy" className="text-light text-decoration-none">
            &nbsp;Privacy&nbsp;
          </Link>
          |
          <Link to="/refund-policy" className="text-light text-decoration-none">
            &nbsp;Refund&nbsp;
          </Link>
          |
          <Link to="/referral-policy" className="text-light text-decoration-none">
            &nbsp;Referral Policy
          </Link>
        </p>
      </div>
    )
}
export default Footer;