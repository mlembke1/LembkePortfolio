import React from "react"
import "./GreetingTitle.css"
import ScrollAnimation from 'react-animate-on-scroll';

export class GreetingTitle extends React.Component {

  render() {
    return (
      <div className="greeting-text-wrapper">
          <ScrollAnimation 
          duration={7}
          animateIn='fadeIn'
          animateOut='fadeOut'>
            <h1 className="greeting-text-header">Test Title</h1>        
            <p className="greeting-text-subText">
              Here Is the Fade in SubText. Change this out for whatever you would
              like. Blah blah intro stuff.
            </p>
          </ScrollAnimation>
      </div>
    )
  }
}

export default GreetingTitle
