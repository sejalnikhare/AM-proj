import React from "react";
import HOC from "../HOC";

const data = [
  {
    no: 1,
    name: "Deepak"
  },
  {
    no: 2,
    name: "Namrata"
  },
  {
    no: 3,
    name: "Anmol"
  }
];
const Comp1 = () => {
  return <div>Comp1</div>;
};
export default HOC(Comp1, data);
