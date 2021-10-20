let valor = document.getElementById('valor');
let selecione = document.querySelector('#selecione');
let pessoas = document.getElementById('pessoas');
let perPerson = document.getElementById('perPerson');



function calcular() {
     if (verifica(Number(valor.value), Number(pessoas.value), selecione)) {
          alert('Please fill in all the required information')
     } else {
          if (selecione.value == 'quinze') {
               perPerson.innerHTML = `$ ${porcentagem(valor, 0.15 ,pessoas)}`
          } else if (selecione.value == 'vinte') {
               perPerson.innerHTML = `$ ${porcentagem(valor, 0.20 ,pessoas)}`
          } else if (selecione.value == 'trinta') {
               perPerson.innerHTML = `$ ${porcentagem(valor, 0.30 ,pessoas)}`
          }
     }
}



function verifica(v, p, s) {
     if (v.length == 0 || v == 0) {
          return true
     } else if (p.length == 0 || p == 0 || s.value == 'selecion') {
          return true
     } else {
          false
     }
}

function porcentagem(v, p, g) {
     let item = Number(v.value) * p / Number(g.value);
     return item.toFixed(2)
}