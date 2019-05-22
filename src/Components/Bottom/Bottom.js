import React from "react"
import "./Bottom.css"

export class Bottom extends React.Component {
  render() {
    return (
      <div style={{ height: this.props.height }} className="Bottom">
        Bottom Here
      </div>
    )
  }
}

export default Bottom
