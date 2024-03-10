import React, { useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
import { Card, CardBody, CardTitle } from "reactstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import Swapnil from '../../../images/swapnil.jpg'

const ContactReport = () => {

    const [contactDetails, setContactDetails] = useState([
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
        },
        {
          empImage: Swapnil,
          empName: "swapnil sudrik",
          empEmail: "swapnil@gmail.com",
          phoneNo: "7057546782",
          secondaryPhone: "9284465209",
          address: "A/P:Kaudane,Tal:Karjat, Dist:Ahmednagar 414401",
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
            <CardTitle tag="h3">Contact Details</CardTitle>
            <DataTable
              value={contactDetails}
              tableStyle={{ minWidth: "90rem" }}
            >
              <Column body={image} header="Team Member"></Column>
              <Column field="empEmail" header="Email"></Column>
              <Column field="phoneNo" header="Phone Number"></Column>
              <Column
                field="secondaryPhone"
                header="Secondary Phone Number"
              ></Column>
              <Column field="address" header="Address"></Column>
            </DataTable>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default ContactReport;
