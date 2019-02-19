import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './movieStyle.css'
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
// })
  }
   componentDidMount() {
    // this.props.GetAllNewsFromFirebase();
  }
  render() {
    console.log(this.props.Actors)
    console.log('sd',this.state.Actors)
    var that = this

    return (

<div class="container">
      <div className="row">
      {
                  
              

                    
                  this.props.Actors!=undefined ?   Object.keys(this.props.Actors).map((data, index) => {
                  //    var todos = this.state.Sports['data']
                  var myActors = that.props.Actors[data]

                  console.log(myActors)
                  return(
                    <div className="col-lg-3 col-md-3  col-6">
                    <Link to="/detail/interview" style={{color:'black',textDecoration:'none'}}> 
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
                            rating: <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star checked" />
                            <span class="fa fa-star  " />
                            <span class="fa fa-star" />
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
        <div className="col-lg-3 col-md-3 col-6 ">
        <Link to="/detail/Antman" style={{color:'black',textDecoration:'none'}}> 
          <div className="card">
            <img
              className="moviePosterImg image"
              src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Ant-Man</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/justiceLeague"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-primary text-center">
            <img
              className="moviePosterImg image "
              src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88207/90748/Justice-League-Advance-Style-Poster-buy-original-movie-posters-at-starstills__25567.1494429421.jpg?c=2?imbypass=on"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Justice League</h4>
              <p className="text-center"> Year: 2017 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/whiteHouseDown" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-success text-center ">
            <img
              className="moviePosterImg  image "
              src="http://picpusdan8.free.fr/W/white%20house%20downa.jpg"
              alt="Card image cap"
            />

            <div className="card-block">
              <h4 className="card-title text-center ">White House Down</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star " />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/wonderWomen"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://i.pinimg.com/originals/31/95/8d/31958d3dd38ca82ad9a64dd3edacfd2f.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Wonder Woman</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/oceanEight" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://cdn1.thr.com/sites/default/files/2017/12/sarah_paulson_screen_shot_-_every_con_has_its_pros-sq_2017.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Oceans Eleven</h4>
              <p className="text-center"> Year: 2018 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/HacksawRidge" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://lasallefalconer.com/wp-content/uploads/2017/04/share-img-900x473.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Hacksaw Ridge</h4>
              <p className="text-center"> Year: 2018 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/interview" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZsMTKcFXNzESCQoJfC4zcwMdgft0Y2sxu8QsrIQg7TZOAcN0"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">The Interview</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  " />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/johnWick" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://image.al.com/home/bama-media/width620/img/entertainment_impact/photo/jw2jpg-3fd0397399ecd913.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">John Wick</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-6 ">
        <Link to="/detail/BohemainRhapsody" style={{color:'black',textDecoration:'none'}}> 
          <div className="card">
            <img
              className="moviePosterImg image"
              src="https://s4827.pcdn.co/wp-content/uploads/2019/01/bohemian-rhapsody-banner.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">"Bohemian Rhapsody"</h4>
              <p className="text-center"> Year: 2015 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/MissonImpossibleFallout"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-primary text-center">
            <img
              className="moviePosterImg image "
              src="https://www.thebeaverton.com/wp-content/uploads/2018/07/mission-impossible-fallout.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Misson Impossible: Fallout</h4>
              <p className="text-center"> Year: 2017 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/ReadyPlayerOne" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-success text-center ">
            <img
              className="moviePosterImg  image "
              src="https://www.metrolibrary.org/sites/default/files/ready-player-one-new-poster-1-1021x580.jpg"
              alt="Card image cap"
            />

            <div className="card-block">
              <h4 className="card-title text-center ">Ready Player One</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star " />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/infinityWar"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg image"
              src="https://i1.wp.com/stlhattrick.com/wp-content/uploads/2018/05/landscape-1522924460-avengers-infinity-war-poster.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Marvel's Infinity War</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
       

      </div>

    </div>

    );
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
