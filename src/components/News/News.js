import React, { Component } from "react";
import { connect } from "react-redux";
import MovieNews from './NewsItem';
import {
  changeName,
  GoogleSignin,
  facebookSignin,
  GetAllNews
} from "../../store/actions/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { Hollywood: true, Nollywood: true };
  }

  componentDidMount() {
    this.props.GetAllNewsFromFirebase();
  }
  render() {
    //   console.log("from reducer",this.props.AllNews);
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "15px" }}>
          <div className="col-md-7 offset-md-1">
            <h2>Category of News</h2>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={()=>{
            
                this.setState({Hollywood:true,Nollywood:true});
              }}
            >
              Show All News
            </button>{" "}
            <button
              type="button"
              className="btn btn-info"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={()=>{
               
                this.setState({Hollywood:true,Nollywood:false});
              }}
            >
              Hollywood News
            </button>{" "}
            <button
              type="button"
              className="btn btn-dark"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={()=>{
            
                this.setState({Hollywood:false,Nollywood:true});
              }}
            >
              Nollywood News
            </button>
          </div>
         
        </div>
        <div className="row" style={{marginTop:'10px'}}>
        <div className="col-md-7 offset-md-1">
        {this.props.AllNews && this.state.Hollywood && this.state.Nollywood ? 
            <h4>Showing All News</h4>
            :null}
            {this.props.AllNews && this.state.Hollywood && !this.state.Nollywood ? 
            <h4>Showing All Hollywood News</h4>
            :null}
            {this.props.AllNews && !this.state.Hollywood && this.state.Nollywood ? 
            <h4>Showing All Nollywood News</h4>
            :null}
        </div>
        </div>

        {this.props.AllNews && this.state.Hollywood && this.state.Nollywood
          ? this.props.AllNews.map(x => {
              console.log(x);
              return (
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-md-8 offset-md-1">
                    <MovieNews
                      heading={x.headline}
                      frontImg={x.frontImg}
                      description={x.description}
                      date={x.articleCreated}
                    />
                  </div>
                </div>
              );
            })
          : null}
          {this.props.AllNews && this.state.Hollywood && !this.state.Nollywood
          ?  this.props.AllNews.map(x => {
              console.log(x);
              if(x.TypeOfNews=='Hollywood'){
              return (
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-md-8 offset-md-1">
                    <MovieNews
                      heading={x.headline}
                      frontImg={x.frontImg}
                      description={x.description}
                      date={x.articleCreated}
                    />
                  </div>
                </div>
              );
              }
            })
          : null}
           {this.props.AllNews && !this.state.Hollywood && this.state.Nollywood
          ?  this.props.AllNews.map(x => {
              console.log(x);
              if(x.TypeOfNews=='Nollywood'){
              return (
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-md-8 offset-md-1">
                    <MovieNews
                      heading={x.headline}
                      frontImg={x.frontImg}
                      description={x.description}
                      date={x.articleCreated}
                    />
                  </div>
                </div>
              );
              }
            })
          : null}
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser,
    AllNews: state.reducer.News
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
    },
    GetAllNewsFromFirebase: () => {
      dispatch(GetAllNews());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home);