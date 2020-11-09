const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Todo', TodoSchema);