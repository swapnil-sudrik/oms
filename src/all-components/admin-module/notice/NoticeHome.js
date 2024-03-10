import React, { useEffect, useState } from "react";
import AdminNavigation from "../home/AdminNavigation";
import { Button, Card, CardTitle } from "reactstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../../../api/SpringBootApi";
import { toast } from "react-toastify";
import Footer from "../../public-components/Footer";

const NoticeHome = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    document.title = "Notice";
    getAllNotice();
  }, []);

  const getAllNotice = () => {
    axios.get(`${base_url}/allNotice`).then(
      (response) => {
        console.log(response.data);
        setNotice(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const deleteNotice = (rowData) => {
    const { id } = rowData;
    axios.delete(`${base_url}/delete/` + id).then(
      (response) => {
        console.log(response);
        const newData = notice.filter((e) => e.id !== id);
        setNotice(newData);
        toast.success("Notice Delete");
      },
      (error) => {
        console.log(error);
        toast.error("Something Went Wrong ? please try Again..");
      }
    );
  };

  const actionbtn = (rowData) => {
    return (
      <div>
        {/* <Link to={`/eeeeee/${notice.map((e) => e.id)}`}> */}
        <Button color="danger" outline onClick={() => deleteNotice(rowData)}>
          <i className="fa-solid fa-trash-can"></i>&nbsp;&nbsp;Delete
        </Button>
        {/* </Link> */}
      </div>
    );
  };
  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 px-1 my-margin text-center bg-warning">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="my-1 py-2 px-3 d-flex trainer-welcome my-margin">
        <div className="px-3">
          <h5>{notice.length} Notices</h5>
        </div>
        <div
          style={{ position: "absolute", right: "0", marginTop: "-5px" }}
          className="px-5"
        >
          <Link className="text-decoration-none" to="/new-notice">
            <Button color="primary" className="py-1 px-2">
              <i className="fa-solid fa-plus"></i>&nbsp;New Notice
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-3 my-margin">
        <Card className="px-3 mx-3">
          <CardTitle tag="h5" className="my-3">
            All Notices
          </CardTitle>
          <hr />
          <DataTable
            value={notice}
            className="mx-3"
            tableStyle={{ minWidth: "60rem" }}
          >
            <Column field="forWho" header="Employee"></Column>
            <Column field="subject" header="Notice Subject"></Column>
            <Column field="noticeBody" header="Notice Body"></Column>
            <Column field="dateAndTime" header="Date And Time"></Column>
            <Column body={actionbtn} header="Action"></Column>
          </DataTable>
        </Card>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "-webkit-fill-available",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};
export default NoticeHome;
