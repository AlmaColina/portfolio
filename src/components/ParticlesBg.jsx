import { useCallback } from "react";
import Particles from "react-tsparticles";

const particlesOptions = {
  particles: {
    shape: {
      type: 'circle', // Change to 'polygon' for custom shapes
      stroke: {
        width: 2,
        color: '#f00'
      }
    },
    move: {
      speed: 10
    }
  }
};

particlesJS('particles-js', {
  particles: {
    shape: {
      type: 'polygon',
      polygon: {
        nb_sides: 5
      }
    }
  }
});

export default ParticlesBg;
