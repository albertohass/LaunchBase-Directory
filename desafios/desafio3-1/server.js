const express = require('express');
const nunjucks = require('nunjucks')

const server = express();
// define pasta statica
server.use(express.static('public'))
// define a engine / tipo do arqiovp
server.set("view engine", "njk")

nunjucks.configure("view", {
    express:server
})

// rotas {
server.get("/",function(req,res){
    return res.render("courses")
})

server.get("/about",function(req,res){
    return res.render("about")
})

server.get("/courses",function(req,res){
    return res.render("courses")
})

server.get("/not-found",function(req,res){
    return res.render("not-found")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });
// }

// Inicia Servidor e define porta 
server.listen(5000, function(){
    console.log("server is running")
})