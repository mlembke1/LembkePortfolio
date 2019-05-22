import React from "react"
import "./Top.css"
import GreetingTitle from "./topComponents/GreetingTitle/GreetingTitle"

export class Top extends React.Component {
  render() {
    return (
      <div style={{height: this.props.height}} className="Top">
        <GreetingTitle />
      </div>
    )
  }
}

export default Top
