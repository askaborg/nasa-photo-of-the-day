import React from "react"
import styled from "styled-components"
import { Alert } from "reactstrap"

const MyDiv = styled.div`
background: black;
color: blue;
height: 100%;
width: 100%;
padding: 160px;
`
const MyH1 = styled.h1`
font-size: 5rem;
`
const MyDate = styled.p`
font-size: 3rem;
color: white;
`
const MyP = styled.p`
font-size: 1.5rem;
display: flex;
flex-direction: column;
margin: 0% 20%;
`
function DisplayApod(props) {

  const displayIt = (props) => {
    const {date, explanation, title, url} = props.apodData
    const {message} = props.apodError
    console.log('date', date)
    console.log('explanation', explanation)
    console.log('title', title)
    console.log('url', url)
    console.log('message', message)

  }
  displayIt(props)


  return <></>
    // //true
    // <Alert color="danger">{message}</Alert>
    // ) : (
    // //false
    // <MyDiv className="apod-nasa" key={date}>
    //   <img className="apod-image" alt={title} src={url}></img>
    //   <MyH1>{title}</MyH1>
    //   <MyDate>{date}</MyDate>
    //   <MyP>{explanation}</MyP>
    // </MyDiv> 
    // )
  }

  export default DisplayApod