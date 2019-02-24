import React, { Component } from "react";
import { connect } from "react-redux";
// import {signinAction}  from "../store/actions/action"promo_chat
// import PlaceholderICON from "../../media/29.png";
import PlaceholderICON from "../../media/29.png";
import "../style.css";
import SelectSearch from 'react-select-search'
import {
  changeName,
  GoogleSignin,
  facebookSignin , 
  getSaveList , getActorRating

} from "../../store/actions/action";
// const UserHome = this.props => {
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
  class UserHome extends Component {
    constructor(props){
        super(props);
       
        this.state={
         
        }
// var CinemaTag=this.this.props.match.params.CinemaName;
//         this.this.props.CinemaData(CinemaTag)
this.props.getSaveList()
this.props.getActorRating()

    }
  render() {
//  var myData = this.props.getSaveList()
//  console.log('sdf', myData)
// this.props.PlayList
console.log(this.props)
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-12">
          <h3 />
        </div>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="card text-white bg-dark ">
            <div className="card-body HomeUserBackDrop">
              <p className="card-text">
                {this.props.CurrentUser.userpic ? (
                  <img
                    src={this.props.CurrentUser.userpic}
                    width={"120px"}
                    height={"120px"}
                    style={{ borderRadius: '50%'}}
                  />
                ) : (
                  <img style={{borderRadius: '50%'}} src={PlaceholderICON} width={"120px"} height={"120px"} />
                )}
              </p>
              <h5 className="card-title">{this.props.CurrentUser.displayname}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-8 offset-md-2 text-left">
          {this.props.CurrentUser.displayname ? (
            <h3 className="text-left">
              {this.props.CurrentUser.displayname}- REVIEWS
            </h3>
          ) : (
            <h3 className="text-left">Name- REVIEWS</h3>
          )}

          <div
            className="card"
            style={{ backgroundColor: "#29302d", color: "#ffff00" }}
          >
            <div className="card-body ">
              <p className="card-text">No reviews yet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-4 offset-md-2 text-left">
          <h4
            style={{
              backgroundColor: "#101613",
              color: "#ffff00",
              textAlign: "center",
              padding: "20px",
              margin: "0px auto"
            }}
          >
            Most Favourited Movies
          </h4>
          <table class="table  table-bordered  table-hover table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col" className="text-center">
                  Movie Title
                </th>
                <th scope="col" className="text-center">
                  Times Saved
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="text-center">
                  Bad Moms
                </td>
                <td className="text-center">9</td>
              </tr>
              <tr>
                <td scope="row" className="text-center">
                  Transformers: The Last Knight
                </td>
                <td className="text-center"> 4 </td>
              </tr>
              <tr>
                <td scope="row" className="text-center">
                  Atóna
                </td>
                <td className="text-center">4</td>
              </tr>
              <tr>
                <td scope="row" className="text-center">
                  The Forest of Hands and Teeth
                </td>
                <td className="text-center">4</td>
              </tr>
              <tr>
                <td scope="row" className="text-center">
                  Roti
                </td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td scope="row" className="text-center">
                  Freaks of Nature
                </td>
                <td className="text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 text-left">
          <h4
            style={{
              backgroundColor: "#101613",
              color: "#ffff00",
              textAlign: "center",
              padding: "20px",
              margin: "0px auto"
            }}
          >
            Nigerian Most Rated Movies
          </h4>
          <table class="table  table-bordered  table-hover table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col" colspan="2" className="text-center">
                  Movie Title
                </th>
                <th scope="col" className="text-center">
                  Times Rated
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  The Guest
                </td>
                <td className="text-center">53376</td>
              </tr>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  Broken
                </td>
                <td className="text-center"> 9439 </td>
              </tr>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  Friday Night
                </td>
                <td className="text-center">1490</td>
              </tr>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  Half of a Yellow Sun
                </td>
                <td className="text-center">947</td>
              </tr>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  Mother of George
                </td>
                <td className="text-center">696</td>
              </tr>
              <tr>
                <td scope="row" colspan="2" className="text-center">
                  Over the Edge
                </td>
                <td className="text-center">571</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row" style={{ marginTop: "15px" }}>
      <div className="col-md-4 offset-md-2 text-left">
          <h4
            style={{
              backgroundColor: "#101613",
              color: "#ffff00",
              textAlign: "center",
              padding: "20px",
              margin: "0px auto"
            }}
          >
            Saved Movie
          </h4>
          <table class="table  table-bordered  table-hover table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col" className="text-center">
                  No
                </th>
                <th scope="col" className="text-center">
                  Movie Name
                </th>
              </tr>
            </thead>
            <tbody>
              {

                this.props.PlayList!=undefined ? Object.keys( this.props.PlayList).map((data, index) => {
var myData = this.props.PlayList[data]

                  console.log(data)
                  return(
                    <tr>
                    <td scope="row" className="text-center">
                      {index}
                    </td>
                    <td className="text-center">{myData.SaveFilm}</td>
                  </tr>
                  )


                }) : null
              }
            </tbody>
            </table>


      
      </div>
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
      <div className="col-md-4 offset-md-2 text-left">
          <h4
            style={{
              backgroundColor: "#101613",
              color: "#ffff00",
              textAlign: "center",
              padding: "20px",
              margin: "0px auto"
            }}
          >
            Actor Rating
          </h4>
          <table class="table  table-bordered  table-hover table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col" className="text-center">
                  No
                </th>
                <th scope="col" className="text-center">
                 Actor Name
                </th>
                <th scope="col" className="text-center">
                Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {

                this.props.ActorRating!=undefined ? Object.keys( this.props.ActorRating).map((data, index) => {
var myData = this.props.ActorRating[data]

                  console.log(data)
                  return(
                    <tr>
                    <td scope="row" className="text-center">
                      {index}
                    </td>
                    <td className="text-center">{data}</td>
                    <td className="text-center">{myData.ActorRating}</td>
                  </tr>
                  )


                }) : null
              }
            </tbody>
            </table>


      
      </div>
      </div>
      <br />
    </div>
  );
          }
};
function mapStateToProp(state) {
  return {
    //   userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser , 
    PlayList : state.reducer.PROFILESAVELIST,
    ActorRating : state.reducer.ActorRating
  };
}
function mapDispatchToProp(dispatch) {
  return {
    PerformGoogleUserHome: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    } , 
    getSaveList: () => {
      dispatch(getSaveList());
    } , 
    getActorRating: () => {
      dispatch(getActorRating());
    } , 

  };
}
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(UserHome);
