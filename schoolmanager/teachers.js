const fs = require('fs')
const data = require("./data.json")
const { age, graduation, date } = require("./utils.js")

exports.post = function(req,res){
    
    const keys = Object.keys(req.body)

    for(key of keys){
        if (req.body[key] == ""){
            return res.send("Preencha todos os campos")
        }
    }

    let {name, birth, scholarity, type, services} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        name,
        birth,
        scholarity,
        type,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if (err) return res.send("write file error")

        return res.redirect("/teachers")
    })

}

exports.show = function (req, res) {
    
    const { id } = req.params
    
    const foundteachers = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    
    if (!foundteachers) res.send("Invalid Teacher")

    const teacher = {
        ...foundteachers,
        age: age(foundteachers.birth),
        services: foundteachers.services.split(","),
        scholarity: graduation(foundteachers.scholarity),
        created_at: new Intl.DateTimeFormat("pr-BR").format(foundteachers.created_at)
    } 

    res.render("teachers/show",{teacher})
}

exports.edit = function (req , res) {
    
    const { id } = req.params

    const foundteachers = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundteachers) res.send("Edit error")

    const teacher = {
        ...foundteachers,
        birth: date(foundteachers.birth)
    }

    console. log (id)
    
    res.render("teachers/edit", {teacher})

}