'use strict'

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const calcular = document.getElementById('calcular');
const result = document.getElementById('result')
const resulta = document.getElementById('resulta')
const form = document.getElementById('form')

function calculoMedia() {
    console.log(Number(numero1.value) + Number(numero2.value))

    result.innerHTML = 'resultado: ' + ((Number(numero1.value) + Number(numero2.value)) / 2)
    resulta.value = 'Status: ' + ((Number(numero1.value) + Number(numero2.value)) / 2)


    if ((Number(numero1.value) + Number(numero2.value)) / 2 <= 5) {
        form.classList.add('sombraVermelha')
        form.classList.remove('sombraVerde')

        resulta.value = '!!! REPROVADO !!!'


    } else if ((Number(numero1.value) + Number(numero2.value)) / 2 > 5 && (Number(numero1.value) + Number(numero2.value)) / 2 <= 10) {
        form.classList.add('sombraVerde')
        form.classList.remove('sombraVermelha')

        resulta.value = ('!!! APROVADO !!!')


    } else {
        form.classList.remove('sombraVermelha')
        form.classList.remove('sombraVerde')

        result.innerHTML = ('resultado: Invalido ');
        resulta.value = ('Status: Invalido');
    }

}

calcular.addEventListener("click", calculoMedia)