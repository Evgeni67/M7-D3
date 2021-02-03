import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/search.css";

class JobOffers extends React.Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center flex-row">
          {this.props.results.length !== 0 ? (
            this.props.results.map((job) => (
              <Col className="d-flex justify-content-center flex-col" sm={4}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={job.company_logo}
                    className="company_logo"
                  />
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>Compnay:{job.company}</Card.Text>
                    <Link to="/jobDetails">
                      <Button
                        variant="primary"
                        onClick={() => this.props.changeCompanyId(job.id)}
                      >
                        View Job
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p style={{ marginTop: "18rem", color: "black", fontSize: "40px" }}>
              Search for a job by adding details and clicking on submit
            </p>
          )}
        </Row>
      </>
    );
  }
}

export default JobOffers;
