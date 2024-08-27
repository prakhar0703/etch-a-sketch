let dimensions = prompt("What size grid do you want?");
const container = document.querySelector("#container");
for(let i = 0; i < dimensions; i++){
    const outerdiv = document.createElement("div");
    outerdiv.classList.add("outerdiv");
    container.appendChild(outerdiv);
    for(let j = 0; j < dimensions; j++){
        const innerdiv = document.createElement("div");
        innerdiv.classList.add("innerdiv");
        outerdiv.appendChild(innerdiv);
    }
}
const outerdiv = document.querySelector(".outerdiv");
const innerdiv = document.querySelectorAll(".innerdiv");
innerdiv.forEach(div => {
    div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";})
});

   

