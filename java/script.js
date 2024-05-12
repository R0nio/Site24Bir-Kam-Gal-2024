const btn=document.getElementById("burger")
const menus = document.querySelectorAll(".header-first-info")
const menus2 = document.querySelectorAll(".main")
const menus3 = document.querySelectorAll(".footerrr")
const menus4 = document.querySelectorAll(".icon")
const menus5 = document.querySelectorAll(".Contact")
const menus6 = document.querySelectorAll(".Clos")
const menus7 = document.querySelectorAll(".Logo")
btn.addEventListener('click', () =>{
    for(let el of menus){
        el.classList.toggle("show")
    }
    for(let el of menus2){
        el.classList.toggle("del")
    }
    for(let el of menus3){
        el.classList.toggle("del")
    }
    for(let el of menus4){
        el.classList.toggle("del")
    }
    for(let el of menus5){
        el.classList.toggle("del")
    }
    for(let el of menus6){
        el.classList.toggle("show")
    }
    for(let el of menus7){
        el.classList.toggle("del")
    }
})

const btn2=document.getElementById("Clos")
const menus1 = document.querySelectorAll(".header-first-info")
const menus21 = document.querySelectorAll(".main")
const menus31 = document.querySelectorAll(".footerrr")
const menus41 = document.querySelectorAll(".icon")
const menus51 = document.querySelectorAll(".Contact")
const menus61 = document.querySelectorAll(".Clos")
const menus71 = document.querySelectorAll(".Logo")
btn2.addEventListener('click', () =>{
    for(let el of menus){
        el.classList.toggle("show")
    }
    for(let el of menus2){
        el.classList.toggle("del")
    }
    for(let el of menus3){
        el.classList.toggle("del")
    }
    for(let el of menus4){
        el.classList.toggle("del")
    }
    for(let el of menus5){
        el.classList.toggle("del")
    }
    for(let el of menus6){
        el.classList.toggle("show")
    }
    for(let el of menus7){
        el.classList.toggle("del")
    }
})