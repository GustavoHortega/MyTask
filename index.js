//Import de dependencias
const express = require('express');
const ejs = require('ejs');
require('dotenv').config()

//import do modulo para trabalhar com caminhos
const path = require('path');

//import do modulo para conexão com o banco
const { connect } = require('./models/index');

const app = express();

//configuracoes de ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configuracoes de json no corpo da requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routers
const tasksRouter = require('./routes/api/index');

//routes
app.use('/', tasksRouter);

//servidor
app.listen(process.env.SERVER_PORT, () =>{
    connect();

    console.log(`Server up`);
});