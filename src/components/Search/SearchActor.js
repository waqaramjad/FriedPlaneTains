import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin , 
  AcrtorsData


} from "../../store/actions/action";
import './SingleMovieStyle.css'
// var SearchActors = undefined ; 

var ActorName
class SearchActors extends Component {
    constructor(props){
        super(props);
        // ACTORS = this.props.ACTORS
        this.state={
         
        }
        this.props.AcrtorsData()
    }
  render() {
    var that = this

    // console.log(that.props.location.searchData)
    // let ActorName=this.props.match.params.ActorName;
    //  ActorName = 'Bradpitt';
    // console.log(this.props.ACTORS)
    //   console.log('MovieNames' , ActorName)
    //   ACTORS = this.props.ACTORS
    //   // let TrailerSou rce="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
    //   let TrailerSource="https://www.youtube.com/embed/mP0VHJYFOAU"
    return (
<div>
      {
        (function(){
          // do this right now
          console.log('comin')
          if(true){
            // console.log(ACTORS)
            // console.log(ActorName)
            // console.log(ACTORS[ActorName])
            // console.log(ACTORS.Bradpitt)
            // console.log('sf',ACTORS)
              // if(ACTORS['Bradpitt']!=undefined){
              if(that.props.location.searchData != undefined){
// console.log(ACTORS.Bradpitt)
// console.log(cont)
console.log(that.props.location.searchData)
var check = that.props.location.searchData
            return(
              <div className="container-fluid back">
              <div className="row">
                <br/>
              </div>
              <div className="row">
      
              <div className="col-md-4 ">
                  <img
                    className="SideimageLeft  "
                    src={check.imageURL}
                    alt="Card image cap"
                  />
              </div>
      
      
                <div className="col-md-7 ">
                {/* <div class='row'> */}
                <h3 class='topText'>{check.name}</h3><br/>
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
                      <h6 class='discription'>{check.Bio}</h6>
                      <ul class='discription' style={{listStyleType:'none'}}>
        <li>Films : {check.Films}</li>
        <li>Birthday : {check.DOB}</li>
        <li>Height : {check.height} feet</li>
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
)
          }
          else{
            return( <div className="row">
            <div className="col-11 offset-1" style={{ margin: "20px" }}>
              <h2 style={{color:'black'}}>
                Oh.. there seemed to be a problem ...please go back to home page
              </h2>
            </div>
          </div>)
          }
        }
          console.log("Look at me, I'm running");
      })()
      }
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
   
    AcrtorsData: () => {
      dispatch(AcrtorsData());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(SearchActors);
