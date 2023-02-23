'use strict'

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card_image')
    img.src = './img/$(produto.image)'

    const titulo = document.createElement('h5')
    titulo.classList.add('card_title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card_description')
    descricao.textContent = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card_price')
    preco.textContent = produto.price



    card.append(img, titulo, descricao, preco)
    return card;


}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.append(...cards)
}

carregarProdutos()












































// EXEMPLO DE EXPLICAÇÃO

// const numeros = [10, 23, 51, 90]

// // const limite = precos.length
// // const precosFrete = []
// // for (let i = 0; i < limite; i++) {
// //     precosFrete[i] = precos[i] + 2
// // }

// // const limite = precos.length
// // const precosFrete = []
// // let i = 0
// // while (i < limite){
// //     precosFrete[i] = precos[i] + 2
// //     cont++
// // }

// const adicionarFrete = (precos) => precos + 2
// const precosFrete = precos.map(adicionarFrete)

// console.log(precosFrete)