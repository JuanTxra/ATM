let saldoConta = parseInt(0);
// Funçao que cria um texto novo e dá um ID novo ao elemento pai
function criar(objeto,html, id){
    objeto.innerHTML = html;
    objeto.parentElement.id = id;
}
// Função que vai buscar um elemento por ID
function buscar(id){
    return document.getElementById(id);
}
function buscarClass(classe){
    return document.getElementsByClassName(classe);
}
// Buscar o elemento do menu
let menu = document.getElementById('menu');
let background = document.getElementById('background');
// Buscar os elementos de texto
let btn1P = buscar('btn1P')
let btn3P = buscar('btn3P')
let btn4P = buscar('btn4P')
let btn6P = buscar('btn6P')
let btn7P = buscar('btn7P')
let btn9P = buscar('btn9P')
let btn_P = buscar('btn_P')
let btn00P = buscar('btn00P')
// Buscar os botões
let btn1 = buscarClass('btn1');
let btn3 = buscarClass('btn3');
let btn4 = buscarClass('btn4');
let btn6 = buscarClass('btn6');
let btn7 = buscarClass('btn7');
let btn9 = buscarClass('btn9');
let btn_ = buscarClass('btn_');
let btn00 = buscarClass('btn00');
//Buscar os dados de conta
let clienteP = document.getElementById('clienteP');
let clienteNomeP = document.getElementById('clienteNomeP');
let nifP = document.getElementById('nifP');
let balcaoP = document.getElementById('balcaoP');
let saldoP = document.getElementById('saldoP');
let mbWayP = document.getElementById('mbWayP');
// Criar o NIB
let nib = Math.floor(10000000000000000 + Math.random() * 9000000000000000);
nib = nib.toString();
nib = nib.split(/(\d{4})/).join(' ').trim();