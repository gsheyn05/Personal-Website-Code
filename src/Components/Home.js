import React from 'react';
import "../Styles/Home.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


import {FaGithubSquare} from "react-icons/fa";




const Home= () =>{


    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      return (
          
          <container>


              <div className="scale-in-center" id="welcome">
                  <h1>Welcome to Gregory Sheyn's Portfolio Website</h1>

                  <div id="gitHub">
                      <a href="https://github.com/gsheyn05">
                          <FaGithubSquare size={80} />
                      </a>

                  </div>


                  <div className="scale-in-center" id="two">

                  </div>
              </div>
              <Particles

                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                      background: {
                          color: "#121"
                      },
                      fullScreen: false,
                      fpsLimit: 120,
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
                              value: "#00FFFF",
                          },
                          links: {
                              color: "#00FFFF",
                              distance: 150,
                              enable: true,
                              opacity: 0.5,
                              width: 1,
                          },
                          collisions: {
                              enable: true,
                          },
                          move: {
                              direction: "none",
                              enable: true,
                              outModes: {
                                  default: "bounce",
                              },
                              random: true,
                              speed: 2,
                              straight: false,
                          },
                          number: {
                              density: {
                                  enable: true,
                                  area: 800,
                              },
                              value: 60,
                          },
                          opacity: {
                              value: 0.5,
                          },
                          shape: {
                              type: "circle",
                          },
                          size: {
                              value: { min: 1, max: 5 },
                          },
                      },
                      detectRetina: true,
                  }} />
              <h1>God bless</h1>
              
          </container>
      );
    };
export default Home;