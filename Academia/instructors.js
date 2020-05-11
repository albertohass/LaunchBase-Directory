const fs = require('fs')
const data = require("./data.json")

//show
exports.show = function(req,res) {
    // req.query.id case ?id = xxx
    // req.body case post 
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found")
    
    const instructor = {
        ...foundInstructor,
        age: "",    
        services: foundInstructor.services.split(","),
        created_at: ""
    }

    return res.render("instructors/show", {instructor})
}

// create
exports.post = function(req, res){
    
    const keys = Object.keys(req.body)

    for(key of keys){
        if (req.body[key] == ""){   
            return res.send("Preencha todos os campos")
        }   
    }
    
    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number (data.instructors.length + 1)

    data.instructors.push({
        id,
        name,
        birth,
        avatar_url,
        gender,
        services,
        created_at,
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error')

        return res.redirect("/instructors")
    })
}
// update

//delete