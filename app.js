const express = require('express');
const app = express();

app.listen(3001,()=>{
    console.log("Servidor funcionando")
});

const mainRouter = require("./routers/main.js");
app.use("/",mainRouter);
