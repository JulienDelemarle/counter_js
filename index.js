let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl);
let surname = "julien!";
let greeting ="Welcome "
welcomeEl.innerText = greeting + surname


let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0;
function increment(){
    count += 1
    countEl.textContent= count 
    //console.log(count)  ;  
}

let saveEl = document.getElementById("save-el")
function save(){
    let countEntry = count + " - ";
    saveEl.textContent += countEntry;
    count = 0
    countEl.textContent = 0
}






