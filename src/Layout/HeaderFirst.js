import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import Model from "./../components/Sliders/Model";
import "./header.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
// import { facebookSignout } from "../store/actions/action";
import SelectSearch from "react-select-search";
import MobileLogo from "../media/fp_logo_small.png";
import "./searchBar.css";
import history from "../History";

import { facebookSignout, SearchData } from "../store/actions/action";
var SEARCHDATANODE = [];
var MYDATA = [];
class HeaderFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.props.SearchData();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  clear = () => {
    this.setState({
      font: "",
      country: "",
      friends: [],
      colors: [],
      SEARCHDATA: ""
    });
  };
  state = {
    font: "Playfair Display",
    country: "SE",
    friends: [],
    colors: ["red", "purple"],
    SEARCHDATA: "DONE"
  };
  render() {
    var that = this;
    SEARCHDATANODE = this.props.SEARCHDATA;

    return (
      // main div start
      <div>
        {/* our sidebar ,its styling is done in navStyle.css */}
        
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <div className="menuitem">
            <div
              className="input-group "
              style={{ padding: "0px", width: "230px" }}
            >
              {(() => {
                // do this right now
                console.log("comin");
                if (that.props.SEARCHDATA != undefined) {
                  console.log(that.props.SEARCHDATA);
                  // console.log(cont)
                  return (
                    <SelectSearch
                      name="Searching"
                      mode="input"
                      // value={that.state.SEARCHDATA}
                      // options={that.props.SEARCHDATA}
                      options={SEARCHDATANODE}
                      placeholder="Search Actor and Films"
                      // onChange={(val , val1 , val2)=>{history.push('/Actor/'+val.value)}}
                      onChange={(val, val1, val2) => {
                        console.log(val);
                        if (val.Bio != undefined) {
                          history.push({
                            pathname: "/Search",
                            searchData: val
                          });
                          this.closeMenu();
                        } else {
                          history.push({
                            pathname: "/SearchMovie",
                            searchData: val
                          });
                          this.closeMenu();
                        }
                      }}
                      // onChange={(val , val1 , val2)=>{ console.log(val) ;console.log(val1) ;console.log(val2)   }}
                    />
                  );
                }
                console.log("Look at me, I'm running");
              })()}

              <div className="input-group-append">
                {/* <button className="btn SearchButtonStyling" type="button">
                    Search
                  </button> */}
              </div>
            </div>
          </div>
          
          <Link to="/" className="menuItem" onClick={() => this.closeMenu()}>
            Home
          </Link>

          <Link
            to="/Actors"
            className="menuItem"
            onClick={() => this.closeMenu()}
          >
            Actors
          </Link>

          <Link
            to="/Movies"
            className="menuItem"
            onClick={() => this.closeMenu()}
          >
            Movies
          </Link>
          <Link
            to="/Cinema"
            className="menuItem"
            onClick={() => this.closeMenu()}
          >
            Cinema
          </Link>
          <Link
            to="/news"
            className="menuItem"
            onClick={() => this.closeMenu()}
          >
            News
          </Link>
          <Link
            to="/contact"
            className="menuItem"
            onClick={() => this.closeMenu()}
          >
            Contact
          </Link>
        
        </Menu>
        {/* <CustomIcon /> */}
        {/* sidebar menu ends */}
        <div className="container-fluid">
          {/* navbar fluid  */}
          <div className="row navbar-expand-lg2 align-items-center ">
            {/* row div  */}
            <div
              className="col-md-4 col-12 specialLogo headerDisplayBigDevice"
              style={{ padding: "8px" }}
            >
              {/* first col and our logo  */}
              <Link className="navbar-brand" to="/">
                <img
                  className="iconsizeBig"
                  src="https://s3-eu-west-1.amazonaws.com/fp-img/gfx/fp_logo_slogan.png"
                  alt="fried plantins logo"
                />
              </Link>
            </div>
            {/* our logo col ends */}
            <div
              className="col-4 specialLogo  headerDisplaySmallDevice"
              style={{ padding: "10px" }}
            >
              {/* first col and our logo  */}
              <Link className="navbar-brand" to="/">
                <img
                  className="iconSize"
                  src={MobileLogo}
                  alt="fried plantins logo"
                />
              </Link>
            </div>
            {/* second col starts and our search icon  */}
            <div
              className="col-3 col-md-2   headerDisplayBigDevice"
              style={{ padding: "10px" }}
            >
              <span
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="navbarTextSize "
              >
                Search <i className=" navbarIconSize fas fa-search" />
              </span>
            </div>
            {/* second col of search icon ends */}
            {/* third col of login /view profile icon */}
            {/* this cols check is the user is logged in or not */}
            {this.props.CurrentUser ? (
              <div className="col-4  col-md-3" style={{ padding: "10px" }}>
                <Link className="nav-link" to="/User">
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
                  <span className="headerNavigationGap dropdown">
                    <Link
                      className=" dropdown-toggle navbarTextSize"
                      data-toggle="dropdown"
                      to="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Profile
                    </Link>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item " to="/User">
                        My Profile
                      </Link>
                      <Link
                        class="dropdown-item"
                        to="#"
                        onClick={() => {
                          this.props.PerformLogout();
                        }}
                      >
                        Sign Out
                      </Link>
                    </div>
                  </span>
                </Link>
              </div>
            ) : (
              <div className="col-4  col-md-3" style={{ padding: "10px" }}>
                <Link
                  className="nav-link"
                  to="/"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span className="navbarTextSize ">
                    Login <i className=" navbarIconSize far fa-play-circle" />
                  </span>
                </Link>
                <Model />
              </div>
            )}
            {/* third col of log in ends */}
            {/* fourth col of menu starts */}
            <div className="col-4  col-md-3 " style={{ padding: "10px" }}>
              <span
                className="navbarTextSize "
                onClick={() => this.toggleMenu()}
              >
                Menu <i className=" navbarIconSize fas fa-bars" />
              </span>
            </div>
            {/* fourth col ends of menu */}
          </div>

          {/* first row ends which contains our navbar */}
          {/* second row contains our search bar  */}
          <div className="row">
            {/* col of our search form  */}
            <div className="col-4 offset-4">
              <div className="collapse" id="collapseExample">
                <div className="input-group " style={{ padding: "20px" }}>
                  {(function() {
                    // do this right now
                    console.log("comin");
                    if (that.props.SEARCHDATA != undefined) {
                      console.log(that.props.SEARCHDATA);
                      // console.log(cont)
                      return (
                        <SelectSearch
                          name="Searching"
                          mode="input"
                          // value={that.state.SEARCHDATA}
                          // options={that.props.SEARCHDATA}
                          options={SEARCHDATANODE}
                          placeholder="Search Actor and Films"
                          // onChange={(val , val1 , val2)=>{history.push('/Actor/'+val.value)}}
                          onChange={(val, val1, val2) => {
                            console.log(val);
                            if (val.Bio != undefined) {
                              history.push({
                                pathname: "/Search",
                                searchData: val
                              });
                            } else {
                              history.push({
                                pathname: "/SearchMovie",
                                searchData: val
                              });
                            }
                          }}
                          // onChange={(val , val1 , val2)=>{ console.log(val) ;console.log(val1) ;console.log(val2)   }}
                        />
                      );
                    }
                    console.log("Look at me, I'm running");
                  })()}

                  <div className="input-group-append">
                    {/* <button className="btn SearchButtonStyling" type="button">
                    Search
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* col of our search form ends */}
          </div>
          {/* second row ends */}
        </div>
        {/* container-fluid ends */}
      </div>
      // main div end
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
    PerformLogout: () => {
      dispatch(facebookSignout());
    },
    SearchData: () => {
      dispatch(SearchData());
    }
  };
}
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(HeaderFirst);
