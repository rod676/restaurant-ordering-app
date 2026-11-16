import { menuArray } from "./data.js";

const  menuHtml = menuArray.map((meal)=>{
    const {emoji,name,ingredients,price} = meal
   return `<section class="menu-item">
                <p class="menu-item__emoji">${emoji}</p>
                <h2 class="menu-item__name">${name}</h2>
                <p class="menu-item__ingredients">${ingredients} </p>
                <p class="menu-item__price">$${price}</p>
            </section>`
}).join('')

document.getElementById('menu').innerHTML = menuHtml