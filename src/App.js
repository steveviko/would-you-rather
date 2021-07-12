import React, { Component } from "react"
import Questions from "./components/Questions"


class App extends Component {
  state = {
    isOpen: false
  }

  

  render() {
    return (
      <div>
        
        <Questions />
        
      </div>
    )
  }
}

export default App;
