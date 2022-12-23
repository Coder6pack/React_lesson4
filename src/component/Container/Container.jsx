import React from "react";
import "./style.css";
export default function Container(props) {
  return (
    <div className="container">
      <div className="box box-img">
        <img src={props.img}></img>
      </div>
      <div className="box box-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <span>{props.price}</span>
        <button>MUA NGAY</button>
      </div>
    </div>
  );
}
