import React from "react";
import { useParams } from "react-router-dom";

function Pages1() {
  const userId = useParams();
  const id=userId.id;
  return <div>Page --{id}</div>;
}

export default Pages1;
