import { menuArray } from "./data.js";

const oderMeal = document.getElementById('addbtn')
const  menuHtml = menuArray.map((meal)=>{
    const {emoji,name,ingredients,price} = meal
   return `<section class= "menu-section">
                <div class = "menu-item" >
                <p class="menu-item__emoji">${emoji}</p>
                <h2 class="menu-item__name">${name}</h2>
                <p class="menu-item__ingredients">${ingredients} </p>
                <p class="menu-item__price">$${price}</p>
                </div>
                <p id = 'addbtn'><svg id="Layer_1" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg><p>
            </section>
            `
}).join('')

document.getElementById('menu').innerHTML = menuHtml

oderMeal.addEventListener('click',()=>{
    
})