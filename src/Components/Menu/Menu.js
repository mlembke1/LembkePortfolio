import React from "react"
import "./Menu.css"
import Icon from "@material-ui/core/Icon"

export class Menu extends React.Component {
  render() {
    return (
    <div className="Menu">
      <div onClick={() => this.props.goToPage(0)} className="side-menu-icon icon-white">
        <Icon >home</Icon>
      </div>
      <div onClick={() => this.props.goToPage(1)} className="side-menu-icon icon-white">
        <Icon >face</Icon>
      </div>
      <div onClick={() => this.props.goToPage(2)} className="side-menu-icon icon-white">
        <Icon >work_outline</Icon>
      </div>
      <div onClick={() => this.props.goToPage(3)} className="side-menu-icon icon-white">
        <Icon >alternate_email</Icon>
      </div>
    </div>
    )
  }
}

export default Menu
