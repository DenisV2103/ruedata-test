// Dependenceis
import React from "react";

const CardComponent = ({ description, age, name, onclick }) => {
  return (
    <div className="info">
      <div>
        <p>Name: </p>
        <p>{name}</p>
      </div>
      <div>
        <p>Age:</p>
        <p> {age}</p>
      </div>
      <div>
        <p>Description: </p>
        <p>{description}</p>
      </div>
      <div>
        <button className="delete" onClick={onclick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
