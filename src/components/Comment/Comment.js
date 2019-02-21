
import React from "react";



const Comment = props => {
  return (
    <div className="card" style={{marginTop:'10px'}}>
    <div className="row" >
     
      <div className="  col-4 col-md-2 ">
        <img src={props.frontImg} style={{ padding: "15px" }} className=" img-fluid w-100 rounded-circle" alt="contains person behind the comments" />
      </div>
      <div className="col-md-10 col-8 " style={{ padding: "15px" }}>
       <h4>{props.Name}</h4>
       
       <p> says: {props.Comments.replace(/^(.{200}[^\s]*).*/, "$1")}</p> 
  
      </div>
    </div>
    </div>
  );
};
export default Comment;
