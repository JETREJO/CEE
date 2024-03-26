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

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    $btnNext = document.querySelector(".next");
    $btnPrev = document.querySelector(".prev");

    $btnNext.addEventListener("click", (e) => {
        plusSlides(1);
    });

    $btnPrev.addEventListener("click", (e) => {
        plusSlides(-1);
    });

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    }

})(document);