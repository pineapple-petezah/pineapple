particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,  // Number of snowflakes
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff' // Snowflake color
      },
      shape: {
        type: 'circle',  // Snowflake shape
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'bottom',  // Fall downwards
        random: true,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        }
      }
    },
    retina_detect: true
  });