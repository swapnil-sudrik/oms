import { Avatar } from "primereact/avatar";
import React from "react";
import { Link } from "react-router-dom";
// import { Card, CardBody, CardTitle } from "reactstrap";
// import Swapnil from "../../images/swapnil.jpg";

const TodaySpecials = ({todaySpecials}) => {
  return (
    <div>  <hr />
      <div className="d-flex" style={{padding:'12px'}}>
        <div style={{ width: "50px", margin: "auto 0" }}>
          <i
            className={todaySpecials.icon}
            style={{
              fontSize: "1em",
              color: todaySpecials.color,
              marginLeft: "15px",
            }}
          ></i>
        </div>
        <div style={{ margin: "auto 0", fontSize: "1em" }}>
          {todaySpecials.data}
        </div>
        <div
          className="px-3"
          style={{ position: "absolute", right: "0", marginTop: "-8px" }}
        >
          <Link>
            <Avatar
              image={todaySpecials.image}
              // className="mx-3 my-2"
              // size="large"
              shape="circle"
              style={{ width: "40px", height: "40px" }}
              // className="admin-welcome"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TodaySpecials;
