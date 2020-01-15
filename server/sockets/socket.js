const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    // Enviamos mensaje al cliente
    // client.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienvenido a la aplicación'
    // });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
    });

});