import React, { Component } from "react";
const colors = {
  " #fff": "white",
  " #921c1c": "brown",
  " #0bd838": "green",
};

export default function Form(props) {
  const { isSubmitted, colorCode, handleSubmit, handleChange } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="colorCode" id="" />
        <button type="submit">submit</button>
      </form>
      {isSubmitted && <p>{colors[colorCode]}</p>}
    </div>
  );
}
