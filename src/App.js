import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.css";
import BeerEdit from "./pages/BeerEdit.js";
import BeerIndex from "./pages/BeerIndex.js";
import BeerNew from "./pages/BeerNew.js";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import MockBeers from "./src/MockBeers.js";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <BeerEdit />
        <BeerIndex />
        <BeerNew />
        <BeerShow />
        <Home />
        <NotFound />
        <MockBeers />
        <Footer />
      </>
    );
  }
}

export default App;
