const express = require('express');
require('dotenv').config()

const { connect } = require('./models/index');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routers
const tasksRouter = require('./routes/api/index');

//routes
app.use('/', tasksRouter);

app.listen(process.env.SERVER_PORT, () =>{
    connect();

    console.log(`Server up`);
});