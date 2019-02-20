import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin , 
  CinemaData

} from "../../store/actions/action";
import './cinemaPage.css'
var ACTORS ; 
var CinemaTag 
var singleCinema


class Cinema extends Component {
    constructor(props){
        super(props);
        ACTORS = this.props.ACTORS
        this.state={
         
        }
var CinemaTag=this.props.match.params.CinemaName;
        this.props.CinemaData(CinemaTag)


    }
  render() {
    console.log(this.props.CINEMA)    
    CinemaTag=this.props.match.params.CinemaName;
    console.log(CinemaTag)
    
    if(this.props.CINEMA!=undefined){
      // [CinemaTag]
      console.log(this.props.CINEMA)    
      // console.log(this.props.CINEMA.kodo)    
       singleCinema = this.props.CINEMA[CinemaTag]
      console.log(singleCinema)
    }



    // console.log(this.props)
    //   let ActorName=this.props.match.params.ActorName;
    //   console.log('MovieNames' , ActorName)
      // let TrailerSource="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
      let TrailerSource="https://www.youtube.com/embed/mP0VHJYFOAU"
    return (
      <div id="chains" style={{textAlign: 'center', display: 'block'}} className=" fpcontainer container ">
        <h1> Choose a cinema chain</h1><h1>
        </h1>
        <div className="container ">
        <h2>Bordered Table</h2>
        <p>The .table-bordered class adds borders to a table:</p>    
        <div className = "row">

<div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Movie </th>
              <th colspan={3}>Timings</th>
              
            </tr>
          </thead>
          <tbody>

          {
                  
              

                    
                  singleCinema!=undefined ?   Object.keys(singleCinema).map((data, index) => {

                    console.log(data)
                    console.log(singleCinema[data])
                    var myData = singleCinema[data]
                    console.log(myData['timings'])
                    var timings = myData['timings']

                    console.log(timings[0])
                    return(

            <tr>
              <td>{myData.name}</td>
              <td>{timings[0]}</td>
              <td>{timings[1]}</td>
              <td>{timings[2]}</td>
              
            
            </tr>
                    )


                  })     : null             
}
           
          </tbody>
        </table>

        </div>

          </div>        
      </div>
        </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser, 
    CINEMA : state.reducer.CINEMA

  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
    CinemaData: (CinemaTag) => {
      dispatch(CinemaData(CinemaTag));
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
