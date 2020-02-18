// import io from 'socket.io-client';
// import feathers from '@feathersjs/feathers';
// import socketio from '@feathersjs/socketio-client';
// // import { Api_url } from './utils/config'


// const socket = io(Api_url, {
//     transports: ['websocket'],
//     forceNew: true,
    // pingInterval: 10000,
    // pingTimeout: 500000
// });

// const client = feathers()
//     .configure(feathers.socketio(socket))
// // .configure(feathers.authentication({
// //     storage: AsyncStorage
// // }))


import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
const Api_url = "localhost:3000"
const socket = io(Api_url, {
    transports: ['websocket'],
    forceNew: true,
    pingInterval: 10000,
    pingTimeout: 500000
});
const client = feathers().configure(socketio(socket));


export default client