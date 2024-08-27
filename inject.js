const container = document.querySelector("#container")

//creating initial grid of 16x16

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

addEventListenersToInnerDivs();

//create button for dimensions

const dimensionButton = document.createElement("button");
dimensionButton.textContent = "Add dimensions";
dimensionButton.classList.add("dimensionButton");
dimensionButton.addEventListener("click", createGrid);
document.body.appendChild(dimensionButton);

//create custom grid

function createGrid(){
    
    let dimensions = prompt("What size grid do you want?(<100)");
    if(dimensions === null || dimensions.trim() === "" || isNaN(dimensions) || dimensions > 100){
        console.log("dimensions invalid.")
    }
    
    else {
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
    
    addEventListenersToInnerDivs();
    }
}

//function to add event listeners to inner divs

function addEventListenersToInnerDivs(){
    const innerdiv = document.querySelectorAll(".innerdiv"); //returns nodelist of all divs with class innerdiv
    innerdiv.forEach(div => {   //iterate through each element in nodellist
        div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";})
    });
}


   

