import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Row, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeTable() {
  return (
    <>
      <div className="container mt-5">
        <Row>
          <div className="col">
            <Card className="shadow">
              <Table responsive="sm" className="align-items-center">
                <thead>
                  <tr className="table-dark">
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Max Miller</td>
                    <td>max@123.com</td>
                    <td>1234567890</td>
                    <td>
                      {/* status */}
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-status">
                          Active
                        </Dropdown.Toggle>
                      </Dropdown>
                    </td>
                    <td>
                      <img className="rounded-circle" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="profile" fluid style={{ width: "50px" }} />
                    </td>
                    <td>
                      {/* actions */}
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis-vertical fa-beat"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link style={{ textDecoration: "none" }} to={`/profile/1`}>
                              <i className="fa-solid fa-eye text-primary"></i>
                              <span className="fs-5  ms-1">View</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link style={{ textDecoration: "none" }} to={`/edit/1`}>
                              <i className="fa-solid fa-pen text-success"></i>
                              <span className="fs-5  ms-1">Edit</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="fa-solid fa-trash text-danger"></i>
                            <span className="fs-5  ms-1">Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}

export default HomeTable;
