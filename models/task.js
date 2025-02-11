const { Schema } = require('mongoose');

const Task = new Schema({
    name: {
        type: String,
        required: true
    },
    createdIn:{
        type: Date,
        default: Date.now,
        required: true
    },
    status:{
        type: String,
        enum: ['to-do', 'done'],
        required: true,
    },
    taskDescription:{
        type: String,
        required: true,
    },
    ownerId:{
        type: Schema.Types.ObjectId,
        required: true,
    }
});

module.exports = Task;