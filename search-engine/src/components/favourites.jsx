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
import {BsStarFill} from "react-icons/bs"
import SingleJobOffer from "./singleJobOffer"
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITES",
      payload: id,
    }),removeFromFavourites: (id) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAVOURITES",
      payload: id,
    }),
});
class Favourites extends React.Component {
  render() {
    return (
      <>
  <Row className="d-flex justify-content-center flex-row">
          {this.props.favouriteJobs.length !== 0 ? (
            this.props.favouriteJobs.map((job) => (
              <SingleJobOffer fromSearch = {false} job = {job} changeCompanyId={this.props.changeCompanyId}/>
            ))
          ) : (
            <p style={{ marginTop: "18rem", color: "black", fontSize: "40px" }}>
              Favourites list
            </p>
          )}
        </Row>
       </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
