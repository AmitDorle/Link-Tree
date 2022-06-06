import React from "react";
import "./LinkCard.css";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import github from "./github.png";
import instagram from "./instagram.png";

const ImgMap = {
    "twitter":twitter,
    "linkedin":linkedin,
    "github":github,
    "instagram":instagram,
    
}
function LinkCard(props) {
  return (
    <div className={`link-card bg-${props.title}`}>
      <a href={props.link} className="hyperlink">
      <div className="container-link-handle">
        <div>
          <img src={ImgMap[props.title]} alt="logo" className="card-img"/>
        </div>
        <div className="handle-name">
          <h3 className="username">{props.username}</h3>
        </div>
      </div>

      <div className="handle-description">
        <p>{props.tagline}</p>
      </div>
      </a>
    </div>
  )
}

export default LinkCard;