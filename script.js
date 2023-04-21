const lamp = document.getElementById("lamp")
let res = document.getElementById("res")
let roda = document.getElementById("roda")

function isBreak(){
    return lamp.src.indexOf("quebrada") > -1
}

function TurnON(){
    if (!isBreak ()){
        lamp.src = "./img/acesa.png"
        document.body.style.background = "#ffffff"
        res.style.color = "#000000"
        res.innerHTML = "Ligada"
        
    }
}

function TurnOFF(){
    if (!isBreak ()){
        lamp.src ="./img/desligada.png"
        document.body.style.background = "#000000"
        res.style.color = "#FFFFFF"
        res.innerHTML = "Desligada"
    }
}    

function Break(){
    lamp.src = "./img/quebrada2.png"
    document.body.style.background ="#000000"
    res.style.color = "#FFFFFF"
    res.innerHTML = "Quebrou"
   
}

lamp.addEventListener("dblclick", Break);