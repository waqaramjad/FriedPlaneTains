import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviesList from "../Movie/MovieList";
import Gallery from "../Sliders/AliceSlider";
import MovieNews from '../News/NewsItem';
import './style.css';
import {
  changeName,
  GoogleSignin,
  facebookSignin , MOVIESData, GetAllNews , AcrtorsData
} from "../../store/actions/action";
import Carousal from "../Sliders/carousal";
// import SelectSearch from 'react-select-search'
const options = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
      type: 'group',
      name: 'Group name',
      items: [
          {name: 'Spanish', value: 'es'},
      ]
  },
];

function renderFontValue(label, option) {
  if (!option) {
      return label;
  }

  return <span style={{ fontFamily: option['data-stack'] }}>{label}</span>;
}

function renderFontOption(option) {
  if (!('data-stack' in option)) {
      return option.name;
  }

  const style = {
      fontFamily: option['data-stack'],
  };

  return <span style={style}>{option.name}</span>;
}

function renderFriend(option) {
  const imgStyle = {
      borderRadius: '50%',
      verticalAlign: 'middle',
      marginRight: 10,
  };

  return (<span><img alt="" style={imgStyle} width="40" height="40" src={option.photo} /><span>{option.name}</span></span>);
}

function renderColors(option) {
  return (<span><span>{option.name}</span></span>);
}
class Home extends Component {

  constructor(props) {
    
    super(props);
    // this.props.MOVIESData()
    
    // this.props.AcrtorsData()
    // this.props.MOVIESData()
  }

  componentDidMount() {
    this.props.GetAllNewsFromFirebase();
    // this.props.MOVIESData()
  }

  
  render() {
console.log('movie home' , this.props)
    return (
      <div className="container-fluid">
        <Carousal />

        <br />
        <br />
      
        <div className="row">
        
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              Featured Movies{" "}
            </h2>
          </div>
        </div>

        <MoviesList />
        <br />
        <div className="row">
        {/* <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      /> */}
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              MOST POPULAR MOVIES
            </h2>
          </div>
        </div>

        <Gallery />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
            NEWS
            </h2>
          </div>
        </div>
     <div className="container-fluid">
        {this.props.AllNews
          ? this.props.AllNews.slice(0, 3).map(x => {
              console.log(x);
              return (
                <div className="row" style={{marginTop:'10px'}}>
                  <div className="col-md-10 offset-md-1">
                  <MovieNews  heading={x.headline} frontImg={x.frontImg} description={x.description} date={x.articleCreated}
                  />
                  </div>
                </div>
              );
            })
          : null}
      </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser,AllNews: state.reducer.News
  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
    MOVIESData: () => {
      dispatch(MOVIESData());
    },
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    },GetAllNewsFromFirebase: () => {
      dispatch(GetAllNews());
    }  , 
    AcrtorsData: () => {
      dispatch(AcrtorsData());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home);
