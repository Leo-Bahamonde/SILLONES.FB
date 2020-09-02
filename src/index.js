const express = require('express')
const app = express();
const path = require('path');

//setings
app.set("port",3000);
app.set("views", path.join(__dirname,"views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//middlewares

//router(IMPORTANTE distingue entre windows y linux para que funcione en ambos)
app.use(require("./router/index"));

//static file(archivos,imagenes,carpetas)
app.use(express.static(path.join(__dirname,"publica")));

// listening the server
app.listen(app.get("port"),()=>{
    console.log("servidor escuchando en puerto:", app.get("port"));
});
