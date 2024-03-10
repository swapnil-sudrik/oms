import React, { useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
import { Card, CardBody, CardTitle } from "reactstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import Swapnil from "../../../images/swapnil.jpg";

const LeaveReport = () => {
  const [contactDetails, setContactDetails] = useState([
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      dayAllowed:'12',
      dayApproved:'2',
      sickDay:'0',
      wfh:'2',
      daysRemaining:'10'
    },
    {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
      {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
      {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
      {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
      {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
      {
        empImage: Swapnil,
        empName: "swapnil sudrik",
        empEmail: "swapnil@gmail.com",
        dayAllowed:'12',
        dayApproved:'2',
        sickDay:'0',
        wfh:'2',
        daysRemaining:'10'
      },
  ]);

  const image = (contactDetails) => {
    return (
      <div className="flex align-items-center gap-2">
        <Avatar
          image={contactDetails.empImage}
          className="align-item-center"
          size="large"
          shape="circle"
          style={{ display: "inline-block" }}
        />
        <h6 style={{ display: "inline-block" }}>
          &nbsp;&nbsp;&nbsp;{contactDetails.empName}
        </h6>
      </div>
    );
  };

  return (
    <div>
      <AdminNavigation />
      <div style={{ padding: "1px" }} className="my-1 text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="my-3 mx-3">
        <Card className="admin-welcome my-margin">
          <CardBody>
            <CardTitle tag="h3">Leave Report</CardTitle>
            <DataTable
              value={contactDetails}
              tableStyle={{ minWidth: "80rem" }}
            >
              <Column body={image} header="Team Member"></Column>
              <Column field="empEmail" header="Email"></Column>
              <Column field="dayAllowed" header="Days Allowed"></Column>
              <Column field="dayApproved" header="Days Approved"></Column>
              <Column field="sickDay" header="Sick Days"></Column>
              <Column field="wfh" header="Work From Home"></Column>
              <Column field="daysRemaining" header="Days Remaining"></Column>
            </DataTable>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default LeaveReport;
