import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainPage.css";
import MainSection from "./MainSection/MainSection";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
