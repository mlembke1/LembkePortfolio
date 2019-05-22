import React from "react"
import "./Contact.css"
import ParticlesComp from '../ParticlesComp/ParticlesComp'

export class Contact extends React.Component {
  render() {
    return (
      <div style={{ height: this.props.height }} className="Contact">
        <ParticlesComp />
      </div>
    )
  }
}

export default Contact
