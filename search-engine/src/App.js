import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar";
import JobOffers from "./components/jobOffers";
import JobDetails from "./components/jobDetails";
import Favourites from "./components/favourites"
import Navbar from "./components/navbar";
import { connect } from "react-redux";

import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import "./styles/mainApp.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
class App extends React.Component {
  
  state = {
    description: "",
    location: "",
    results: [],
    companyId: "",
    loading:true
  };
  searchForJobs = async (description, location) => {
    this.props.startLoading()
    let response = await fetch(
     `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
    );
    let data = await response.json();
   
    this.setState({ results: data });
    this.props.stopLoading()
  };
  changeCurrentDesc = async (e) => {
    console.log(e.currentTarget.value);
    this.setState({ description: e.currentTarget.value });
  };
  changeCurrentLocation = async (e) => {
    console.log(e.currentTarget.value);
    this.setState({ location: e.currentTarget.value });
  };
  changeCompanyId = async (id) => {
    this.setState({ companyId: id });
  };
  render() {
    return (
      <>
     
        <Router>
        <Navbar />
        
          <Route path="/startPage">
            <SearchBar
              changeCurrentLocation={this.changeCurrentLocation}
              changeCurrentDesc={this.changeCurrentDesc}
              searchForJobs={this.searchForJobs}
              des={this.state.description}
              loc={this.state.location}
            />
            
            <JobOffers
              results={this.state.results}
              changeCompanyId={this.changeCompanyId}
            />
          </Route>
          <Route path="/jobDetails">
            <JobDetails job={this.state.results.filter(job=>job.id === this.state.companyId)}/>
          </Route>
          <Route exact path="/favourites">
            <Favourites  changeCompanyId={this.changeCompanyId}/>
          </Route>
        </Router>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
