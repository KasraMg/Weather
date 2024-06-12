"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="z-[11] absolute top-0 w-full h-full"
      options={{
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: `#ffffff5c`,
          },
          shape: {
            type: "circle",
            options: {
              sides: 5 as any,
            },
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.9,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.9,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: `#ffffff5c`,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: ["grab"],
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: false,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
        },
      }}
    />
  );
};

export default ParticlesComponent;
