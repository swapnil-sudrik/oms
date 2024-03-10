import React, { useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
import { Card, CardBody, CardTitle } from "reactstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import Swapnil from "../../../images/swapnil.jpg";

const PayrollReport = () => {
  const [contactDetails, setContactDetails] = useState([
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
    },
    {
      empImage: Swapnil,
      empName: "swapnil sudrik",
      empEmail: "swapdssdsdsdsdsdsnil@gmail.com",
      salary:'50000',
      bankName:'state bank of india',
      accountNumber:'12457898966',
      ifscNumber:'SBI0000545'
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
            <CardTitle tag="h3">Payroll Report</CardTitle>
            <DataTable
              value={contactDetails}
              tableStyle={{ minWidth: "70rem" }}
            >
              <Column body={image} header="Team Member"></Column>
              <Column field="empEmail" header="Email"></Column>
              <Column field="bankName" header="Bank Name"></Column>
              <Column field="accountNumber" header="Account Number"></Column>
              <Column field="ifscNumber" header="IFSC Number"></Column>
            </DataTable>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default PayrollReport;
