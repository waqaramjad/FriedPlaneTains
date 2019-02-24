import React, { Component } from "react";

import { connect } from "react-redux";
import  Comment from '../Comment/Comment'
import OtherMovies from "../Movie/OtherMovies";
import {
  changeName,
  GoogleSignin,
  facebookSignin , 
  ProfileSaveFilmList , 
  MOVIESData,CommentOnMovie,GetCommentsofMovie

} from "../../store/actions/action";
import ScrollUp from '../ScrollUp/scroll';
import './SingleMovieStyle.css'
import firebase from 'firebase'
var Movies ; 
var MovieNames

class MoviePage extends Component {
    constructor(props){
        super(props);
        Movies = this.props.MOVIES
        this.state={
          MOVIES: "",
      MovieNames: "",
      commentText:'',
        }
        this.addPlayList = this.addPlayList.bind(this)
    }

    PerformComment=(event)=>{

      this.setState({
       commentText:event.target.value
   })
   console.log(this.state.commentText);
   }
   changeMovie=(moviename)=>{
     this.setState({MovieNames:moviename});
     console.log('state changed? ',this.state.MovieNames)
     window.scrollTo(0, 0);
   }

   displayMovies=(MovieObj)=>{
    let tumbnail=[];
    for (let [key, value] of Object.entries(MovieObj)) {
      
      // console.log( "values", value);
     
        tumbnail.push(
        <OtherMovies movielink={value.name} MovieTumbnail={value.MovieTumbnail} ImgAlt={value.ImgAlt} Title={value.Title} Year={value.Year} Rating={value.Rating}
        ChangeTheMovie={this.changeMovie} 
        />)
      
  }
  return tumbnail;

  }
   SaveComment=()=>{
    let commentObj={
      userWhoPerformedTheComment:this.props.CurrentUser.displayname,
      pictureOfTheUser:this.props.CurrentUser.userpic,
      Comment:this.state.commentText,
      NameOftheMovie:this.state.MovieNames
    }
    this.props.PerformCommentOnMovies(commentObj);
    this.setState({
      commentText:''
  });

   }

   
   componentDidMount() {
    if (this.props.MOVIES) {
      // console.log(this.props.MOVIES ,"from 23");
      // var MovieNames = this.props.match.params.moviename;
      //  var TrailerSource =
      //  "https://www.youtube.com/embed/" + this.props.MOVIES[MovieNames].TrailerUrl;
     this.props.GetAllComments(this.props.match.params.moviename);
     
      this.setState({
        MOVIES: this.props.MOVIES,
        MovieNames: this.props.match.params.moviename,
       
      });
    }


  }


    addPlayList(){
console.log(MovieNames)
var movie =  this.props.match.params.moviename
      this.props.ProfileSaveFilmList(movie)
// var user = firebase.auth().currentUser
// console.log('user' , user)
// console.log('user.uid' , user.uid)

    }
    render() {
      return (
        <div className="container-fluid back">
          {this.state.MOVIES ? (
            <div>
              <div className="row">
              <ScrollUp />
                <div
                  className="col-md-11 offset-md-1"
                  style={{ marginTop: "15px" }}
                >
                  <h3 className='topText'>{this.state.MOVIES[this.state.MovieNames].Title}</h3>
                  <button className='AddWatchBtn' onClick={()=>{this.addPlayList()}} >Add to watch List </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 offset-md-1">
                  <div
                    className="card card-inverse card-primary VideoSection"
                    style={{ marginTop: "15px" }}
                  >
                    <div className="videoWrapper" style={{ margin: "5%" }}>
                      <iframe
                        width="560"
                        height="315"
                        src={
                          "https://www.youtube.com/embed/" +
                          this.state.MOVIES[this.state.MovieNames].TrailerUrl
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div
                       style={{
                        marginLeft:'3%' , marginRight: '3%'}}
                    >
                      <h6 className='discription'>
                        {this.state.MOVIES[this.state.MovieNames].discription}
                      </h6>
                    </div>
                    {this.props.CurrentUser ? (
                      <div className="card-block" style={{ padding: "20px" }}>
                        <h5 className="card-title "> Comments </h5>
  
                        <div class="form-group">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="Type ypur Comment here..."
                            rows="3"
                            value={this.state.commentText} onChange={this.PerformComment}
                          />
                        </div>
                        <button type="submit" class="btn btn-warning" onClick={this.SaveComment}>
                          Submit
                        </button>
                      </div>
                    ) : (
                      <h4 style={{ margin: "10px" }}>
                        you need to be logged in inorder to comment...
                      </h4>
                    )}
                  </div>
                  {this.props.Comments?this.props.Comments.map(x => {
                        return (
                          <Comment Name={x.userWhoPerformedTheComment} frontImg={x.pictureOfTheUser}  
                          Comments={x.Comment}
                          />
                        );
                      }
                      )
                      :null}
                </div>
                <div className="col-md-4 col-12">
                <h4 className="text-white">Other Movies</h4>
                {this.props.MOVIES ?
       this.displayMovies(this.props.MOVIES)
          
         :null
          }
                </div>
              </div>
              {/* <div className="row">
              <div className="col-12 col-md-7 offset-md-1">
                      {this.props.Comments?this.props.Comments.map(x => {
                        return (
                          <Comment Name={x.userWhoPerformedTheComment} frontImg={x.pictureOfTheUser}  
                          Comments={x.Comment}
                          />
                        );
                      }
                      )
                      :null}
              </div>
              </div> */}
            </div>
          ) : (
            <div className="row">
              <div className="col-11 offset-1" style={{ margin: "20px" }}>
                <h2>
                  Oh.. there seemed to be a problem ...please go back to home page
                </h2>
              </div>
            </div>
          )}
        </div>
      );
    }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser, 
    MOVIES : state.reducer.MOVIES , 
    Comments:state.reducer.latestComment

  };
}
function mapDispatchToProp(dispatch) {
  return {
    ProfileSaveFilmList: (profile) => {
      dispatch(ProfileSaveFilmList(profile));
    },
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    }, 
    PerformCommentOnMovies:(data)=>{
      dispatch(CommentOnMovie(data));
    }
    ,GetAllComments:(data)=>{
      dispatch(GetCommentsofMovie(data))
    }

  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(MoviePage);
