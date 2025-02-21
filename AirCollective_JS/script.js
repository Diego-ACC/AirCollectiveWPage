document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    
    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita la redirección inmediata
            
            // Agrega una animación al botón
            button.style.transition = "transform 0.3s ease, opacity 0.3s ease";
            button.style.transform = "scale(1.1)";
            button.style.opacity = "0.7";
            
            // Después de la animación, redirige a la página
            setTimeout(() => {
                window.location.href = button.getAttribute("href");
            }, 300); // Coincide con la duración de la animación
        });
    }
});