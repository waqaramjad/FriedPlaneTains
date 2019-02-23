import React from "react";
import { Link } from "react-router-dom";

const MovieItem = props => {
   let StarRating = rating => {
    let starRat = 5 - rating;
    let content=[];
    for (let i = 0; i < rating; i++) {
      content.push(<span class="fa fa-star checked" />);
    }
    for (let i = 0; i < starRat; i++) {
      content.push( <span class="fa fa-star" />);
    }
    return content;
  };
  return (
    <div className="col-lg-3 col-md-3 col-6 ">
      <Link
        to={"/detail/"+props.movielink}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="card">
          <img
            className="moviePosterImg"
            src={props.MovieTumbnail}
            alt={props.ImgAlt}
          />
          <div className="card-block">
            <h4 className="card-title text-center">{props.Title}</h4>
            <p className="text-center"> Year: {props.Year} </p>
            <p className="text-center">
              {" "}
              rating: {StarRating(props.Rating)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MovieItem;
