const express = require('express')
const routes = express.Router()
const instructors = require("./instructors")

routes.get("/",function(req, res){
    return res.redirect("/instructors")
})

routes.get("/instructors",function(req, res){
    return res.render("instructors/index")
})

routes.get("/instructors/create",function(req, res){
    return res.render("instructors/create")
})

routes.get("/instructors/:id/edit",instructors.edit)

routes.get("/instructors/:id",instructors.show)

routes.post("/instructors",instructors.post)

routes.put("/instructors", instructors.put)

routes.delete("/instructors", instructors.delete)

routes.get("/members",function(req, res){
    return res.render("members")
})

module.exports = routes

// HTTP VERBS
// GET: Receber RESOURCE
// POST : Criar um novo RESOURCE com dados enviados 
// PUT : Atualizar RESOURCE     
// DELETE : deletar RESOURCE
