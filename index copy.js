import { Cliente } from "./Cliente.js";
let form = document.getElementById('form');
let botaoSubmit = document.getElementById('submit');
botaoSubmit.addEventListener('click', function(){
    event.preventDefault();
    let elClienteInfo = [
        document.getElementById('nome'),
        document.getElementById('nif')
    ];
    let clienteInfo = [
        elClienteInfo[0].value,
        elClienteInfo[1].value,
        Math.floor(Math.random() * 10000000)
    ]
    let cliente = new Cliente(clienteInfo[0],clienteInfo[1]);
    form.reset();
    // if(clienteInfo[0] === ''){
    //     alert('o Nome tem de estar preenchido');
    //     return;
    // } else if(clienteInfo[1].length < 8){
    //     alert('O NIF tem de ter pelo menos 8 digitos');
    //     return;
    // }
    clienteNomeP.innerHTML = clienteInfo[0].toUpperCase();
    nifP.innerHTML = '' + clienteInfo[1];
    clienteP.innerHTML += clienteInfo[2];
    balcaoP.innerHTML = Math.floor(Math.random() * 200);
    saldoP.innerHTML = saldo;
    mbWayP.innerHTML = 'Não Aderente';
})


