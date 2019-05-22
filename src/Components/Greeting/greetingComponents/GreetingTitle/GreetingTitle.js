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
        default: { duration: 500 }
      }
    },
    exit: {
      y: 0,
      x: 0,
      opacity: 0,
      transition: { duration: 350 }
    }
  })

let FadeInHeader = fadeIn(530, 0)
let FadeInHeaderSubText = fadeIn(520, 200)

export class GreetingTitle extends React.Component {
  state = { topTitleVis: false }

  changeVis = () => this.setState({ topTitleVis: !this.state.topTitleVis })

  componentWillReceiveProps(props){
    this.setState({ topTitleVis: props.topTitleVis })
  }

  componentDidMount() {
    setTimeout(() => this.changeVis(), 1000)
  }

  render() {
    return (
      <div>
        <FadeInHeader
          className="fade-in"
          pose={this.state.topTitleVis ? "enter" : "exit"}
        >
          <h1 className="fade-in-header">Test Title</h1>
        </FadeInHeader>
        <FadeInHeaderSubText
          className="fade-in"
          pose={this.state.topTitleVis ? "enter" : "exit"}
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
