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
import MockBeers from "./MockBeers.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: MockBeers
    }
  }
  render() {
    console.log(this.state.beers);
    return (

        <Router>
        <Header />

          <Switch>
            <Route exact path="/" component={ Home } />

            <Route path="/index" render={ (props) => <BeerIndex beers={ this.state.beers } /> } />
            
            <Route path="/show/:id" render={ (props) => {
              let id = props.match.params.id
              let beer = this.state.beers.find(beer => beer.id === +id)
              return <BeerShow beer={ beer } />
            } } />

            <Route path="/new" component={ BeerNew } />
            <Route path="/edit/:id" component={ BeerEdit } />
            <Route component={ NotFound }/>
          </Switch>
          
          <Footer />
        </Router>
    );
  }
}

export default App;
