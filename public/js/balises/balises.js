export {input1, btn1, btnTerm, btnAFaire, btnTout, btnClear, divTaches};
let section = document.createElement("section");
section.setAttribute("style", "display : flex; flex-direction : column; align-items : center; height : 300px; justify-content : space-around;")
document.body.appendChild(section);

let divInput1 = document.createElement("div");
section.appendChild(divInput1);

let input1 = document.createElement("input");
input1.setAttribute("placeholder", "Nouvelle tâche")
divInput1.appendChild(input1);

let btn1 = document.createElement("button");
btn1.innerHTML = '<i class="fas fa-plus"></i> Add';
divInput1.appendChild(btn1);

let titre = document.createElement("h1");
titre.innerHTML = 'Ma Todo list';
section.appendChild(titre);

let divBtn = document.createElement("div");
section.appendChild(divBtn);

let btnTerm = document.createElement("button");
btnTerm.innerHTML = 'Tâche(s) terminée(s)';
divBtn.appendChild(btnTerm);

let btnAFaire = document.createElement("button");
btnAFaire.innerHTML = 'Tâche(s) à faire';
divBtn.appendChild(btnAFaire);

let btnTout = document.createElement("button");
btnTout.innerHTML = 'Toutes les tâches';
divBtn.appendChild(btnTout);

let divTaches = document.createElement("div");
divTaches.setAttribute("style", "display : flex; flex-direction : column; align-items : center;")
section.appendChild(divTaches);

let btnClear = document.createElement("button");
btnClear.innerHTML = 'Tout effacer'
section.appendChild(btnClear)