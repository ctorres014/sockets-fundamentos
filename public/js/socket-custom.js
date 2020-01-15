var socket = io();
// Escuchar
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');

});

// Los Emit envian informacion
socket.emit('enviarMensaje', {
    // usaurio: 'Claudio Torres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);

});

// Escuchar Informacion
socket.on('enviarMensaje', function(msgRespuesta) {
    console.log('Info del servidor', msgRespuesta);

});