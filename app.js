
// Animación para elementos con la clase "animate-on-scroll"
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      x: -50, // Cambia el valor para ajustar la dirección de entrada
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // Inicia la animación cuando el elemento está a un 80% de la parte superior de la ventana
      },
    });
  });
};

// Llama a la función para aplicar animaciones al cargar la página
animateOnScroll();
