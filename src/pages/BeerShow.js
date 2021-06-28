import React, { Component } from "react";

export default class BeerShow extends Component {
  render() {
    console.log(this.props.beers);
    let { beer } = this.props
    return (
      <>
        <h2>This is the show page</h2>
        <p>{ beer.brand }</p>
        <p>{ beer.brew }</p>
        <p>{ beer.country }</p>
      </>
    )
  }
}
