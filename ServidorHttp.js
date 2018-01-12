let http = require('http');
let port = 3000;
let ip = 'localhost';

let server = http.createServer(function(req, res){
  console.log('Recebendo request!');
  res.writeHead(200, {'Content-type':'text/html'});
  res.write('Ola este e o servidorJs do <h1> Douglas </h1>');
  //res.write('\n'); usar text/plain
  res.write('<br>');// usar com text/html
  res.write('quebra de linha');
  res.write('<br>');
  //res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>\nQuebra de Linha\n');
  res.end();


});

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log('Para derrubar o servidor: ctrl + c');
});