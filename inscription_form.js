((d) => {
    const $form = d.querySelector("#registro-form"),          
          $loader = d.querySelector(".contact-form-loader"),
          $response = d.querySelector(".contact-form-response");
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        // Esta página es una API (algo de AJAX) para que nos lleguen correos
        fetch("https://formsubmit.co/inscripciones@consultoriaeducativacdmx.org", {
            method: "POST",
            body: new FormData(e.target),
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res))) 
        .then((json) => {    
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        }) 
        .catch((err) => {
            console.log(json);
            console.log(err);
            // Si no existe un mensaje de error por defecto, lo creamos nosotros
            let message = err.status || "Ocurrió un error al enviar, intenta nuevamente."; 
            $response.querySelector("h3").innerHTML = `Error: ${err.status}: ${message}`;
        })
        .finally(() => {
            $loader.classList.add("none");   
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);         
        });
    });      
})(document);