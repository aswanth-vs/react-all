import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import HomeTable from "../Components/HomeTable";
import { useNavigate } from "react-router-dom";

function Home() {
  //can use Link to do it as well
  const navigate = useNavigate();

  //tp redirect to register page
  const addUser = () => {
    // window.location.replace("/register");
    navigate("/register");
  };
  return (
    <div className="container mt-5">
      <div className="first_div">
        {/* search, add button */}
        <div className="search_add d-flex justify-content-between">
          {/* search */}
          <div className="search col-md-4">
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Search Employee Name" required />
              <Button className="ms-3" variant="success">
                Search
              </Button>
            </Form>
          </div>
          {/* add btn */}
          <div className="add">
            <button className="btn btn-warning" onClick={addUser}>
              {" "}
              <i className="fa-solid fa-user-plus fa-fade me-1"></i>Add
            </button>
          </div>
        </div>
      </div>
      <div className="second_div">
        {/* table */}
        <HomeTable />
      </div>
    </div>
  );
}

export default Home;
