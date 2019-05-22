import React from "react"
import "./App.css"
import ReactPageScroller from "react-page-scroller"
import Top from "./Components/Top/Top"
import Menu from "./Components/Menu/Menu"
import Middle from "./Components/Middle/Middle"
import Bottom from "./Components/Bottom/Bottom"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber)
  }

  render() {
    return (
      <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
        <Top height={this.state.height} />
        <Middle height={this.state.height} />
        <Bottom height={this.state.height} />
      </ReactPageScroller>
    )
  }
}

export default App
