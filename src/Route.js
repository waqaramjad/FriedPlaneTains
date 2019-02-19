import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home/home";
// import About from './components/about';
import UserHome from "./components/Home/UserHome";
import Signin from "./components/Auth/Sign-in";
import AboutUs from "./components/About/AboutUs";
import Header from './Layout/Header';
import HeaderOne from './Layout/HeaderFirst';
import Movie from './components/Movie/Movie';
import MoviesPage from './components/Movie/moviePage';
import Footer from './Layout/Footer';
import Contact from './components/Contact/Contact';
import News from "./components/News/News";
import FullNews from './components/News/FullNews';
import ActorPage from './components/Actor/ActorPage';
import Actor from './components/Actor/Actor';
import CinemaPage from './components/Cinema/CinemaPage'
import Cinema from './components/Cinema/Cinema'
// import Chat from './components/chat';

import history from "./History";

// export const history = createBrowserHistory()

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="theme">
          <div className="fl-page">
          <HeaderOne/>
          <Header/>
            <Route exact path="/" component={Home} />

            <Route exact path="/User" component={UserHome} />
            <Route exact path="/login" component={Signin} />
            {/* <Route exact path="/contact" component={AboutUs} /> */}
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/detail/:moviename" component={Movie}/>
            <Route exact path="/Actor/:ActorName" component={Actor}/>
            <Route exact path="/news" component={News} />
            <Route exact path="/Movies" component={MoviesPage} />
            <Route exact path="/Actors" component={ActorPage} />
            <Route exact path="/fullnews/:newstitle" component={FullNews}/>
            <Route exact path="/Cinema" component={CinemaPage} />
            <Route exact path="/Cinema/:CinemaName" component={Cinema}/>
            <div className="fl-page-footer-wrap">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
