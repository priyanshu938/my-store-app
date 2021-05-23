import React from "react";
import {useDispatch } from "react-redux";

const customStyle={
    width:"18rem"
}
const imgStyle={
    width:"287px",
    height:"250px"
}
export default function Items(props) {
    const dispatch = useDispatch();
  return (
    <>
     <div className="card my-2" style={customStyle}>
  <img src={props.img} style={imgStyle} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p><b>{props.price}</b></p>

    <p value={props.count}>{props.count}</p>
  </div>
  <div className="card-body d-grid gap-2">
    <button className="btn btn-danger btn-lg me-md-2 " onClick={()=>dispatch(props.inc())}>+</button>
    <button className="btn btn-success  btn-lg  me-md-2 " onClick={()=>dispatch(props.dec())}>-</button>

  </div>
</div>
    </>
  );
}
