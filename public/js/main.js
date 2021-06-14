import "./balises/balises.js";
import { input1, btn1, btnTerm, btnAFaire, btnTout, btnClear, divTaches } from "./balises/balises.js";

let divNewTache;
let inputTache;
let divIcons;
let tab;
let tabAFaire;
let tabTerm;


let newTache = () => {
    if (input1.value.length > 0) {
        divNewTache = divTaches.appendChild(document.createElement("div"));
        divNewTache.className = "divNT";
        divNewTache.setAttribute("id", "tache");
        divNewTache.setAttribute("style", "padding : 5px; padding-left : 25px; padding-right : 25px; border-radius : 10px;margin : 5px ; border : 1px solid bisque")
        inputTache = divNewTache.appendChild(document.createElement("input"));
        inputTache.setAttribute("class", "divNT");
        divNewTache.style.display = "flex";
        inputTache.style.border = "none";
        inputTache.style.backgroundColor = "transparent"
        inputTache.setAttribute("readonly", "readonly");
        inputTache.value = input1.value
        divIcons = divNewTache.appendChild(document.createElement("div"));
        divIcons.innerHTML = '<i class="far fa-check-square"></i> <i class="far fa-save"></i> <i class="far fa-trash-alt"></i>'
        input1.value = input1.value.slice(input1.value.length);
    }
}


input1.addEventListener("keyup", (event) => {
    let name = event.key;
    if (name === 'Enter') {
        newTache()
    }
})



document.body.addEventListener("click", (e) => {
    console.log(e.target)

    if (e.target == btn1) {
        newTache()
    } else if (e.target == btnClear) {

        tab = Array.from(document.querySelectorAll("#tache"))
        let clearAll = confirm("Voulez-vous supprimer tous les éléments?");
        if (clearAll == true) {
            tab.forEach(element => {
                element.remove()
            });
        }

    } else if (e.target.className == "far fa-check-square") {

        e.target.parentElement.parentElement.classList.toggle("term");
        e.target.parentElement.parentElement.classList.toggle("divNT");
        e.target.parentElement.previousElementSibling.classList.toggle("term");
        e.target.parentElement.previousElementSibling.classList.toggle("divNT");

    } else if (e.target.className == "far fa-trash-alt") {
        let clearElem = confirm("Voulez-vous supprimer cet élément?");
        if (clearElem == true){
            e.target.parentElement.parentElement.remove()
        };
        
    } else if (e.target == btnTerm) {

        tabTerm = Array.from(document.querySelectorAll(".term"))
        tabTerm.forEach(element => {
            element.style.display = "flex"
            console.log(element)
        });

        tabAFaire = Array.from(document.querySelectorAll(".divNT"));

        tabAFaire.forEach(element => {
            element.style.display = "none"
        });

    } else if (e.target == btnAFaire) {

        tabTerm = Array.from(document.querySelectorAll(".term"))
        tabTerm.forEach(element => {
            element.style.display = "none"
        });

        tabAFaire = Array.from(document.querySelectorAll(".divNT"))
        tabAFaire.forEach(element => {
            element.style.display = "flex"
        });

    } else if (e.target == btnTout) {

        tabTerm = Array.from(document.querySelectorAll(".term"))
        tabTerm.forEach(element => {
            element.style.display = "flex"
        });

        tabAFaire = Array.from(document.querySelectorAll(".divNT"))
        tabAFaire.forEach(element => {
            element.style.display = "flex"
        });

    } else if (e.target.className == "far fa-save") {

        e.target.parentElement.previousElementSibling.removeAttribute("readonly");
        e.target.parentElement.previousElementSibling.focus();
        e.target.parentElement.previousElementSibling.style.backgroundColor = "white";

        e.target.parentElement.previousElementSibling.addEventListener("focusout", () => {
            e.target.parentElement.previousElementSibling.setAttribute("readonly", "readonly")
            e.target.parentElement.previousElementSibling.style.backgroundColor = "transparent"
        })

        e.target.parentElement.previousElementSibling.addEventListener("keyup", (event) => {
            let name = event.key;
            if (name === 'Enter') {
                e.target.parentElement.previousElementSibling.setAttribute("readonly", "readonly")
            }
        })
    } else if (e.target == inputTache) {
        e.target.style.border = "none"
        e.target.addEventListener("dblclick"), (e) => {

            e.target.removeAttribute("readonly");
            e.target.focus()
            e.target.addEventListener("focusout", () => {
                E.target.setAttribute("readonly", "readonly")
            })

        }
    }
})