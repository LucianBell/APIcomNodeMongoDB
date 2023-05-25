//Forma correta de realizar import do http com Ts
//import * as http from "http";
import app from "./app.js";
//Setando porta para 3000, OU, se tiver uma nas variaveis do ambiente, a porta das variaveis de ambiente
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`);
});
/*
const routes = {
  "/": "Curso de Node",
  "/livros": "Página de livros...",
  "/autores": "Listagem de autores...",
};


//Criando server com .createServer
const server = http.createServer((req, res) => {
  //Res vai ser criar um head, em plain text.
  res.writeHead(200, { "Content-type": "text/plain" });
  //Termina escrevendo isso:
  res.end(routes[req.url]);
});

//Colocar server para escutar na porta determinada acima
server.listen(port, () => {
  console.log(`Escutando requisição em http://localhost:${port}`);
});
*/
//# sourceMappingURL=index.js.map