import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import './ParticleComponent.css'

const option = {
      background: {
          color: {
            value: "#659DF2",
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 2,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }	

const ParticleComponent = () => {
		const particlesInit = async (engine) => {
	    	console.log(engine);
	    	await loadFull(engine);
	 	 };

		const particlesLoaded = async (container) => {
	    await console.log(container);
	  };

		return (
        	<Particles 
        		init = {particlesInit}
        		load = {particlesLoaded}
        		options={option}
            className='canvas'
        	/>
    );
};


export default ParticleComponent;
