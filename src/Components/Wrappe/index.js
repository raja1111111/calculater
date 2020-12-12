import React, { Component } from "react";
import Form from "../Form";
import Pallet from "../Pallet";

export default class Wrapper extends Component {
  state = {
    colorCode: "",
    isSubmitted: false,
  };
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ colorCode: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  };
  render() {
    const { isSubmitted, colorCode } = this.state;

    return (
      <div>
        <Form
          isSubmitted={isSubmitted}
          colorCode={colorCode}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Pallet colorCode={colorCode} />
      </div>
    );
  }
}
