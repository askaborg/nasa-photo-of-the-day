import React from "react"
import styled from "styled-components"
import { Alert } from "reactstrap"

const ApodDiv = styled.div`
background: black;
color: blue;
height: 100%;
width: 100%;
padding: 160px;
`
const ApodH1 = styled.h1`
font-size: 5rem;
`
const ApodDate = styled.p`
font-size: 3rem;
color: white;
`
const ApodP = styled.p`
font-size: 1.5rem;
display: flex;
flex-direction: column;
margin: 0% 20%;
`
function DisplayApod(props) {
  const displayData = (apodData) => {
    const {date, explanation, title, url} = apodData

    return (
      <ApodDiv className="apod-nasa" key={date}>
        <img className="apod-image" alt={title} src={url}></img>
        <ApodH1>{title}</ApodH1>
        <ApodDate>{date}</ApodDate>
        <ApodP>{explanation}</ApodP>
      </ApodDiv> 
    )
  }

  const displayError = (apodError) => {
    const {message} = apodError

    return (<Alert color="danger">{message}</Alert>)
  }

  if (props.apodData.date !== undefined)
    return displayData(props.apodData)
  else if (props.apodError.message !== undefined)
    return displayError(props.apodError)
  else
    return <></>
}

export default DisplayApod