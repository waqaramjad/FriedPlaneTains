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


class CinemaPage extends Component {
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
          <section id>
          <Link to={"/Actor" }style={{color:'black',textDecoration:'none'}}>        <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/genesis_logo.png)'}} className="chainbutton image" href="/home" id={1}  /> </Link>
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/silverbird_logo.png)'}} className="chainbutton image" href="#" id={2} onclick="showcinema(this.id)" />
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/filmhouse_logo.png)'}} className="chainbutton" href="#" id={3} onclick="showcinema(this.id)" />
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/new_ozone.png)'}} className="chainbutton" href="#" id={4} onclick="showcinema(this.id)" />
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/viva_logo.png)'}} className="chainbutton" href="#" id={5} onclick="showcinema(this.id)" />
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/kada_logo.png)'}} className="chainbutton" href="#" id={6} onclick="showcinema(this.id)" />
            <button style={{outline: 'none', background: 'url(https://s3-eu-west-1.amazonaws.com/fp-img/img/CinemaLogo/cartege_logo.png)'}} className="chainbutton" href="#" id={7} onclick="showcinema(this.id)" />
          </section>
        </h1></div>
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
)(CinemaPage);
