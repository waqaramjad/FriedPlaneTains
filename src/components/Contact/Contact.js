import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";
// import {signinAction}  from "../store/actions/action"promo_chat
import Banana from "../../media/promo_banan.png";
import Discuss from "../../media/promo_chat.png";
import Social from "../../media/promo_social.png";
import {
  changeName,
  GoogleSignin,
  facebookSignin , ContactData
} from "../../store/actions/action";
// const Contact = () => {

  class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name : '' ,
        email : '',
        message : ''
      };
      this.contactData = this.contactData.bind(this)
    }
 
   
contactData(){

// alert('sdugfi')
var name = this.state.name
var email = this.state.email
var message = this.state.message

var ConractData = {
  name ,
  email, 
  message
}
this.props.ContactDataSend(ConractData)
}

    render() {
    var that = this
    console.log(this.state)
  return (
    <div>
      
    <div style={{marginLeft:'7%' , marginBottom:'4%'}}>
      
    <h2 style={{borderLeft: '8px solid rgb(255, 141, 27)', padding: '12px', marginLeft: '10px' ,     marginTop:' 4%'}}> Contact Us</h2>
    </div>
    <div className="container">
    <div>
        <div style={{width: '100%'}}><iframe width="100%" height={600} src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>&lt;a href="https://www.maps.ie/map-my-route/"&gt;Map a route&lt;/a&gt;</iframe></div><br />
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="well well-sm">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" required="required"  onChange= {(value)=>{var val = value.target.value ; that.setState({name: val})  }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address</label>
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-envelope" />
                      </span>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" required="required"  onChange= {(value)=>{var val = value.target.value ; that.setState({email: val})  }} /></div>
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="subject">
                      Subject</label>
                    <select id="subject" name="subject" className="form-control" required="required">
                      <option value="na" selected>Choose One:</option>
                      <option value="service">General Customer Service</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="product">Product Support</option>
                    </select>
                  </div> */}
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      Message</label>
                    <textarea name="message" id="message" className="form-control" rows={9} cols={25} required="required" placeholder="Message" defaultValue={""}  onChange= {(value)=>{var val = value.target.value ; that.setState({message: val})  }}
                     />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="button" className="btn btn-primary pull-right" id="btnContactUs" onClick={that.contactData}>
                    Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <form>
            <legend><span className="glyphicon glyphicon-globe" />&nbsp;Our office</legend>
            <address>
              <strong>Twitter, Inc.</strong><br />
              795 Folsom Ave, Suite 600<br />
              San Francisco, CA 94107<br />
              <abbr title="Phone">
                P:</abbr>
              (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong><br />
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
    };
};

function mapStateToProp(state) {
  // return {
  //   userName: state.reducer.name,
  //   CurrentUser: state.reducer.currentUser, 
  //   MOVIES : state.reducer.MOVIES , 
  //   Comments:state.reducer.latestComment

  // };
}
function mapDispatchToProp(dispatch) {
  return {
    ContactDataSend: (data) => {
      dispatch(ContactData(data));
    },

  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Contact);


// export default Contact;
