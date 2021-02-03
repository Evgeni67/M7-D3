import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar";
import JobOffers from "./components/jobOffers";
import JobDetails from "./components/jobDetails";
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

class App extends React.Component {
  state = {
    description: "",
    location: "",
    results: [],
    companyId: "",
  };
  searchForJobs = async (description, location) => {
    let response = await fetch(
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?$description=${description}&location=${location}`
    );
    let data = await response.json();
    this.setState({ results: data });
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
        </Router>
      </>
    );
  }
}

export default App;
