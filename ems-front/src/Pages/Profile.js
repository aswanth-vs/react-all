import React from "react";
import { Card, Row } from "react-bootstrap";

function Profile() {
  return (
    <>
      <div className="container mt-5">
        <Card className="shadow col-lg-6 max-auto">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                  <img className="rounded-circle border p-1" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="profile" fluid width={"200px"} />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Max Miller</h3>
              <h5>
                <i className="fa-solid fa-envelope text-primary"></i>:- max@123.com
              </h5>
              <h5>
                <i className="fa-solid fa-mobile text-danger"></i>:- 1234567890
              </h5>
              <h5>
                <i className="fa-solid fa-venus-mars text-warning"></i>:- Male
              </h5>
              <h5>
                <i className="fa-solid fa-location-dot text-info"></i>:- Mahe
              </h5>
              <h5>
                <i className="fa-solid fa-chart-line text-success"></i>:- Active
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile;
