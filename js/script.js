// inputs e campo de resultados
let input = document.getElementById('kick')
let res = document.getElementById('res')
let btnrestart = document.getElementById('btnstart')
let botao = document.getElementById('button')
let tentativas = document.getElementById('attempt')
let tent = 0
let textres = document.getElementById('status')
// gerador de numeros aleatorios
let numero = Math.floor(Math.random()*10)
console.log(numero)
// funcao para verificar o chute
function chute() {
    // funcao para refazer o efeito de tremida no res
    setTimeout(function () {
        textres.style.animation = ''
        console.log('resetado')
    }, 200)

    tent ++
    tentativas.innerText = `Tentativas: ${tent}`
    if (input.value == numero) {
        console.log('acertou') 
        btnrestart.style.display = 'inline'
        botao.style.background = '#fafafa'
        botao.style.cursor = 'default'
        botao.setAttribute ('disabled', true) 
        input.setAttribute('readonly', true)
        res.style.background = '#03ff5f'
        textres.innerText = `Parabens, Voce Acertou!! Com ${tent} tentativas.`
    } else if(input.value < numero) {
        console.log('O numero é maior')
        textres.style.animation = 'treme 0.2s'
        textres.innerText = `O numero é maior que ${input.value}`
        input.value = ''
        res.style.background = '#ff0303'
    } else if (input.value > numero) {
        console.log('O numero é menor')
        textres.style.animation = 'treme 0.2s'
        textres.innerText = `O numero é menor que ${input.value}`
        input.value = ''
        res.style.background = '#ff0303'
    }
    console.log(tent)

}






