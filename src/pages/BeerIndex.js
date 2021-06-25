import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class BeerIndex extends Component {
  render() {
    let { beers } = this.props
    console.log("beers", beers);
    return (
    <>       
     <h2>This is the Index Page</h2>
    { beers && beers.map(beer => {
      return (
        <NavLink to={`show/${beer.id}`} key={ beer.id }>
          <p>{ beer.brand }</p>
        </NavLink>
      )
    })}
    </>
    )
  }
}
export default BeerIndex;
