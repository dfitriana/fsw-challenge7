import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardResult({ car }) {
  // const { image, manufacture, model, rent, capacity, description, transmission, year } = car;
  return (
    <>
      <Col className="col-auto m-2 mx-auto" style={{ textAlign: "left" }}>
        <Card className="mt-5" style={{ width: "20rem" }}>
          <Card.Img
            src=""
            alt=""
            className="card-img-top-img-fluid"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body style={{ fontSize: "14px" }}>
            <Card.Title className="fw-bold mt-4">
              {/* {manufacture}/{model} */}
              manufacture/model
            </Card.Title>
            <Card.Text className="fw-bold mt-3">Rp.  / Day</Card.Text>
            <Card.Text className="mt-3" style={{ height: "90px" }}>
              {/* {description} */}ss
            </Card.Text>
            <Card.Text>
              {/* <i className="fw-bold mt-3"></i> */}
              <img src="images/Home/fi_settings.png" alt="" className="me-2" />
              {/* {transmission} */}ss
            </Card.Text>
            <Card.Text>
              {/* <i className="fw-bold mt-3"></i> */}
              <img src="images/Home/fi_users.png" alt="" className="me-2" />
              {/* {capacity} Orang */}ss
            </Card.Text>
            <Card.Text className="mt-3">
              <img src="images/Home/fi_calendar.png" alt="" className="me-2" />
              {/* {year} */}
            </Card.Text>
          </Card.Body>

          <div className="d-grid gap-2">
            <Button
              className="mt-2"
              href="/cars"
              style={{ backgroundColor: "#5cb85f", border: "none" }}
            >
              Sewa Mobil
            </Button>
          </div>
        </Card>
      </Col>
    </>
  );
}
