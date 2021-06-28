import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class BeerNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        brand: "",
        brew: "",
        country: ""
      },
      success: false,
    };
  }

  handleSubmit = () => {
    this.props.createNewBeer(this.state.form)
    this.setState({ success: true })
  };

  handleChange = (e) => {
    console.log(e);
    let { form } = this.state;
    form[e.target.brand] = e.target.value;
    this.setState({ form: form });
  };

  render() {
    return (
      <>
        This is BeerNew
        <Form>
          <FormGroup>
            <Label for="brand">Beer Brand</Label>
            <Input type="text" name="brand" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="brew">Beer Brew</Label>
            <Input type="text" name="brew" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="country">Beer Country</Label>
            <Input type="text" name="country" onChange={this.handleChange} />
          </FormGroup>
        </Form>

        <Button name="submit" color="secondary" onClick={ this.handleSubmit }>
          Create a New Profile
        </Button>

        
        {this.state.success && <Redirect to="/BeerIndex" />}
      </>
    );
  }
}
