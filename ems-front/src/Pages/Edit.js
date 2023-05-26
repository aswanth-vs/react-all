import React from "react";
import { Card, Form, Row, Button } from "react-bootstrap";
import Select from "react-select";

function Edit() {
  //dropdown options
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Edit Employee Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="text-center mb-3">
            <img className="rounded-circle border p-1" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="profile" fluid width={"100px"} />
          </div>
          <Form>
            <Row>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="First Name"></Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Last Name"></Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email Address"></Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control required type="text" placeholder="Mobile Number"></Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Check type={"radio"} label={"Male"} name={"gender"} value={"Male"}></Form.Check>
                <Form.Check type={"radio"} label={"Female"} name={"gender"} value={"Female"}></Form.Check>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Select Employee Status</Form.Label>
                <Select className="text-dark" options={options} />
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control required type="file" name="user_profile"></Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Employee Location</Form.Label>
                <Form.Control required type="text" placeholder="Location"></Form.Control>
              </Form.Group>
              {/* submit */}
              <Button className="btn btn-info mt-3">Submit</Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Edit;
