// ----------------------   MENU   --------------------------------
// Función anónima autoejecutable
((document) => {
    const $btnMenu = document.querySelector(".menu-btn");
    const $menu = document.querySelector(".menu");
    const $header = document.querySelector(".hero-image");
    
    $btnMenu.addEventListener("click", (e) => {
        // Cambia la clase del Botón Menú
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        // Quita y pone la clase según le demos CLICK al botón
        $menu.classList.toggle("is-active");
        $header.classList.toggle("header-active");
    }); 
    
    // Delegación de Eventos
    document.addEventListener("click", (e) => {
        // Si clickeamos un enlace qu NO esté dentro del menú..
        if (!e.target.matches(".menu a")) return false;
          // -- target: Es el objeto que origina el evento 
          // --matches: Si coincide con ... (selector válido)
        // Si SÍ es un enlace dentro del menú, los dejamos por default 
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });

    // start carrousel
   $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false
    });


    // move next carousel
    $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });

})(document);