const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("welcome");
})

app.get("/home", (req, res)=> {
    res.send("home");
})

app.listen(3000, () => {
    console.log("server startd");
})