let btnDepositar = document.getElementById('depositos');
btnDepositar.addEventListener('click', depositar);
function depositar(){
    btnDepositar.removeEventListener('click', depositar);
    // Remover todas as opções anteriores
    btnVouchers.removeEventListener('click', vouchers);
    btnMbWay.removeEventListener('click', mbWay);
    btnConsultas.removeEventListener('click', consultar);
    btnLevantar.removeEventListener('click', levantar);
    // Criar botões novos
    criar(btn1P,'20€', '20D');
    criar(btn3P,'40€', '40D');
    criar(btn4P,'60€', '60D');
    criar(btn6P,'100€', '100D');
    criar(btn7P,'150€', '150D');
    criar(btn9P,'200€', '200D');
    criar(btn00P,'Outros Valores', 'outrosValores');
    criar(btn_P,'Outras Opções', 'voltar');
    // Buscar botões por ID
    let btn1D = document.getElementById('20D');
    let btn3D = document.getElementById('40D');
    let btn4D = document.getElementById('60D');
    let btn6D = document.getElementById('100D');
    let btn7D = document.getElementById('150D');
    let btn9D = document.getElementById('200D');
    // Selecionar os botões de voltar e outros valores
    let btnVoltar = document.getElementById('voltar');
    btnVoltar.removeEventListener('click',voltar);
    let btnValores = document.getElementById('outrosValores')
    btnVoltar.addEventListener('click',voltar);
    btnValores.addEventListener('click', depositarValores);
    // Função que renova tudo para o menu inicial e evento
    function voltar(){
            btn1P.innerHTML = 'Levantamentos';
            btn1P.parentElement.id = 'levantar';
            btn3P.innerHTML = 'MB WAY';
            btn3P.parentElement.id = 'mbWay';
            btn4P.innerHTML = 'Consultas';
            btn4P.parentElement.id = 'consultas';
            btn6P.innerHTML = 'Descontos MB';
            btn6P.parentElement.id = 'descontos';
            btn7P.innerHTML = 'Transferências';
            btn7P.parentElement.id = 'transferencias';
            btn9P.innerHTML = 'Vouchers';
            btn9P.parentElement.id = 'Vouchers';
            btn_P.innerHTML = '';
            btn_P.parentElement.id = 'hidden';
            btn00P.innerHTML = 'Depósitos';
            btn00P.parentElement.id = 'depositos';
            // Remover os botoes de deposito
            btnVoltar.removeEventListener('click',voltar);
            btnValores.removeEventListener('click', depositarValores);
            btnDepositar.removeEventListener('click', depositar);
            btn1D.removeEventListener('click', deposita20);
            btn3D.removeEventListener('click', deposita40);
            btn4D.removeEventListener('click', deposita60);
            btn6D.removeEventListener('click', deposita100);
            btn7D.removeEventListener('click', deposita150);
            btn9D.removeEventListener('click', deposita200);
            // Adicionar de volta todos os menus
            btnConsultas.addEventListener('click', consultar);
            btnMbWay.addEventListener('click', mbWay);
            btnLevantar.addEventListener('click', levantar);
            btnVouchers.addEventListener('click', vouchers);
            
    }    
    btn1D.addEventListener('click', deposita20);
        function deposita20(){;
            saldoConta = parseInt(saldoConta) + parseInt(20);
            saldoP.innerHTML = parseInt(saldoConta);
            btn1D.removeEventListener('click', deposita20);
        }
    btn3D.addEventListener('click', deposita40);
        function deposita40(){
            saldoConta = parseInt(saldoConta) + parseInt(40);
            saldoP.innerHTML = parseInt(saldoConta);
            btn3D.removeEventListener('click', deposita40);
            }
    btn4D.addEventListener('click', deposita60);
        function deposita60(){
            saldoConta = parseInt(saldoConta) + parseInt(60);
            saldoP.innerHTML = parseInt(saldoConta);
            btn4D.removeEventListener('click', deposita60);
            }
    btn6D.addEventListener('click', deposita100);
        function deposita100(){
            saldoConta = parseInt(saldoConta) + parseInt(100);
            saldoP.innerHTML = parseInt(saldoConta);
            btn6D.removeEventListener('click', deposita100);
        }     
    btn7D.addEventListener('click', deposita150);
        function deposita150(){
            saldoConta = parseInt(saldoConta) + parseInt(150);
            saldoP.innerHTML = parseInt(saldoConta);
            btn7D.removeEventListener('click', deposita150);
            }
    btn9D.addEventListener('click', deposita200);
        function deposita200(){
            saldoConta = parseInt(saldoConta) + parseInt(200);
            saldoP.innerHTML = parseInt(saldoConta);
            btn9D.removeEventListener('click', deposita200);
        }
    function depositarValores(){
        // Estilo
        // Remover o eventListener anterior do botão voltar
        btnVoltar.removeEventListener('click',voltar);
        btnValores.removeEventListener('click',depositarValores)
        // Criar um h1 com texto personalizado
        let h1 = document.createElement('h1');
        let h1T = document.createTextNode('Indique o valor que pretende depositar');
        h1.appendChild(h1T);
        h1.id = 'textoAviso';
        // Criar um input
        let input = document.createElement('input');
        input.id = 'inputAviso';
        // Colocar o h1 e o input no DOM
        menu.insertBefore(input,menu.firstChild);
        menu.insertBefore(h1,menu.firstChild);
        // Selecionar e remover os primeiros dois elementos
        // Arranjar as bordas
        btn00.id = 'anteriorStyle'
        btn_.id = 'depositarStyle'
        // Esconder o resto
        criar(btn1P,'', 'hidden');
        criar(btn3P,'', 'hidden');
        criar(btn4P,'', 'hidden');
        criar(btn6P,'', 'hidden');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        // Criar os dois botões do fim
        criar(btn_P,'Outras Opções', 'voltarReverse');
        criar(btn00P,'Depositar', 'depositarReverse');
        // Dar focus ao input
        document.getElementById('inputAviso').focus();
        // Prático
        // Buscar o botao novo do depositar
        let botaoDepositar = document.getElementById('depositarReverse');
        botaoDepositar.addEventListener('click', depositarVoltar);
        botaoDepositar.removeEventListener('click', depositar);
        function depositarVoltar(){
            if(Number.isFinite(parseInt(input.value))){
                saldoConta = parseInt(saldoConta) + parseInt(input.value);
                saldoP.innerHTML = parseInt(saldoConta);
                botaoDepositar.removeEventListener('click', depositarVoltar);
                document.getElementById('inputAviso').id = 'desaparecer';
                document.getElementById('textoAviso').id = 'desaparecer';
                voltar();
            } else {
                alert('Tem de ser inserido pelo menos um numero');
                return;
            }
        }
        // Buscar o botão novo do voltar
        botaoVoltar = document.getElementById('voltarReverse');
        // Criar uma função que volte ao menu anterior
        function retornar(){
            // Remover o input e o texto
            input.remove();
            h1.remove();
            // Remover todas as opções anteriores
            // btnMbWay.removeEventListener('click', mbWay);
            // btnConsultas.removeEventListener('click', consultar);
            // btnLevantar.removeEventListener('click', levantar)
            // Criar botões novos
            criar(btn1P,'20€', '20D');
            criar(btn3P,'40€', '40D');
            criar(btn4P,'60€', '60D');
            criar(btn6P,'100€', '100D');
            criar(btn7P,'150€', '150D');
            criar(btn9P,'200€', '200D');
            criar(btn00P,'Outros Valores', 'outrosValores');
            criar(btn_P,'Outras Opções', 'voltar');
            // // Selecionar os botões de voltar e outros valores
            // let btnVoltar = document.getElementById('voltar');
            let btnValores = document.getElementById('outrosValores');
            let btnVoltar = document.getElementById('voltar');
            btnVoltar.addEventListener('click', voltar);
            // Remover eventListener
            botaoDepositar.removeEventListener('click', depositarVoltar);
            btnValores.addEventListener('click', depositarValores);
        }
        // Associar um eventListener e uma função
        botaoVoltar.addEventListener('click', retornar);
    }
}

