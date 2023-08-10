// MENÚ HAMBURGUESA

function addEventListeners() {
    var botonMenuAbrir = document.getElementById("boton-menu-abrir");
    var botonMenuCerrar = document.getElementById("boton-menu-cerrar");
    var menu = document.getElementById("nav");
    var fondomenu = document.getElementById("fondo-menu-desplegable");
    


    botonMenuAbrir.addEventListener("click", function () {
      menu.classList.add("abierto");
      fondomenu.classList.add("abierto");
      botonMenuAbrir.style.display = "none";
      botonMenuCerrar.style.display = "flex";
    });

    botonMenuCerrar.addEventListener("click", function () {
      menu.classList.remove("abierto");
      fondomenu.classList.remove("abierto");
      botonMenuCerrar.style.display = "none";
      botonMenuAbrir.style.display = "block";
    });

  }
  
  // Esperar a que los elementos existan en el DOM para añadir los eventos
  window.addEventListener("load", function() {
    addEventListeners();
  });

// TERMINA MENÚ HAMBURGUESA

// FORMULARIO DE CONTACTO

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Enviar el formulario aquí (puede ser mediante AJAX o cualquier método que prefieras)
    // Mostrar el mensaje de éxito
    document.getElementById('success-msg').style.display = 'block';
    document.getElementById('success-msg').textContent = 'Enviado!';
  });

// TERMINA FORMULARIO DE CONTACTO


// PRIMER PASO, RECOGER EL PRECIO DEL PRODUCTO SELECCIONADO E IR SUMANDO CADA UNO QUE SE LE AGREGUE



  