import React, { Component } from "react";

 const Newsitem=(props)=>  {
  
    let { title, description, imageUrl, newsUrl,author,date } = props;
    return (
      <div className="my-3">
        
        <div className="card" >
          <img src={!imageUrl ?"https://www.reuters.com/resizer/4YGrbB3lyUvGLJOCoSr0kLrnpj8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3ZHEYNPWDZIDRPIAKCCJI2JEVQ.jpg":imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:" "}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark btn-primary"
            >
              Read More
            </a>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown": author } on {new Date(date).toLocaleString()} </small></p>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
