ScrollReveal({ reset: true });

ScrollReveal().reveal(".title", {
    duration: 3000,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
      x: 20,
      z: -10
    }
  });


ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in"
});



ScrollReveal().reveal(".slide-left", {
    duration: 3000,
    origin: "right",
    distance: "300px",
    easing: "ease-in"
  });
  


