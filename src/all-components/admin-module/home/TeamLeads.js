import { Avatar } from "primereact/avatar";
import React from "react";
import { Link } from "react-router-dom";
import { CardText } from "reactstrap";

const TeamLeads = ({ teamLeads }) => {
  return (
    <div>  <hr />
      <div className="d-flex">
        <div>
          <Link>
            <Avatar
              image={teamLeads.image}
              // className="mx-3 my-2"
              // size="large"
              shape="circle"
              style={{ width: "40px", height: "40px" }}
              // className="admin-welcome"
            />
          </Link>
        </div>
        <div className="mx-3" style={{ lineHeight: "10px" }}>
          <CardText tag="h5">{teamLeads.name}</CardText>
          <CardText className="text-secondary">{teamLeads.post}</CardText>
        </div>
        <div style={{ position: "absolute", right: "30px" }}>
          <Link to={`/team-lead/${teamLeads.id}`} className="manage-team">Manage Team</Link>
        </div>
      </div>
    </div>
  );
};

export default TeamLeads;
