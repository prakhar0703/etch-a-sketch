
const container = document.querySelector("#container")
for(let i = 0; i < 16; i++){
    const outerdiv = document.createElement("div");
    outerdiv.classList.add("outerdiv");
    container.appendChild(outerdiv);
    for(let j = 0; j < 16; j++){
        const innerdiv = document.createElement("div");
        innerdiv.classList.add("innerdiv");
        outerdiv.appendChild(innerdiv);
    }
}
const innerdiv = document.querySelectorAll(".innerdiv"); //returns nodelist of all divs with class innerdiv
    innerdiv.forEach(div => {   //iterate through each element in nodellist
        div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";})
    });

const dimension_button = document.createElement("button");
dimension_button.textContent = "Add dimensions";
dimension_button.addEventListener("click", createGrid);
document.body.appendChild(dimension_button);



function createGrid(){
    
    let dimensions = prompt("What size grid do you want?");
    container.innerHTML = "";
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
    
    const innerdiv = document.querySelectorAll(".innerdiv"); //returns nodelist of all divs with class innerdiv
    innerdiv.forEach(div => {   //iterate through each element in nodellist
        div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";})
    });
}


   

