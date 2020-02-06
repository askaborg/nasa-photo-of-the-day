import React, {useState, useEffect} from "react"
import axios from "axios"
import DisplayApod from "./DisplayApod"

function GetAndDisplayApod() {
    const [apodData, setApodData] = useState([])
    const [apodError, setApodError] = useState([])

    useEffect (() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
            .then(responseApod => setApodData(responseApod.data))
            .catch(errorApod => setApodError(errorApod))
        }, [])
    return <DisplayApod apodData={apodData} apodError={apodError} />
}

export default GetAndDisplayApod