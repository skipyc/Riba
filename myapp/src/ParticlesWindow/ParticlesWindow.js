import React, { Component } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import circle from '../images/circle.png';

import {Paper, Switch} from '@material-ui/core';
import './particleWindow.css';

type Props = {
  checkedCgn: any;
};

class ParticlesWindow extends Component {
  render() {
    return (
      <Particles 
        params={this.props.checkedCgn ? 
          {
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#fff"
              },
              shape: {
                // type: circle,
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: `url(${circle})`,
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 0,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 25,
                color: "#ffffff",
                opacity: 1,
                width: 6.5
              },
              move: {
                enable: true,
                speed: 10,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 1042.21783956259,
                  rotateY: 1122.388442605866
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: false,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            }
          }
          :               
          {
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#fff"
              },
              shape: {
                // type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: `url(${circle})`,
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 400,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 400,
                  size: 10,
                  duration: 2,
                  opacity: 0.1,
                  speed: 3
                },
                repulse: {
                  distance: 300,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            }
          }
        }
        style={
          {
          // backgroundImage: `url(${circle})`,
          // backgroundColor: "#438cff",
        }
      }
        className={this.props.checkedCgn ? "particleWindow true" : "particleWindow false"}
        />
    );
  }
}

export default ParticlesWindow;