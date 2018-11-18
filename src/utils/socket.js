import io from 'socket.io-client';
import { API_HOST } from '../config';

export let socket = null;

export const connectSocket = (callback) => {
  socket = io(API_HOST, {
    jsonp: false,
    forceNew: true
  });
  callback(socket);
};

export const listenToEvent = (event, callback) => {
  socket.on(event, function(params) {
    callback(params);
  });
};

export const removeListener = (event) => {
  socket.removeAllListeners(event);
};

export const emitEvent = (event, data) => {
  socket.emit(event, data);
};

export const reconnect = () => {
  if (!socket) {
    connectSocket();
  }
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
  socket = null;
};
