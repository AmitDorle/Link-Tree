import React from "react";
import "./LinkCard.css";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import github from "./github.png";

const ImgMap = {
    "twitter":twitter,
   " github":github,
    "linkedin":linkedin
}
export default function LinkCard(props) {
  return (
    <div className={'link-card bg-${props.title}'}>
        <a href={props.link}/>
      <div className="container-link-handle">
        <div>
          <img src={ImgMap[props.title]} className="card-img" alt="linkedin-logo"/>
        </div>
        <div className="handle-name">
          <h3>{props.username}</h3>
        </div>
      </div>
      <div className="handle-description">
          <p>{props.tagline}</p>
      </div>
    </div>
    
  );
}
