const mongoose = require('mongoose');
const { Task } = require('./models');

const populaBancoDeDados = async () => {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/mytask');
        

        await Task.create({
            name: 'fazer lógica',
            status: "to-do",
            taskDescription: 'Descrição da tarefa',
            ownerId: '67a61b73efed3eee6c39b652'
        });

    console.log("SEED PLANTADA COM SUCESSO!")

    } catch (error) {
        console.log("Error 500 - Internal server error!", error);

    } finally{
        await mongoose.disconnect();
    }
    
};

populaBancoDeDados();