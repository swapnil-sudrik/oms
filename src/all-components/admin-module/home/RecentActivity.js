import { Avatar } from "primereact/avatar";
import React from "react";
import { Link } from "react-router-dom";
import { CardText } from "reactstrap";

const RecentActivity = ({ activities }) => {
  return (
    <div> <hr />
      <div className="d-flex">
        <div>
          <Link>
            <Avatar
              image={activities.image}
              // className="mx-3 my-2"
              // size="large"
              shape="circle"
              style={{ width: "40px", height: "40px" }}
            //   className="admin-welcome"
            />
          </Link>
        </div>
        <div className="mx-3" style={{ lineHeight: "10px" }}>
          <CardText tag="h5">{activities.activity}</CardText>
          <CardText className="text-secondary">{activities.name} | {activities.hours}</CardText>
        </div>  
      </div>
     
    </div>
  );
};

export default RecentActivity;
