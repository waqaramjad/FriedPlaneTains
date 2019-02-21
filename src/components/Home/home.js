import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviesList from "../Movie/MovieList";
import Gallery from "../Sliders/AliceSlider";
import MovieNews from '../News/NewsItem';
// import ReactSearchBox from 'react-search-box'
import { countries, fontStacks, friends, colors } from './data';
import './style.css';
import {
  changeName,
  GoogleSignin,
  facebookSignin , MOVIESData, GetAllNews
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
    this.props.MOVIESData()
    

  }
   componentDidMount() {
    this.props.GetAllNewsFromFirebase();
  }
  state = {
    font: 'Playfair Display',
    country: 'SE',
    friends: [],
    colors: ['red', 'purple']
};

clear = () => {
  this.setState({
      font: '',
      country: '',
      friends: [],
      colors: []
  });
};

  ata = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  
  render() {
    return (
      <div className="container-fluid">
        <Carousal />

        <br />
        <br />
        {/* <ReactSearchBox
        placeholder="Placeholder"
        value=""
        data={[
            {
            key1: 'john',
            value: 'John Doe',
            discription :{
              key: 'john',
              value: 'John Doe',

            }
          },
          {
            
            value: 'Jane Doe 2',
          },
          {
            key: 'mary',
            value: 'Mary Phillips',
          },
          {
            key: 'robert',
            value: 'Robert',
          },
          {
            key: 'karius',
            value: 'Karius',
          },
        ]}
        callback={record => console.log('callback',record)}
        onChange ={record => console.log('onChange' ,record)}
        onSelect ={record => console.log('onSelect', record)}
        
      /> */}

{/* <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" /> */}
      
{/* <SelectSearch
                    name="font"
                    value={this.state.font}
                    renderOption={renderFontOption}
                    search={false}
                    renderValue={renderFontValue}
                    options={fontStacks}
                    placeholder="Choose font"
                />
                <SelectSearch
                    name="country"
                    mode="input"
                    value={this.state.country}
                    options={countries}
                    placeholder="Your country"
                /> */}
                {/* <SelectSearch
                    name="friends"
                    multiple
                    value={this.state.friends_search}
                    height={172}
                    options={friends}
                    placeholder="Search friends"
                    renderOption={renderFriend}
                /> */}
                {/* <SelectSearch
                    name="colors"
                    multiple
                    search={false}
                    value={this.state.colors}
                    height={172}
                    options={colors}
                    renderOption={renderColors}
                /> */}
      
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
          ? this.props.AllNews.map(x => {
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
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home);
