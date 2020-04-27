const express = require('express')
const nunjucks = require ('nunjucks')

server = express()

const receitas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure('views',{
    express:server,
    noCache: true,
    autoescape: false
})

server.get("/",function(req,res){   
        return res.render("main", {itens: receitas})
})

server.get("/sobre",function(req,res){   
    return res.render("sobre")
})

server.get("/receitas",function(req,res){   
    return res.render("receitas", {itens: receitas})
})

server.get("/receita", function(req , res) {   
    const id = req.query.id
    const receita = receitas.find(function(receita){
        if (receita.title == id){
            return true
        }
    })

    if (!receita){
        res.send("receita not found")
    }

    return res.render("receita", {item: receita})
    //return res.render("receita")
})

server.listen(8080, function(){
    console.log("Server started")
})