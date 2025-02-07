const mongoose = require('mongoose');

const taskSchema = require('./task');

const Task = require = mongoose.model('Task', taskSchema);

const connect = () => {
    mongoose.connect(process.env.DB_URI);

};

module.exports = {
    Task,
    connect,
}