const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
   host: IP,
   port: PORT
  });
  conn.on('data', (data) => {
    console.log(data);
    });
    conn.on('connect', () => {
    conn.write("Name: KEK")
    console.log('Successfully connected to game server')
    });


  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = {connect}