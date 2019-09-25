const net = require('net');

const connect = function() {
  
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
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