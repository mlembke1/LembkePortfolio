import React from "react"
import "./App.css"
import ReactPageScroller from "react-page-scroller"
import Greeting from "./Components/Greeting/Greeting"
import Menu from "./Components/Menu/Menu"
import Middle from "./Components/Middle/Middle"
import Contact from "./Components/Contact/Contact"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount = () => window.removeEventListener("resize", this.updateWindowDimensions)

  updateWindowDimensions = () => this.setState({ width: window.innerWidth, height: window.innerHeight })
  
  goToPage = pageNumber => this.reactPageScroller.goToPage(pageNumber)

  render() {
    return (
      <div>
        <Menu goToPage={this.goToPage} />
        <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
          <Greeting id="home" height={this.state.height} />
          <Middle id="about" height={this.state.height} />
          <Contact id="contact" height={this.state.height} />
        </ReactPageScroller>
      </div>
    )
  }
}

export default App
