import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating'
import { connect } from "react-redux";
import {
  
MovieRating
} from "../../store/actions/action";
import './movieStyle.css'

// const MovieItem = props => {
  //  let StarRating = rating => {
  //   let starRat = 5 - rating;
  //   let content=[];
  //   for (let i = 0; i < rating; i++) {
  //     content.push(<span class="fa fa-star checked" />);
  //   }
  //   for (let i = 0; i < starRat; i++) {
  //     content.push( <span class="fa fa-star" />);
  //   }
  //   return content;
  // };

  class MovieItem extends Component {

    constructor(props) {
  
      super(props);
      this.state = {
        Actors : ''
      }
      // this.props.AcrtorsData()
      // console.log(this.props.AcrtorsData())
  console.log(this.props.Actors)
  var actors = this.props.Actors
  // this.setState({
  //   Actors : actors
  this.ratingSystem = this.ratingSystem.bind(this)
  // })
    }
  
  
     componentDidMount() {
      // this.props.GetAllNewsFromFirebase();
    }
  
    ratingSystem(rating , object ){
  console.log(rating)
  console.log(object)
  // var currentUser = firebase.auth().currentUser
      // console.log(currentUser)
     this.props.MovieRating(rating ,object )
  
    }
    render() {
      // console.log(this.props.Actors)
      console.log('sd',this.state.Actors)
      var that = this
  
  var myprops = this.props


  return (
    <div className="col-lg-4 col-md-3 col-6 ">
      <Link
        to={"/detail/"+myprops.movielink}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="card">
          <img
            className="moviePosterImg image"
            src={myprops.MovieTumbnail}
            alt={myprops.ImgAlt}
          />
          <div className="card-block">
            <h4 className="card-title text-center">{myprops.Title}</h4>
            <p className="text-center"> Year: {myprops.Year} </p>
            {/* <p className="text-center">
              {" "}
              rating: {StarRating(props.Rating)}
            </p> */}
            <p className="text-center">
                            {" "}
                            {/* rating: <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star  " />
                            <span class="fa fa-star" /> */}

<Rating
              emptySymbol={<img src="https://i.ibb.co/DKk6pMm/star-empty.png" className="icon " />}
              // emptySymbol={<img src="./starempty.png" className="icon" />}
              placeholderSymbol={<img src="https://i.ibb.co/DKk6pMm/star-empty.png" className="icon" />}
              fullSymbol={<img src="https://i.ibb.co/b25dkB4/star-yellow.png" className="icon" />}
              // onHover={(value  )=>{console.log(myActors)}}
              onClick={(value)=>{that.ratingSystem(value ,myprops )}}
              initialRating={myprops.Rating}
              // onChange={(value)=>{console.log(value)}}
             />
                          </p>
          </div>
        </div>
      </Link>
    </div>
  );
    }
};
// export default MovieItem;

function mapStateToProp(state) {
  console.log(state.reducer)
  return {
    Actors: state.reducer.ACTORS,
    // CurrentUser: state.reducer.currentUser,AllNews: state.reducer.News
  };
}
function mapDispatchToProp(dispatch) {
  return {
    
  //   AcrtorsData: () => {
  //     dispatch(AcrtorsData());
  //   },
  MovieRating: (rating ,object ) => {
    dispatch(MovieRating(rating ,object ));
  },
}
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(MovieItem);

