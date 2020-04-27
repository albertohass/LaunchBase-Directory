const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const videos =  , require("./data")

server.use(express.static('public'))    

server.set("view engine", "njk" )

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
    
})

server.get("/",function(req, res){
    const about = {
        avatarUrl: "alberto.jpeg",
        name: "Alberto Hass",
        role: "Dev Junior",
        description: 'Estudante do curso full stack da <a href="http://rocketseat.com.br" target="_blank">Rocketseat</a Buscando aprender mais sobre front-end e back-end para progredir em minha carreira',
        links: [
            {name: "GitHub", url: "https://github.com/albertohass"},
            {name: "Instagram", url: "https://www.instagram.com/alb_hass/"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/alberto-hass-9b4644168"}
        ]    
    }
    return res.render("about",{about})
})

server.get("/classes",function(req, res){
    return res.render("classes",{itens: videos})
})

server.get("/video", function(req,res){
    const id = req.query.id
    const video = videos.find(function(video){
        
        return video.id == id
        
    //     if (video.id == id){
    //         return  true; 
    //    }
    })

    if (!video){
        return res.send("Video Not found")
    }

    return res.render("video", {item: video})

    res.send(id)
})

server.listen(5000, function(){
    console.log("server is running")
})


