import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../../store/actions/action";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText:''
    };
  }
  PerformComment=(event)=>{
 
    this.setState({
      commentText:event.target.value
  })
  console.log(this.state.commentText);
  }

  SaveComment=()=>{
    let commentObj={
      userWhoPerformedTheComment:this.props.currentUser.displayname,
      pictureOfTheUser:this.props.currentUser.photoURL,
      Comment:this.state.commentText,
      NameOftheNEWS:this.props.match.params.newstitle
    }

    this.setState({
      commentText:''
  })
  }
  
  render() {
    let Newstitle = this.props.match.params.newstitle;

    return (
      <div className="container-fluid">
        {this.props.AllNews
          ? this.props.AllNews.map(x => {
              if (Newstitle == x.headline) {
                return (
                  <div>
                    <div className="row">
                      <div
                        className="col-md-11 offset-md-1"
                        style={{ marginTop: "15px" }}
                      >
                        <h3>{x.headline}</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7 offset-md-1">
                        <div style={{ marginTop: "10px" }}>
                          <img
                            src={x.insideImg}
                            className="NewsPicture w-100"
                          />
                        </div>

                        {this.props.CurrentUser ? (
                          <div
                            className="card-block"
                            style={{ padding: "20px" }}
                          >
                            <p>Article created on: {x.articleCreated}</p>
                            <p> {x.description} </p>

                            {/* <h5 className="card-title "> Comments </h5>

                            <div className="form-group">
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Type ypur message here..."
                                rows="3"
                                value={this.state.commentText} onChange={this.PerformComment}
                              />
                            </div>
                            <button type="submit" class="btn btn-warning">
                              Submit
                            </button> */}
                          </div>
                        ) : (
                          <div
                            className="card-block"
                            style={{ padding: "20px" }}
                          >
                            <p>Article created on: {x.articleCreated}</p>
                            <p> {x.description} </p>
                            {/* <h5 style={{ padding: "20px" }}>
                              Please login to Comment...
                            </h5> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            })
          : null}
        <div className="row" />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser,
    AllNews: state.reducer.News
  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(MoviePage);
