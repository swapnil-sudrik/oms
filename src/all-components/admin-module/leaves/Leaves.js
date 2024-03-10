import React, { useState } from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";
import AdminNavigation from "../home/AdminNavigation";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Swapnil from "../../../images/swapnil.jpg";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
const Leave = () => {
  const [tableData, setTableData] = useState([
    {
      Date: "05 May 2023",
      totalEmployees: "10",
      firstHalf: "9",
      secondHalf: "9",
      workingFromHome: "1",
      Absent: "0",
      todayAways: "1",
    },
  ]);
  const [todayLeaves, setTodayLeaves] = useState([
    {
      employee: Swapnil,
      name: "swapnil",
      leaveType: "Sick Leaves",
      from: "05 May 2023",
      to: "10 May 2023",
      days: "5",
      reamingDays: "8",
      notes: "Going to Hospital",
    },
    {
      employee: Swapnil,
      name: "swapnil",
      leaveType: "Sick Leaves",
      from: "05 May 2023",
      to: "10 May 2023",
      days: "5",
      reamingDays: "8",
      notes: "Going to Hospital",
    },
  ]);

  const image = (todayLeaves) => {
    return (
      <div className="flex align-items-center gap-2">
        {/* <img alt={todayLeaves.name} src={todayLeaves.employee} width="32" /> */}
        <Avatar
          image={todayLeaves.employee}
          className="align-item-center"
          size="large"
          shape="circle"
          style={{ display: "inline-block" }}
        />
        <h6 style={{ display: "inline-block" }}>
          &nbsp;&nbsp;&nbsp;{todayLeaves.name}
        </h6>
      </div>
    );
  };

  const statusbtn = () => {
    return (
      <div>
        <Link to="##">
          <Button color="success" outline>
            <i className="fa-solid fa-check"></i>&nbsp;&nbsp;Approved
          </Button>
        </Link>
      </div>
    );
  };

  const actionbtn = () => {
    return (
      <div>
        <Link to="33">
          <Button color="danger" outline>
            <i className="fa-solid fa-trash-can"></i>&nbsp;&nbsp;Delete
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 text-center my-margin bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="my-3 my-margin">
        <Card className="px-3 mx-3">
          <CardTitle tag="h5" className="my-3">Leave Details</CardTitle>
          <hr />
          <DataTable value={tableData} className="mx-3" tableStyle={{ minWidth: "70rem" }}>
            <Column field="Date" header="Date"></Column>
            <Column field="totalEmployees" header="Total Employees"></Column>
            <Column field="firstHalf" header="First Half"></Column>
            <Column field="secondHalf" header="Second Half"></Column>
            <Column field="workingFromHome" header="Working From Home"></Column>
            <Column field="Absent" header="Absent"></Column>
            <Column field="todayAways" header="Today Aways"></Column>
          </DataTable>
        </Card>
      </div>
      <br />
      <div className="my-3 my-margin">
       <Card className="px-3 mx-3">
       <CardTitle tag="h5" className="my-3">Today Leaves</CardTitle>
        <hr />
        <DataTable value={todayLeaves} className="mx-3" tableStyle={{ minWidth: "90rem" }}>
          <Column body={image} header="Employee"></Column>
          <Column field="leaveType" header="Leave Type"></Column>
          <Column field="from" header="From"></Column>
          <Column field="to" header="To"></Column>
          <Column field="days" header="Days"></Column>
          <Column field="reamingDays" header="Reamining Day"></Column>
          <Column field="notes" header="Notes"></Column>
          <Column body={statusbtn} header="Status"></Column>
          <Column body={actionbtn} header="Action"></Column>
        </DataTable>
       </Card>
      </div>
    </div>
  );
};
export default Leave;
