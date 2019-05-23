import React from "react"
import "./Greeting.css"
import GreetingTitle from "./greetingComponents/GreetingTitle/GreetingTitle"
import ParticlesComp from "../ParticlesComp/ParticlesComp"


export class Greeting extends React.Component {
  render() {
    return (
      <div style={{height: this.props.height}} className="Greeting">
        <ParticlesComp />
        <GreetingTitle />
      </div>
    )
  }
}

export default Greeting
