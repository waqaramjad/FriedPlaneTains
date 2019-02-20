import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import Model from "./../components/Sliders/Model";
// import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
import {
  facebookSignout , 
  SearchData ,
} from "../store/actions/action";
import SelectSearch from 'react-select-search'
import { countries, fontStacks, friends, colors } from './data';

import './style.1.css';
var cont = [
  {name: 'Afghanistan',  iwdg:'we', wefd :'wef'},
  {name: 'Åland Islands',  iwdg:'we', wefd :'wef'},
  {name: 'Albania', iwdg:'we', wefd :'wef' },
  {name: 'Algeria',  iwdg:'we', wefd :'wef'},
  // {name: 'American Samoa', iwdg:'we', wefd :'wef' },
  // {name: 'AndorrA', value: 'AD', iwdg:'we', wefd :'wef'},
  // {name: 'Angola', value: 'AO', iwdg:'we', wefd :'wef'},
  // {name: 'Anguilla', value: 'AI', iwdg:'we', wefd :'wef'},
  // {name: 'Antarctica', value: 'AQ', iwdg:'we', wefd :'wef'}
]
var SEARCHDATANODE = [];
// import SignInModel from "./../Components/SignInModel";
class HeaderFirst extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.props.SearchData()
    // this.setState({
    //   Searching : SearchingData
    // })
  }

  clear = () => {
    this.setState({
        font: '',
        country: '',
        friends: [],
        colors: [] , 
        SEARCHDATA : ''
       
    });
  };
  state = {
    font: 'Playfair Display',
    country: 'SE',
    friends: [],
    colors: ['red', 'purple'] , 
    SEARCHDATA : 'DONE'

};
  render() {
    SEARCHDATANODE = this.props.SEARCHDATA

    var that = this
    console.log('dvdf',this.props.SEARCHDATA)
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

              {/* {
                this.props.SEARCHDATA!=undefined ?
                
                :null
              } */}
              {/* {this.props.SEARCHDATA!=undefined } */}
              {
                (function(){
                  // do this right now
                  if(that.props.SEARCHDATA!=undefined){
console.log(that.props.SEARCHDATA)
console.log(cont)
                    return(
  <SelectSearch
                    name="Searching"
                    mode="input"
                    // value={that.state.SEARCHDATA}
                    options={that.props.SEARCHDATA}
                    placeholder="Search Actor and Films"
                    onChange={(val , val1 , val2)=>{console.log('val',val1),console.log('val1',val1),console.log('val2',val2)}}
                /> 
)
                  }
                  console.log("Look at me, I'm running");
              })()
              }
              {/* <SelectSearch
                    name="country"
                    mode="input"
                    value={this.props.country}
                    options={this.state.Searching}
                    placeholder="Your country"
                />  */}
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
    CurrentUser: state.reducer.currentUser,
    SEARCHDATA: state.reducer.SEARCHDATA
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
    } , 
    SearchData:()=>{
      dispatch(SearchData());
    }
  };
}
export default connect(mapStateToProp,mapDispatchToProp)(HeaderFirst);
