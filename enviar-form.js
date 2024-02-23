document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        var formData = new FormData(form); // Obtener los datos del formulario
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Éxito: se ha enviado el formulario y se ha recibido una respuesta del servidor
                    console.log(xhr.responseText); // Muestra la respuesta del servidor en la consola
                    limpiarCampos(); // Limpiar los campos del formulario
                } else {
                    // Error: se produjo un problema al enviar el formulario
                    console.error('Error al enviar el formulario.');
                }
            }
        };

        xhr.open('POST', form.action, true); // Establecer la solicitud POST al script PHP
        xhr.send(formData); // Enviar los datos del formulario al script PHP
    });
});

function limpiarCampos() {
    //limpia los campos de datos despues de enviarlos 
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        // Previene el comportamiento predeterminado de enviar el formulario
        event.preventDefault();

        // Limpia los campos de entrada después de enviar el formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("tel").value = "";
    });

}