const btn = document.querySelector("#enviar"),
    elH3 = document.querySelector("h3"),
    elH2 = document.querySelector("h2"),
    imgEl = document.querySelector("img")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const radioInpt = document.querySelector('input[name="tem-aula"]:checked')

    if(!radioInpt){
        alert("Tem que marcar algo, tonto!")
    }
    
    if(radioInpt.value === "sim") {
        elH2.innerText = "Tem aula sim!"
        elH3.innerText = "Vamo estudar que hoje tem aula."
        imgEl.src = "./assets/macaquin-estudando.jpg"

    } else if (radioInpt.value === "nao") {
        elH2.innerText = "Não tem aula!"
        elH3.innerText = "Pode vadiar, hoje não tem aula."
        imgEl.src = "./assets/macaquin-descansando.jpg"
    } else if (radioInpt.value === "nao-sei"){
        elH2.innerText = "Complicado..."
        elH3.innerText = "Alguém tem que ver isso ai..."
        imgEl.src = "./assets/macaquin-nao-sabe.jpg"
    }
    
})