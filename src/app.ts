import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node :D");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201);
});

export default app;