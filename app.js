$(document).ready(function() {
    // Función para activar animaciones en los elementos visibles en la pantalla
    function activateAnimations() {
      $(".animate-section").each(function() {
        var elementTop = $(this).offset().top;
        var elementHeight = $(this).outerHeight();
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        
        if (scroll > elementTop - windowHeight + elementHeight / 2) {
          $(this).addClass("active");
          $(this).find(".animate-on-scroll").each(function() {
            $(this).addClass("animate__animated").addClass($(this).data("animation"));
          });
        }
      });
    }
  
    // Llama a la función al cargar la página y en eventos de desplazamiento
    activateAnimations();
    $(window).scroll(activateAnimations);


});

