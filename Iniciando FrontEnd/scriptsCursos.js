const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');
console.log(cards)  

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${card.id}`
    })
}

document.querySelector(".close-Modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active") 
    modalOverlay.querySelector("iframe").src = " "
})

document.querySelector(".maximize-Modal").addEventListener("click",function(){
    const validation = modalOverlay.classList.contains("maximize")
    if (!validation){
        modalOverlay.classList.add('maximize')
    }
    if (validation){
        modalOverlay.classList.remove('maximize')
    }
})

 