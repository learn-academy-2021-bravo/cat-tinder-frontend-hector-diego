import React, { Component } from "react";
import { Card, CardTitle, Col } from 'reactstrap'

export default class BeerShow extends Component {
  render() {
    // console.log(this.props.beers);
    let { beer } = this.props
    return (
      <>
        <h2>This is the show page</h2>
        <p>{ beer.brand }</p>
        <p>{ beer.brew }</p>
        <p>{ beer.country }</p>

        <Col sm="6" className="show-body">
  <Card body >
    <CardTitle>Hi, my name is { beer.brand }!</CardTitle>
    <CardText>I am { beer.brew } years old. I am from { beer.country }.</CardText>
  </Card>
</Col>
      </>
    )
  }
}
