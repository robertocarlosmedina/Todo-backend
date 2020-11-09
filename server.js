const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("funcionando");
});
mongoose.connect('mongodb://localhost:27017/todoapi',
    {useNewUrlParser: true, 
    useUnifiedTopology:true}
);

requireDir('./src/models')

app.use('/api', require("./src/routes"));

app.listen(3002);