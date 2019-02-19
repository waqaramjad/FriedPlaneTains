import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin

} from "../../store/actions/action";
import './cinemaPage.css'
var ACTORS ; 


class Cinema extends Component {
    constructor(props){
        super(props);
        ACTORS = this.props.ACTORS
        this.state={
         
        }
    }
  render() {
    // console.log(this.props)
    //   let ActorName=this.props.match.params.ActorName;
    //   console.log('MovieNames' , ActorName)
      // let TrailerSource="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
      let TrailerSource="https://www.youtube.com/embed/mP0VHJYFOAU"
    return (
      <div id="chains" style={{textAlign: 'center', display: 'block'}} className=" fpcontainer container ">
        <h1> Choose a cinema chain</h1><h1>
        </h1>
        <div className="container">
        <h2>Bordered Table</h2>
        <p>The .table-bordered class adds borders to a table:</p>            
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
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
)(Cinema);
