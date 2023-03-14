import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="col-4 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.src}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}
          </p>
          <Link to={"/Pages/"+props.id} className="btn btn-primary">
            Go somewhere
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Card;
