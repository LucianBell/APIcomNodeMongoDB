//Importando Mongoose (pacote para conectar com o banco de dados MongoDB)
import mongoose from "mongoose";
//Importando variaveis do ambiente
import dotenv from "dotenv";
dotenv.config();
//Variavel do ambiente referente a URI do banco de dados
let env = process.env.DB_URI;
//Conectar API com o banco de dados
mongoose.connect(process.env.DB_URI);
let db = mongoose.connection;
export default db;
//# sourceMappingURL=dbConnect.js.map