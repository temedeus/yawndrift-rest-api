const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
    }).then(() => {
    console.log('Success connecting to database!');
}).catch((err) => {
    console.error('Error connecting to database!', err);
});

app.use(express.json);
app.use(morgan("dev"));

app.get("ping", (req, res) => {
    return res.send({
        status: "Healthy",
    });
});

app.listen(() => {
    console.log("Server started listening on port : ", PORT);
});