import React from "react";

export default function Pallet(props) {
  const { colorCode } = props;

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: colorCode,
          width: 200,
          height: 200,
        }}
      />
    </div>
  );
}
