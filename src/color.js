function initializeColors() {
    let colorItem = document.getElementsByClassName("color")
    for (let i = 0; i < colorItem.length; i++) {
        colorItem[i].style.backgroundColor = "#ffffff"; // Set default color to white
        colorItem[i].style.border = "1px solid";
    }
}

document.addEventListener("DOMContentLoaded", () => {initializeColors()})

document.getElementById("get-color").addEventListener("click", () => {
    let seed = document.getElementById("seed").value.substring(1)
    let mode = document.getElementById("scheme").value

    let colorItem = document.getElementsByClassName("color")
    let hexItem = document.getElementsByClassName("hex")
    let colorArr = [colorItem.length];

    function renderColor() {
        for(let i = 0; i < colorArr.length; i++)  {
            colorItem[i].style.border = "";
            colorItem[i].style.backgroundColor = colorArr[i];
        }
    }

    function renderHex() {
        for(let i = 0; i < colorArr.length; i++)  {
            hexItem[i].innerHTML = `<p style="color: white">${colorArr[i]}</p>`;
        }
    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (let i= 0; i<5; i++) {
                colorArr[i] = data.colors[i].hex.value;
                console.log(colorArr[i]);
            }
            renderColor();
            renderHex();
        })
    
})
