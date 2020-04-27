const actions = document.querySelectorAll(".action")

for (let j = 0; j < actions.length; j++ ){   
actions[j].addEventListener("click", function(){

    for (let i = 0; i < actions.length; i++ ){    
        if(!document.querySelector(".fase" + i).classList.contains("hidden")){
    
            actions[i].addEventListener("click",function(){
                document.querySelector(".fase" + i).classList.add("hidden")
                actions[i].innerHTML = "Mostrar"
                console.log("alo")
            })  
        }else if (document.querySelector(".fase" + i).classList.contains("hidden")){
            
            actions[i].addEventListener("click",function(){
                document.querySelector(".fase" + i).classList.remove("hidden")
                actions[i].innerHTML = "Esconder"
            })  
        }
    }

})

}
