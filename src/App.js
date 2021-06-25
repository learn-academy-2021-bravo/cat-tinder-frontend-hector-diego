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
// import MockBeers from "./MockBeers.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: []
    }
  }

componentDidMount(){
  this.fetchBeers()
}

  fetchBeers = () => {
    fetch('http://localhost:3000/beers')
    .then(response => {
      return response.json()
    })
    .then(beersArray => {
      this.setState({beers: beersArray})
    })
    .catch(errors => {
      console.log('index errors:', errors);
    })
  }

  createNewBeer = (newbeer) => {
    return fetch("http://localhost:3000/beers", {
      // converting an object to a string
      body: JSON.stringify(newbeer),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.beerIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
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
