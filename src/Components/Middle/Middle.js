import React from "react"
import "./Middle.css"
import ParticlesComp from '../ParticlesComp/ParticlesComp'

export class Middle extends React.Component {
  render() {
    return (
      <div style={{ height: this.props.height }} className="Middle">
       <h1 className="Middle-header">Middle Here</h1>
        <ParticlesComp />
      </div>
    )
  }
}

export default Middle
