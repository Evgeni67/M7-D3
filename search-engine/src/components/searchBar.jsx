import React from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "../styles/search.css";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center flex-col ">
          <Form className="search ">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => this.props.changeCurrentLocation(e)}
                placeholder="Location of the job"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => this.props.changeCurrentDesc(e)}
                placeholder="Description of the work"
              />
            </Form.Group>
            <Row className="d-flex justify-content-center flex-col ">
              <Button
                variant="secondary"
                onClick={() =>
                  this.props.searchForJobs(this.props.des, this.props.loc)
                }
              >
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

export default SearchBar;
