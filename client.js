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
    //   setTimeout(() => {
    //   conn.write("Move: up")
    // }, 2000)
    });
  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)

  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = connect