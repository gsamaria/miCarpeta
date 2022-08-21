const path = require("path");

const mainController = {

home: (req,res)=>{
    /**
     * 
     * Logica */
    
    res.sendFile(path.join(__dirname, "../views/home.html"))},
about: (req,res)=>{
     /**
     * 
     * Logica */
    res.sendFile(path.join(__dirname, "../views/about.html"))},

}

module.exports = mainController;