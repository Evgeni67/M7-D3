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
    }),startLoading: () =>
    dispatch({
      type: "START_LOADING"
    }),stopLoading: () =>
    dispatch({
      type: "STOP_LOADING"
    }),
});
class JobOffers extends React.Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center flex-row">
        {this.props.loading? (     <img src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" />):(<></>)}
          {this.props.results.length !== 0 ? (
            this.props.results.map((job) => (
              <SingleJobOffer fromSearch = {true}job = {job} changeCompanyId={this.props.changeCompanyId}/>
            ))
          ) : (
           
            <p style={{ marginTop: "18rem", color: "black", fontSize: "40px" }}>
             <div > Search for a job    </div> 
        
            </p>
          )}
          {this.props.loading? (     <img className ="mt-10px" src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" />):(<></>)}
        </Row>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobOffers);
