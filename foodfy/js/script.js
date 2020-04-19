const modalOverlay = document.querySelector(".modaloverlay");
const cards = document.querySelectorAll(".card");

for (let card of cards){
        card.addEventListener("click", function(){
        modalOverlay.classList.add("active"); 
        const title = card.querySelector('.card-title p').innerHTML
        const person = card.querySelector(".card-person p").innerHTML  
        modalOverlay.querySelector("img").src = `/assets/${card.id}.png`
        modalOverlay.querySelector(".modal-title p").innerHTML = title 
        modalOverlay.querySelector(".modal-person p").innerHTML = person 
    })
}



document.querySelector(".modal-close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

document.querySelector(".modaloverlay").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})