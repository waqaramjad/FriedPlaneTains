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
      <div className="container fp-no-padding" style={{textAlign: 'justify'}}>
        <h3 style={{textAlign: 'center'}}><b>Fried Plantains Terms of Use and Privacy Policy</b></h3><br />
        <p>
          Welcome to FriedPlantains.com (the “Site or application”), operated by Green Hornet s.r.o. (“GH” “we” “our”). 
        </p>
        <br />
        <b><u>Acceptance of Terms of Use</u></b>
        <br />
        <p>
          The Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the “Terms”). If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. Please read these terms carefully, since changes may be made to them from time to time and keep a copy of them for your reference. Any changes to the Terms will be updated on this page of the Site and such changes shall be effective immediately upon usage of the Site. By continuing to use the Site, you agree to be bound by all such modifications or revisions.
          <br /><br />
          If you agree to our Terms of Use, you are agreeing that you may receive emails from Fried Plantains. All users have the right to opt out from receiving emails by unsubscribing if they wish to do so.  To opt out click the “unsubscribe” link in the email, or contact <a href="mailto:hello@friedplantains.com"><u>hello@friedplantains.com</u></a>.  If you do choose to opt out from receiving emails, all Fried Plantains services will remain open to you, as is your right.  Please note that you cannot unsubscribe from service-related correspondence from us.
          <br /><br />
          YOUR USE OF ALL FRIED PLANTAINS IMPLIES FULL ACCEPTANCE OF THE TERMS OF USE HEREIN SET OUT.
        </p>
        <br /><br /><br />
        <b><u>Privacy Policy</u></b>
        <p>
          Please read our privacy policy following the Terms.
        </p>
        <b><u>Fried Plantains Service</u></b>
        <p>
          You must be at least 18 years of age or the age of majority in your province, territory or country to agree to and enter into this agreement and agree to these Terms on your own behalf and to register for use of the Service. If you are under 18 but at least 16 years of age, you must present these Terms to your parent or legal guardian, and he or she must agree to the Terms on your behalf. Children under the age of 16 may not register for this Service, and parents or legal guardians may not register on their behalf. If you are a parent or guardian entering this agreement for the benefit of your child, please be aware that you are fully responsible for his or her use of the Service, including all financial charges and legal liability that he or she may incur. 
        </p>
        <b><u>Use of Fried Plantains Service</u></b>
        <p>
          Subject to your compliance with the Terms, as well as GH’s receipt of any applicable fees associated with the service, you are granted a non-exclusive, non-transferable, revocable license to access and use GH strictly in accordance with these terms of use. As a condition of your use of the Site or application, you warrant to GH that you will not use the Site or application for any purpose that is unlawful or prohibited by these Terms. You may not use the Site or application in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site or application. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site or application. 
          &nbsp;<br /><br />
          GH makes no guarantees, representations or warranties about the viewing quality on your device and you acknowledge that display quality may vary from device to device and be affected by geography and bandwidth and other similar factors or circumstances. GH is not responsible for any internet charges you may incur in connection with the use of the GH service and you should check with your internet provider regarding additional data and use fees that may become associated with the use of the service on the applicable viewing device. 
          &nbsp;<br /><br />
          GH may use geographic location verification software to verify geographic location. 
          &nbsp;<br /><br />
          GH is not responsible for errors in or omissions from the information contained or accessed through the service. ALL INFORMATION AND CONTENT ON THE SERVICE, SITE OR APPLICATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>
        <b><u>Restrictions</u></b>
        <p>
          You agree to use the GH services in accordance with all applicable laws, rules and regulations. In addition, you agree that: (i) You will not reproduce, upload, copy, sell, change, transmit or modify anything appearing on the application, unless otherwise permitted herein; (ii) You may not retransmit any content or make it available via frames; (iii) You may not create a business for profit or not utilizing the content; (iv) You may not alter, interfere with or circumvent any notice whether in copyright, trademark, or similar notice or any anti-piracy; 
        </p>
        <b><u>Electronic Communications </u></b>
        <p>
          Visiting GH or sending emails to GH constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the application, satisfy any legal requirement that such communications be in writing. 
        </p>
        <b><u>Username/Password</u></b>
        <p>
          The Site or application may prompt you to create a username and/or password to access certain content and services. You are responsible for protecting and securing your password and you will not allow others to use your username or password. If you authorize the unauthorized use of your username and password, you hereby indemnify and hold GH harmless in connection with any improper, unauthorized or illegal use of the Site or application or services or content.
        </p><p>
          <b><u>Copyright Infringement</u></b>
        </p><p>
          Please notify us if you believe we are infringing your copyright before making any infringement claims. Such notice should be emailed to <a href="mailto:legal@friedplantains.com"><u>legal@friedplantains.com</u></a> and must include a warranty that you are entitled to act on behalf of the copyright owner of the applicable content at issue.
        </p>
        <b><u>Third Party Content</u></b>
        <p>
          GH may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of GH and GH is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. GH is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by GH of the site or any association with its operators. 
          &nbsp; &nbsp;<br /><br />
          Certain services made available via GH are delivered by third party sites and organizations. By using any product, service or functionality originating from the GH domain, you hereby acknowledge and consent that GH may share such information and data with any third party with whom GH has a contractual relationship to provide the requested product, service or functionality on behalf of GH users and customers. 
        </p>
        <b><u>No unlawful or prohibited use/Intellectual Property </u></b>
        <p>
          All content included as part of the service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site or application, is the property of GH or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto. 
          &nbsp;<br /><br />
          You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. GH content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of GH and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of GH or our licensors except as expressly authorized by these Terms. 
        </p>
        <b><u>Indemnification </u></b>
        <p>
          You agree to indemnify, defend and hold harmless GH, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or application or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. GH reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with GH in asserting any available defenses. 
          &nbsp; </p>
        <b><u>Arbitration </u></b>
        <p>
          In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Courts in Prague, Czech Republic conducted by a single neutral arbitrator, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrators award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms or any disputes arising as a result of these Terms, whether directly or indirectly, including Tort claims that are a result of these Terms. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms. 
          &nbsp; </p>
        <b><u>Class Action Waiver </u></b>
        <p>
          Any arbitration under these Terms will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Employer agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding. 
          &nbsp; </p>
        <b><u>Liability Disclaimer</u> </b>
        <p>
          THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. GREEN HORNET S.R.O. AND/OR ITS SUPPLIERS, SUBSIDIARIES, AFFILIATES MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. 
          &nbsp; &nbsp;<br /><br />
          GREEN HORNET S.R.O. AND/OR ITS SUPPLIERS AND/OR ITS SUBSIDIARIES OR AFFILIATES MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. GREEN HORNET S.R.O. AND/OR ITS SUPPLIERS, SUBSIDIARIES, AFFLIATES HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. 
          &nbsp; &nbsp;<br /><br />
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL GREEN HORNET S.R.O. AND/OR ITS SUPPLIERS, SUBSIDIARIES, AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF GREEN HORNET S.R.O. OR ANY OF ITS SUPPLIERS, SUBSIDIARIES, AFFILIATES HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE. 
          &nbsp; </p>
        <b><u>Termination/access restriction</u></b>
        <p>
          GH reserves the right, in its sole discretion, to terminate your access to the Site or application and the related services or any portion thereof at any time, without notice. 
          &nbsp; <br /><br />
          You agree that no joint venture, partnership, employment, or agency relationship exists between you and GH as a result of this Agreement or use of the Site or application. GH’s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of GH's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by GH with respect to such use. If any part of this Agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Agreement shall continue in effect. 
          &nbsp; <br /><br />
          Unless otherwise specified herein, this Agreement constitutes the entire agreement between the user and GH with respect to the Site or the application and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and GH with respect to the Site or application. A printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this Agreement and all related documents be written in English. 
          &nbsp;</p>
        <b><u>Changes to Terms</u></b>
        <p>
          GH reserves the right, in its sole discretion, to change the Terms under which the Site or application or services is offered. The most current version of the Terms will supersede all previous versions. GH encourages you to periodically review the Terms to stay informed of our updates. 
        </p>
        <br /><br /><br /><br />
        <b><u>PRIVACY POLICY</u></b>
        <p>
          Green Hornet s.r.o.("us", "we", or "our") operates the Fried Plantains application and website (the "Service").
          <br /><br />
          This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
          <br /><br />
          We will not use or share your information with anyone except as described in this Privacy Policy.
          <br /><br />
          We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
        </p>
        <b>Information Collection And Use</b>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, postal address ("Personal Information").
          <br /><br />
          If you wish to retrieve data that we have collected from you, contact <a href="mailto:hello@friedplantains.com"> <u>hello@friedplantains.com</u></a> to request this. We will send you what data we have collected and based on this, you can inform us on which data you wish us to delete and we will do so.
        </p>
        <b>Log Data</b>
        <p>
          When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use and other statistics ("Log Data").
        </p>
        <b>Location information</b>
        <p>
          We may use and store information about your location, if you give us permission to do so. We use this information to provide features of our Service, to improve and customize our Service. You can enable or disable location services when you use our Service at anytime, through your mobile device settings.
        </p>
        <b>Cookies</b>
        <p>
          Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
          <br /><br />
          We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          <br /><br />
          Our Site uses Google Analytics, a service which transmits website traffic data to Google servers in the United States. Google Analytics does not identify individual users or associate your IP address with any other data held by Google. We use reports provided by Google Analytics to help us understand website traffic and web page usage.
        </p>
        <b>Service Providers</b>
        <p>
          We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          <br /><br />
          These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        <b>Compliance With Laws</b>
        <p>
          Please be aware that our service follows the EU General Data Protection Regulation (the GDPR).
          <br /><br />
          We will disclose your Personal Information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.
        </p>
        <b>Business Transaction</b>
        <p>
          If Green Hornet s.r.o. or any of its subsidiaries or affiliates is involved in a merger, acquisition or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy.
        </p>
        <b>Security</b>
        <p>
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
        </p>
        <b>Links To Other Sites</b>
        <p>
          Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          <br /><br />
          We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </p>
        <b>Children's Privacy</b>
        <p>
          Our Service does not address anyone under the age of 16 ("Children"). 
          <br /><br />
          We do not knowingly collect personally identifiable information from children under 16. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 16 without verification of parental consent, we take steps to remove that information from our servers.
        </p>
        <b>Changes To This Privacy Policy</b>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          <br /><br />
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
        <b>Contact Us</b>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:legal@friedplantains.com"> <u>Legal@friedplantains.com</u> </a>
        </p>
        <br /><br />
      </div>
    </div>
    </div>
  );
};

export default TOS;
