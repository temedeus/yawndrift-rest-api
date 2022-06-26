const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5000;


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