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
import { connect } from "react-redux";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITES",
      payload: id,
    }),
  removeFromFavourites: (id) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAVOURITES",
      payload: id,
    }),
});

class SingleJobOffer extends React.Component {
    addToFav = (job) => {
        this.setState({clickedStar:true})
        this.props.addToFavourites(job)
    }
    removeFromFav = (job) => {
        this.setState({clickedStar:false})
        this.props.removeFromFavourites(job.id)
    }
  state = { clickedStar: false };
  render() {
    return (
      <>
        <Col className="d-flex justify-content-center flex-col" sm={4}>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.job.company_logo}
              className="company_logo"
            />
            <Card.Body>
              <Card.Title>{this.props.job.title}</Card.Title>
              <Card.Text>Compnay:{this.props.job.company}</Card.Text>
              <Link to="/jobDetails">
                <Button
                  variant="primary"
                  onClick={() => this.props.changeCompanyId(this.props.job.id)}
                >
                  View Job
                </Button>
              </Link>
              {!this.props.fromSearch ? (
                <BsStarFill
                  onClick={() => this.removeFromFav(this.props.job)}
                />
              ) : (
                <AiOutlineStar onClick ={()=>this.addToFav(this.props.job)}/>
              )}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJobOffer);
