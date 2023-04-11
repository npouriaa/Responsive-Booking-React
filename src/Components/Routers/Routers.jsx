import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Flights from "../Flights/Flights";
import MainPage from "../MainPage/MainPage";
import Register from "../Register/Register";
import ReservedFlights from "../ReservedFlights/ReservedFlights";

class Routers extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }



  render() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/flights" element={<Flights />}></Route>
        <Route path="/reserved-flights" element={<ReservedFlights />}></Route>
        <Route path="/login" element={<Register history={this.history}/>}></Route>
      </Routes>
    );
  }
}

export default Routers;
