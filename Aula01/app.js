// Para habilotar que o site "corrija" erros
'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')

function somar () {
    resultado.value = (parseInt(numero1.value) +
     Number(numero2.value))
    formulario.classList.add('sombraVermelha')
}

calcular.addEventListener('click', somar)
