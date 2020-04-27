const content = document.querySelector("content")
const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".cont-second")


for (let card of cards){
        card.addEventListener("click", function(){
        const receitaID = card.getAttribute("id")
        window.location.href = `/receita?id=${receitaID}`
    })
}

for (let list of lists){
    card.addEventListener("click", function(){
        content.classList.add("active")
    })
}

