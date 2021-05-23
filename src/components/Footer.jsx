import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  const oreo = useSelector((state) => state.oreo);
  const five_star = useSelector((state) => state.five_star);
  const dark = useSelector((state) => state.dark);
  const tot=oreo*20+five_star*25+dark*30;
  return (
    <div className="container text-center my-5">
      <button className="btn btn-outline-dark ">Pricing : Rs {tot}</button>
    </div>
  );
}
