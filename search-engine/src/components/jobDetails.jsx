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
import "../styles/jobDetails.css";
class JobDetails extends React.Component {
  getDescription = () => {
    return { __html: this.props.job[0].description };
  };
  render() {
    return (
      <>
        <Row>
          <Col sm={12} className="image d-flex justify-content-center">
            <img src={this.props.job[0].company_logo} />{" "}
          </Col>
          <Col sm={8} className=" d-flex justify-content-center">
            <div  dangerouslySetInnerHTML={this.getDescription()} />{" "}
          </Col>
        </Row>
      </>
    );
  }
}
export default JobDetails;
