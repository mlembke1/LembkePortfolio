import React from "react"
import "./GreetingTitle.css"
import posed from "react-pose"

const fadeIn = (y, delay) =>
  posed.div({
    enter: {
      y,
      x: 20,
      opacity: 1,
      delay,
      transition: {
        x: { type: "spring", stiffness: 1000, damping: 15 },
        default: { duration: 600 }
      }
    },
    exit: {
      y: 0,
      x: 0,
      opacity: 0,
      transition: { duration: 450 }
    }
  })

const FadeInHeader = fadeIn(530, 0)
const FadeInHeaderSubText = fadeIn(520, 300)

export class GreetingTitle extends React.Component {
  state = { isVis: false }

  changeVis = () => this.setState({ isVis: !this.state.isVis })

  componentDidMount() {
    setTimeout(() => this.changeVis(), 1000)
  }

  render() {
    return (
      <div>
        <FadeInHeader
          className="fade-in"
          pose={this.state.isVis ? "enter" : "exit"}
        >
          <h1 className="fade-in-header">Test Title</h1>
        </FadeInHeader>
        <FadeInHeaderSubText
          className="fade-in"
          pose={this.state.isVis ? "enter" : "exit"}
        >
          <p className="fade-in-subText">
            Here Is the Fade in SubText. Change this out for whatever you would
            like. Blah blah intro stuff.
          </p>
        </FadeInHeaderSubText>
      </div>
    )
  }
}

export default GreetingTitle
