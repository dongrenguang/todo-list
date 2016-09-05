import http from 'http';
import app from './app';

const server = http.Server(app);

server.listen(8080, () => {
  console.log('The application is running...');
});

export default server;
