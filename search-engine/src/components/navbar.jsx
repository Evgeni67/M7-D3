import React from "react";
import { Container, Row, Col, Button, Modal, Form, Navbar} from "react-bootstrap";
import "../styles/navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MyNavbar extends React.Component {
    state = {reload:true}
    changeState = () => {
        if(this.state.reload === true){
            this.setState({reload:false});
        }else{
            this.setState({reload:true});
        }
    }
  render() {
    return (
<>
<Navbar className ="navbar" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <Link to="/startPage">
      <img
        alt=""
        src='https://media-exp1.licdn.com/dms/image/C4E0BAQEHHlovK1lkxw/company-logo_200_200/0/1519875852940?e=2159024400&v=beta&t=MWmAe9E7AQyKK2BeCRVFzvujDUAS6WVNEEtnlH725Ac'
        width="80"
        height="50"
        className="d-inline-block align-top"
      />{' '}
         </Link>
    </Navbar.Brand>
    <Link to="/favourites">
    <p className = "navbarWtf" onClick = {() => this.changeState()}>Favourites </p>
    </Link>
  </Navbar>
</>
    );
}
}

export default MyNavbar;
