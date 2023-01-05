//FUNÇÕES DE INCREMENTO NO VALOR
const botoesIncrementa = document.querySelectorAll('.btn-incrementa');

for(let botao of botoesIncrementa){
  botao.addEventListener('click', incrementa);

  function incrementa() {
    var item = botao.closest('.item')
    var input = item.querySelector('.quantidade')
    input.value++;

    var preco = pegaPrecoItem(item);
    adicionaAoTotal(preco);
  }
}

// FUNÇÕES DE DECREMENTO DO VALOR
const botoesDecrementa = document.querySelectorAll('.btn-decrementa');

for(let botaoMenos of botoesDecrementa){
  botaoMenos.addEventListener('click', decrementa);

  function decrementa() {
    var item = botaoMenos.closest('.item')
    var input = item.querySelector('.quantidade')

    if (input.value > 0) {
      input.value--;  
      var preco = pegaPrecoItem(item);
      adicionaAoTotal(-preco);  
    } else {
      console.log(input.value)
    }
  }
}

var formPedido = document.forms.pedido;
formPedido.addEventListener('submit', function(event){
  var contador = 0;
  var inputs = formPedido.querySelectorAll('input-quantidade')

  for(let input of inputs){
    if (input.value > 0) {
      contador++;
    }
  }
  if (contador == 0) {
    alert("Deve haver ao menos 1 pizza em seu pedido");
    event.preventDefault();
  }
});

//FUNÇÃO PARA O VALOR TOTAL DO PEDIDO
function pegaPrecoItem(item) {
  var precoItem = item.querySelector('.preco-item')
  return Number(precoItem.textContent)
}

function adicionaAoTotal(valor) {
  var numTotal = document.querySelector('#total')
  numTotal.textContent = valor + Number(numTotal.textContent)
}