import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import Model from "./../components/Model";
// import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
import {
  facebookSignout
} from "../store/actions/action";
// import SignInModel from "./../Components/SignInModel";
class HeaderFirst extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div
          className="row navbar-expand-lg2 align-items-center "
          style={{ padding: "10px" }}
        >
          <div className="col">
            <Link className="navbar-brand" to="/">
              <img
                height={"48px"}
                width={"277px"}
                src="https://s3-eu-west-1.amazonaws.com/fp-img/gfx/fp_logo_slogan.png"
              />
            </Link>
          </div>
          <div className="col">
            <form className="  my-3 my-lg-0">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search For Movie & Actors"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                 
                />
                <div className="input-group-append">
                  <button className="btn SearchButtonStyling" type="button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          {this.props.CurrentUser ?  <div className="col">
            <Link className="nav-link" to="/User"   >
              {/* <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              
              >
                {" "}
              See Profile
                
              </span> */}
              <span class="headerNavigationGap dropdown" style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}>
             <Link
             
                className=" dropdown-toggle"
                data-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white",
                fontSize: "18px",
                fontWeight: "bold"}}
              >
                Profile
              </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="/User">
                  My Profile
                </Link>
                <Link class="dropdown-item" to="#" onClick={()=>{
                  this.props.PerformLogout();
                }}>
                  Sign Out
                </Link>
               
            
      
              </div>
            </span>
            </Link>
           
          </div> :
          <div className="col">
            <Link className="nav-link" to="/"   data-toggle="modal"
                data-target="#exampleModal">
              <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              
              >
                {" "}
                Sign-in
                
              </span>
            </Link>
            <Model />
          </div>
         
              }
        </div>
      </div>
    );
  }
}
function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser
  };
}
function mapDispatchToProp(dispatch) {
  return {
    // changeUserName: () => {
    //   dispatch(changeName());
    // },
    // PerformGoogleSignIn: () => {
    //   dispatch(GoogleSignin());
    // },
    // PerformFBSignIn: () => {
    //   dispatch(facebookSignin());
    // }
    PerformLogout:()=>{
      dispatch(facebookSignout());
    }
  };
}
export default connect(mapStateToProp,mapDispatchToProp)(HeaderFirst);
