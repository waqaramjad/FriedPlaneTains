import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin

} from "../../store/actions/action";
import './SingleMovieStyle.css'
var ACTORS ; 


class Actor extends Component {
    constructor(props){
        super(props);
        ACTORS = this.props.ACTORS
        this.state={
         
        }
    }
  render() {
    console.log(this.props)
      let ActorName=this.props.match.params.ActorName;
      console.log('MovieNames' , ActorName)
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
              src={ACTORS[ActorName].imageURL}
              alt="Card image cap"
            />
        </div>


          <div className="col-md-7 ">
          {/* <div class='row'> */}
          <h3 class='topText'>{ACTORS[ActorName].name}</h3><br/>
          {/* <button className='AddWatchBtn' >Add to watch List </button> */}
            
          {/* </div> */}
            <div className="card card-inverse card-primary VideoSection" style={{marginTop:'15px'}}>
            {/* <div className="videoWrapper" style={{margin:'5%'}}>
              <iframe
                width="560"
                height="315"
                src={TrailerSource}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                
                />
            </div> */}
            <div style={{
 marginLeft:'3%' , marginRight: '3%'}}>
                <h6 class='discription'>{ACTORS[ActorName].Bio}</h6>
                <ul class='discription' style={{listStyleType:'none'}}>
  <li>Films : {ACTORS[ActorName].Films}</li>
  <li>Birthday : {ACTORS[ActorName].DOB}</li>
  <li>Height : {ACTORS[ActorName].height} feet</li>
</ul>  
            </div>
              {/* <div className="card-block" style={{padding:'20px'}}>
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
              </div> */}
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
    ACTORS : state.reducer.ACTORS

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
