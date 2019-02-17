import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviesList from "./MovieList";
import Gallery from "./AliceSlider";
import MovieNews from './NewsItem';
import {
  changeName,
  GoogleSignin,
  facebookSignin , MOVIESData, GetAllNews
} from "../store/actions/action";
import Carousal from "./carousal";
class Home extends Component {

  constructor(props) {

    super(props);
    this.props.MOVIESData()

  }
   componentDidMount() {
    this.props.GetAllNewsFromFirebase();
  }
  render() {
    return (
      <div className="container-fluid">
        <Carousal />

        <br />
        <br />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              Featured Movies{" "}
            </h2>
          </div>
        </div>

        <MoviesList />
        <br />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              MOST POPULAR MOVIES
            </h2>
          </div>
        </div>

        <Gallery />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
            NEWS
            </h2>
          </div>
        </div>
     <div className="container-fluid">
        {this.props.AllNews
          ? this.props.AllNews.map(x => {
              console.log(x);
              return (
                <div className="row" style={{marginTop:'10px'}}>
                  <div className="col-md-10 offset-md-1">
                  <MovieNews  heading={x.headline} frontImg={x.frontImg} description={x.description} date={x.articleCreated}
                  />
                  </div>
                </div>
              );
            })
          : null}
      </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser,AllNews: state.reducer.News
  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
    MOVIESData: () => {
      dispatch(MOVIESData());
    },
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    },GetAllNewsFromFirebase: () => {
      dispatch(GetAllNews());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home);
