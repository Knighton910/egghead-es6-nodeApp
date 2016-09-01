import {createServer} from 'http'

createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end('Wow, your really red mars!')
}).listen(3000, '127.0.0.1')

console.log('Server running @ port 3000')
