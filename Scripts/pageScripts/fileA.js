import people from './data'
console.log("fileA");

const body = document.getElementById("fileA");
const fileA = document.createElement("div");
//fileA.classList.add("container");
fileA.innerHTML = "File A";
fileA.innerHTML +=  `<p>${JSON.stringify(people)}</p>`
body.appendChild(fileA);