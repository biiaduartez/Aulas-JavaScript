'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class="items"></div>'
// }
const adicionarCard = (aluno, nota) => {

        let notaAluno = nota
        const container = document.getElementById('container')
        const novaDiv = document.createElement('div')
        console.log(aluno)
        console.log(notaAluno)


        if (!isNaN(Number(notaAluno)) && notaAluno >= 0 && notaAluno < 11 && aluno.trim() && notaAluno.trim()) {
            novaDiv.classList.add('aluno')
            novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}<\h2>\n <h3 class="aluno__title">${nota}<\h3>`
            container.appendChild(novaDiv)

            if (nota <= 5) {
                novaDiv.classList.add('aluno__reprovado')
            } else if (nota > 5) {
                novaDiv.classList.add('aluno__aprovado')
            }
        } else {
            alert("Nota invalida!")
        }


    }
    // function adicionarCard(){
    //     alert('olá Mundo!')
    // }


adicionar.addEventListener('click', () => {
    let nome = prompt("nome")
    let nota = prompt("nota")
    adicionarCard(nome, nota)
})