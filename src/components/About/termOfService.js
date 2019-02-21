import React, { Component } from "react";
import { connect } from "react-redux";
// import {signinAction}  from "../store/actions/action"promo_chat
import Banana from "../../media/promo_banan.png";
import Discuss from "../../media/promo_chat.png";
import Social from "../../media/promo_social.png";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../../store/actions/action";
const TOS = () => {
  return (
    <div className="container-fluid text-center" style={{ marginTop: "25px" }}>
      <div className="row">
        <div className=" col-md-8 offset-md-2">
          <div
            className="row align-items-center"
            style={{
              backgroundColor: "#101613",
              borderRadius: "5px 5px 0px 0px",
              padding: "20px"
            }}
          >
            <div className="col col-xs-2">
              <h3
                style={{
                  color: "#ffff00"
                }}
              >
                Fried Plantains Terms of Use and Privacy Policy
              </h3>
            </div>
          </div>
          {/* second row of the card  */}
          <div
            className="row"
            style={{
              backgroundColor: "#29302d",
              borderRadius: "0px 0px 5px 5px"
            }}
          >
            {/* second row whole column  */}
            <div className="col">
              {/* first row for the logos within the second row  */}
              <div className="row">
                {/* contains the col for logos */}
                <div className="text-white" style={{ padding: "30px" }}>
                  <div className="row">
                    <p className="text-left">
                    Welcome to FriedPlantains.com (the “Site or application”), operated by Green Hornet s.r.o. (“GH” “we” “our”)..{" "}
                    </p>
                  <h5  style={{   color: "#ffff00" }}> Acceptance of Terms of Use </h5>
                    <p className="text-left">
                    The Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the “Terms”). If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. Please read these terms carefully, since changes may be made to them from time to time and keep a copy of them for your reference. Any changes to the Terms will be updated on this page of the Site and such changes shall be effective immediately upon usage of the Site. By continuing to use the Site, you agree to be bound by all such modifications or revisions. 
                    {" "}
                    </p>
                    {/* <p className="text-left">
                    If you agree to our Terms of Use, you are agreeing that you may receive emails from Fried Plantains. All users have the right to opt out from receiving emails by unsubscribing if they wish to do so. To opt out click the “unsubscribe” link in the email, or contact hello@friedplantains.com. If you do choose to opt out from receiving emails, all Fried Plantains services will remain open to you, as is your right. Please note that you cannot unsubscribe from service-related correspondence from us. 

YOUR USE OF ALL FRIED PLANTAINS IMPLIES FULL ACCEPTANCE OF THE TERMS OF USE HEREIN SET OUT.                    {" "}
                    </p>
                    <p className="text-left">
                    YOUR USE OF ALL FRIED PLANTAINS IMPLIES FULL ACCEPTANCE OF THE TERMS OF USE HEREIN SET OUT.       {" "}
                    </p>
                    <p className="text-left">
                      Currently, Fried Plantains provides showtimes, VOD
                      accessibility and custom content geared towards a
                      primarily Nigerian audience. In the future, we strive to
                      diversify content to reach audiences in Burundi, Ghana,
                      Kenya, Rwanda, Tanzania, Uganda.
                    </p>
                    <p className="text-left">
                    If you would like to write for Fried Plantains, please contact: .{" "} 
                    </p>

                    <br/>
                  <h5  style={{   color: "#ffff00" }}>Privacy Policy </h5>
                    <p className="text-left">
                    Please read our privacy policy following the Terms.                    
                         {" "}
                    </p>
                    <br/>
                  <h5  style={{   color: "#ffff00" }}>Fried Plantains Service    {" "}</h5>
                    <p className="text-left">
                    You must be at least 18 years of age or the age of majority in your province, territory or country to agree to and enter into this agreement and agree to these Terms on your own behalf and to register for use of the Service. If you are under 18 but at least 16 years of age, you must present these Terms to your parent or legal guardian, and he or she must agree to the Terms on your behalf. Children under the age of 16 may not register for this Service, and parents or legal guardians may not register on their behalf. If you are a parent or guardian entering this agreement for the benefit of your child, please be aware that you are fully responsible for his or her use of the Service, including all financial charges and legal liability that he or she may incur.                         {" "}
                    </p> */}
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-4 offset-md-2">
          <p>
            If you are a movie-lover from any of these countries and would like
            to be notified when we have reached your country, please leave your
            contact info here:
          </p>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter FullName"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type ypur message here..."
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </div>
      </div> */}
      <br />
    </div>
  );
};

export default TOS;
