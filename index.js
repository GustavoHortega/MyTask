const express = require('express');
require('dotenv').config()

const { connect } = require('./models/index');
const path = require('path');

const app = express();

//routers
const tasksRouter = require('./routes/tasks');
const testeRouter = require('./routes/teste');

//routes
app.use('/teste', testeRouter);
app.use('/tasks', tasksRouter);

app.listen(process.env.SERVER_PORT, () =>{
    connect();

    console.log(`Server up`);
});