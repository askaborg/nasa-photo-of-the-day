import React from "react"
import "./App.css"
import GetAndDisplayApod from "./components/GetAndDisplayApod"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <GetAndDisplayApod />
    </div>
  )
}

export default App
