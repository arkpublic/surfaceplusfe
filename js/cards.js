
const card = document.getElementsByClassName("card");
const background = document.getElementsByClassName("card-background");
const subCards = document.getElementsByClassName("subCard");
const parraf  = document.getElementsByClassName("body__p");
const arrow = document.getElementsByClassName("expand-toggle");
const titleCards = document.getElementsByClassName("title__span");
const autorCard = document.getElementsByClassName("card-by");

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", e => {  
        subCards[i].classList.add("cardHovered");
        parraf[i].classList.add("p_hovered"); 
        arrow[i].classList.add("arrow_hovered");
        background[i].classList.add("img_hovered");
        titleCards[i].classList.add("p_hovered");
        autorCard[i].classList.add("p_hovered");
    });
    card[i].addEventListener("mouseout", e => {  
        subCards[i].classList.remove("cardHovered");
        parraf[i].classList.remove("p_hovered"); 
        arrow[i].classList.remove("arrow_hovered");
        background[i].classList.remove("img_hovered");
        titleCards[i].classList.remove("p_hovered");
        autorCard[i].classList.remove("p_hovered");
    });
}