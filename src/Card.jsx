import React from "react";
import  "./Card.css";

const Card = (props) => {
  // console.log(props.name);
  return (
    <div className="card"
    >
      <img
        src={`https://source.unsplash.com/400x500/?${props.name}`}
        alt={props.name}
      />
      <button className="delete_card" onClick={props.removeCard}>x</button>
      <h3>{props.name}</h3>
      <div className="add_like">
        <button className="like_btn" onClick={props.addLikes}>💜 {props.likes}</button>
        <button className="disLike_btn" onClick={props.removeLikes}>💔  {!props.dislikes ? 0 : props.dislikes}</button>
        {/* <button onClick={props.addLikes}>Add like</button> */}
      </div>
    </div>
  );
};

export default Card;
