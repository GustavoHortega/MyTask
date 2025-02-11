const express = require('express');

const { Task } = require('../../models');

const router = express.Router();

//Create
router.post('/create', async(req, res) =>{
    try {
       const task = await Task.create(req.body);

       res.json({
           task,
       });

    } catch (error) {
        res.json({
            erro: error,
            message: 'Error 500 - Internal server error!'
        });
    }
});

router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find();

        res.json({
            tasks,
        })
        
    } catch (error) {
        
    }
});

module.exports = router;