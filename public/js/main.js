var socket = io();
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', () => {
    var mensaje = document.getElementById('mensaje');
    var nombre = document.getElementById('nombre').value;
    var objMss = {
        mensaje: mensaje.value,
        nombre: nombre
    };
    if (mensaje.value != '') {
        socket.emit('mensaje', objMss);
        mensaje.value = '';
    } else {
        alert('Escribe un mensaje');
    }
});

// Corrige la función de callback para el evento 'mensaje'
socket.on('mensaje', (msg) => {
    var lista_mensajes = document.getElementById('nuevo_mensaje');
    var div = document.createElement('div');
    div.classList.add('card-panel');
    div.classList.add('mensaje');
    div.innerHTML = `<strong>${msg.nombre}</strong> ${msg.mensaje}`; // Muestra el nombre y el mensaje
    lista_mensajes.appendChild(div);
});