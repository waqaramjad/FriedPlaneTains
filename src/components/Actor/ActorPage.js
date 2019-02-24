import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './movieStyle.css'
import Rating from 'react-rating'

import {
  AcrtorsData

} from "../../store/actions/action";
class ActorPage extends Component {

  constructor(props) {

    super(props);
    this.state = {
      Actors : ''
    }
    // this.props.AcrtorsData()
    console.log(this.props.AcrtorsData())
console.log(this.props.Actors)
var actors = this.props.Actors
// this.setState({
//   Actors : actors
this.ratingSystem = this.ratingSystem.bind(this)
// })
  }


   componentDidMount() {
    // this.props.GetAllNewsFromFirebase();
  }

  ratingSystem(rating , object ){
console.log(rating)
console.log(object)

  }
  render() {
    console.log(this.props.Actors)
    console.log('sd',this.state.Actors)
    var that = this

    return (

<div class="container">
      <h2 style={{borderLeft: '8px solid rgb(255, 141, 27)', padding: '12px', marginLeft: '10px' ,     marginTop:' 4%'}}> Actors</h2>
      <div className="row">



      {
                  
              

                    
                  this.props.Actors!=undefined ?   Object.keys(this.props.Actors).map((data, index) => {
                  //    var todos = this.state.Sports['data']
                  var myActors = that.props.Actors[data]

                  console.log(myActors)
                  return(
                    <div className="col-lg-3 col-md-3  col-6">
                    <Link to={"/Actor/"+data }style={{color:'black',textDecoration:'none'}}> 
                      <div className="card card-inverse card-info text-center">
                        <img
                          className="moviePosterImg image"
                          src={myActors.imageURL}
                          alt="Card image cap"
                        />
                        <div className="card-block">
                          <h4 className="card-title text-center">{myActors.name}</h4>
                          {/* <p className="text-center"> Year: 2016 </p> */}
                          <p className="text-center">
                            {" "}
                            {/* rating: <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star  " />
                            <span class="fa fa-star" /> */}

<Rating
              emptySymbol={<img src="https://i.ibb.co/DKk6pMm/star-empty.png" className="icon" />}
              // emptySymbol={<img src="./starempty.png" className="icon" />}
              placeholderSymbol={<img src="https://i.ibb.co/DKk6pMm/star-empty.png" className="icon" />}
              fullSymbol={<img src="https://i.ibb.co/b25dkB4/star-yellow.png" className="icon" />}
              // onHover={(value  )=>{console.log(myActors)}}
              onClick={(value)=>{that.ratingSystem(value ,myActors )}}

              // onChange={(value)=>{console.log(value)}}
             />
                          </p>
                        </div>
                      </div>
                      </Link>
                    </div>

                  )
                  // console.log(index)
                  // SportsArr.push(data)
// console.log(SportsArr)
                  })  :null

}
  </div>

</div>
    )
}
}




function mapStateToProp(state) {
  console.log(state.reducer)
  return {
    Actors: state.reducer.ACTORS,
    // CurrentUser: state.reducer.currentUser,AllNews: state.reducer.News
  };
}
function mapDispatchToProp(dispatch) {
  return {
    
    AcrtorsData: () => {
      dispatch(AcrtorsData());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(ActorPage);
