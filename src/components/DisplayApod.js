import React from "react"

function DisplayApod(props) {
    const {date, explanation, title, url} = props.apodData
  
    return (
      <div className="apod-nasa" key={date}>
        <img className="apod-image" alt={title} src={url}></img>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    )
  }

  export default DisplayApod