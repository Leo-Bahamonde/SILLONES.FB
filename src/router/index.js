const express = require("express");
const router = express.Router();


//router(IMPORTANTE distingue entre windows y linux para que funcione en ambos)
router.get("/",(req,res) =>{
    //res.sendFile(path.join(__dirname,"views/index.html"));
    res.render("index.html",{title: "titulo"});
});
router.get("/sillones",(req,res) =>{
    res.render("sillones.html",{title: "sillones.html"});
});
router.get("/esquineros",(req,res) =>{
    res.render("Esquineros.html",{title: "sillones.html"});
});
/* router.get("/sillas",(req,res) =>{
    res.render("SILLAS.html",{title: "sillones.html"});
}); */
router.get("/materas",(req,res) =>{
    res.render("Materas.html",{title: "sillones.html"});
});
router.get("/DP_SILLON_CLASICO.html",(req,res) =>{
    res.render("DP SILLON CLASICO.html",{title: "sillones.html"});
});
router.get("/DP_SILLON_CLASICO2.html",(req,res) =>{
    res.render("DP SILLON CLASICO2.html",{title: "sillones.html"});
});
router.get("/DP_SILLON_CLASICO3.html",(req,res) =>{
    res.render("DP SILLON CLASICO3.html",{title: "sillones.html"});
});
router.get("/DP_PATCHWORK.html",(req,res) =>{
    res.render("DP PATCHWORK.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_1.html",(req,res) =>{
    res.render("DP MATERA 1.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_2.html",(req,res) =>{
    res.render("DP MATERA 2.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_3.html",(req,res) =>{
    res.render("DP MATERA 3.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_4.html",(req,res) =>{
    res.render("DP MATERA 4.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_5.html",(req,res) =>{
    res.render("DP MATERA 5.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_6.html",(req,res) =>{
    res.render("DP MATERA 6.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_7.html",(req,res) =>{
    res.render("DP MATERA 7.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_8.html",(req,res) =>{
    res.render("DP MATERA 8.html",{title: "sillones.html"});
});
router.get("/DP_MATERA_9.html",(req,res) =>{
    res.render("DP MATERA 9.html",{title: "sillones.html"});
});
router.get("/DP_JUEGOS_DE_LIVING.html",(req,res) =>{
    res.render("DP JUEGOS DE LIVING.html",{title: "sillones.html"});
});
router.get("/DP_ESQUINERO_3.html",(req,res) =>{
    res.render("DP ESQUINERO 3.html",{title: "sillones.html"});
});
router.get("/DP_ESQUINERO_2.html",(req,res) =>{
    res.render("DP ESQUINERO 2.html",{title: "sillones.html"});
});
router.get("/DP_ESQUINERO_1.html",(req,res) =>{
    res.render("DP ESQUINERO 1.html",{title: "sillones.html"});
});
router.get("/DP_CHESTERFIELD.html",(req,res) =>{
    res.render("DP CHESTERFIELD.html",{title: "sillones.html"});
});
router.get("/contactos",(req,res) =>{
    res.render("contactos.html",{title: "sillones.html"});
});
/*  router.use((req,res,next)=>{
    res.status(400).sendFile(__dirname+ "/views/404.html")
}) */
 
module.exports = router;

