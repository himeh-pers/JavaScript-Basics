const container = document.getElementById("container")
const resizeBtn = document.getElementById("resizeBtn")

function createGrid(size)
{
    container.innerHTML = ""

    for(let i = 0; i < size * size; i++)
    {
        let square = document.createElement("div")
        let hits = 0

        square.classList.add("square")
        square.style.width = (100 / size) + "%"
        square.style.height = (100 / size) + "%"

        square.addEventListener("mouseenter", function()
        {
            if(hits == 0)
            {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                square.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
            }

            if(hits < 10)
            {
                hits += 1
                square.style.opacity = hits / 10
            }
        })

        container.appendChild(square)
    }
}

resizeBtn.addEventListener("click", function()
{
    let size = parseInt(prompt("Squares per side (max 100): "))

    if(isNaN(size) || size < 1 || size > 100)
    {
        alert("Enter a number from 1 to 100")
    }
    else
    {
        createGrid(size)
    }
})

createGrid(16)