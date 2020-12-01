document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault()

    let newPar = document.createElement("p")

    newPar.innerHTML = event.target.elements["message"].value;
    document.getElementById("boldWall").appendChild(newPar)
    newPar.style.border = "3px solid"
    newPar.style.borderColor = randomColors()


    confirm("Are you sure about this post:" + " " + newPar.innerHTML)

    let titleName = event.target.elements["fullname"].value;
    document.getElementById("title").innerHTML = titleName;
})

let theTitle = document.getElementById("title")

theTitle.onclick = changeTitle


function changeTitle() {
    theTitle.style.backgroundColor = randomColors();
}

let colors = {

    1: "blue",
    2: "green",
    3: "orange",
    4: "purple"

}

function randomColors() {
    let rand = Math.floor(Math.random() * 4) + 1

    for (prop in colors) {
        if (rand == prop) {
            return colors[prop]
        }
    }
}