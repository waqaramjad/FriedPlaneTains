import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin

} from "../../store/actions/action";
import './SingleMovieStyle.css'
var Movies ; 


class Actor extends Component {
    constructor(props){
        super(props);
        Movies = this.props.MOVIES
        this.state={
         
        }
    }
  render() {
    console.log(this.props)
      let MovieNames=this.props.match.params.moviename;
      // let TrailerSource="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
      let TrailerSource="https://www.youtube.com/embed/mP0VHJYFOAU"
    return (
      <div className="container-fluid back">
        <div className="row">
          <br/>
        </div>
        <div className="row">

        <div className="col-md-4 ">
            <img
              className="SideimageLeft  "
              src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
              alt="Card image cap"
            />
        </div>


          <div className="col-md-7 ">
          {/* <div class='row'> */}
          <h3 class='topText'>Ant Man</h3><br/>
          <button className='AddWatchBtn' >Add to watch List </button>
            
          {/* </div> */}
            <div className="card card-inverse card-primary VideoSection" style={{marginTop:'15px'}}>
            <div className="videoWrapper" style={{margin:'5%'}}>
              <iframe
                width="560"
                height="315"
                src={TrailerSource}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                
                />
            </div>
            <div style={{
 marginLeft:'3%' , marginRight: '3%'}}>
                <h6 class='discription'>ohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day</h6>
            </div>
              <div className="card-block" style={{padding:'20px'}}>
                <h5 className="card-title "> Comments </h5>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Type ypur message here..."
                    rows="3"
                  />
                </div>
                <button type="submit" class="btn btn-warning submit">
                  Submit
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
        
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser, 
    MOVIES : state.reducer.MOVIES

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
)(Actor);
