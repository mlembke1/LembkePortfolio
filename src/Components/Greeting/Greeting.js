import React from "react"
import "./Greeting.css"
import GreetingTitle from "./greetingComponents/GreetingTitle/GreetingTitle"

export class Greeting extends React.Component {
  render() {
    return (
      <div style={{height: this.props.height}} className="Greeting">
        <GreetingTitle topTitleVis={this.props.topTitleVis} />
      </div>
    )
  }
}

export default Greeting
