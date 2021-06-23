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
import mockBeers from "./mockBeers.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: mockBeers
    }
  }
  render() {
    console.log(this.state.beers);
    return (
      <>
        <Header />
        <BeerEdit />
        <BeerIndex />
        <BeerNew />
        <BeerShow />
        <Home />
        <NotFound />
        <Footer />

        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/catindex" component={ BeerIndex } />
            <Route path="/catshow/:id" component={ BeerShow } />
            <Route path="/catnew" component={ BeerNew } />
            <Route path="/catedit/:id" component={ BeerEdit } />
            <Route component={ NotFound }/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
