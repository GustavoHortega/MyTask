const express = require('express');

const router = express.Router();

router.use(express.json());

const controllerRouter = require('./tasks');

router.use('/tasks', controllerRouter);

module.exports = router;