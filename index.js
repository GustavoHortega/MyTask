const express = require('express');
require('dotenv').config()
const path = require('path');

const app = express();

//routers
const testeRouter = require('./routes/teste');

//routes
app.use('/teste', testeRouter);

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Server up`);
});