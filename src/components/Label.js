import React from "react";

const Label = ({labelText, onClick}) => {
  return <div onClick={onClick}>{labelText}</div>
}

export default Label