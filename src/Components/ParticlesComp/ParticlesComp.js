import React from "react"
import './ParticlesComp.css'
import Particles from 'react-particles-js';

const particlesOptions = {
	"particles": {
		"number": {
			"value": 260,
			"density": {
				"enable": true,
				"value_area": 1500
			}
		},
		"line_linked": {
			"enable": true,
			"opacity": 0.02
		},
		"move": {
			"direction": "right",
			"speed": 5
		},
		"size": {
			"value": 1
		},
		"opacity": {
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0.01
			}
		}
	},
	"retina_detect": true
}

export class ParticlesComp extends React.Component {
  render() {
    return (
        <Particles
		className="particles"
    	params={particlesOptions} />
    )
  }
}

export default ParticlesComp


