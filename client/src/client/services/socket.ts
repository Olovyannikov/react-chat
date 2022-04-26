import { socketPort } from 'client/constants';
import io from 'socket.io-client';

export const socket = io(socketPort || '');
