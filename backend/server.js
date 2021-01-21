const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const playersRouter = require('./routes/players');
const tablesRouter = require('./routes/tables');

app.use('/players', playersRouter)
app.use('/tables', tablesRouter)

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});