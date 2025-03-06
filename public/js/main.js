var socket = io();
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', () => {
    var mensaje = document.getElementById('mensaje')
    if(mensaje.value != ''){
        socket.emit('mensaje', mensaje.value)
        mensaje.value = '';
    }else{
        alert('Escribe un mensaje')
    }
})