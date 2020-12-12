import React, { Component } from "react";
export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    // i need value to control input
    const { value, name } = e.target;
    let _value = value;
    if (name === "username") {
      _value = value.toUpperCase();
    }

    this.setState({ [name]: _value });
  };
  handlepassword = (e) => {
    const { value } = e.target;
    this.setState({ password: value });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1 className="title">log in form </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            id=""
            value={username}
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            id=""
            value={password}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
