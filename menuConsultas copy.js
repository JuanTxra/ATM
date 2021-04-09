
let btnConsultas = document.getElementById('consultas');
btnConsultas.addEventListener('click', consultar);
function consultar(){
    btnVouchers.removeEventListener('click', vouchers);
    btnDepositar.removeEventListener('click', depositar);
    btnMbWay.removeEventListener('click', mbWay);
    btnLevantar.removeEventListener('click', levantar)
    // Esconder os botões necessarios
    btn7.id = 'hidden'
    btn9.id = 'hidden'
    btn_.id = 'hidden'
    criar(btn1P,'Consulta Saldos', 'consultaSaldos');
    criar(btn3P,'Movimentos', 'consultaMovimentos');
    criar(btn4P,'Consulta NIB', 'consultaNib');
    criar(btn6P,'Consulta IBAN', 'consultaIban');
    criar(btn7P,'', 'hidden');
    criar(btn9P,'', 'hidden');
    criar(btn00P,'', 'hidden');
    criar(btn_P,'Outras Opções', 'voltar');
    let btnVoltar = buscar('voltar');
    // Criar o botão e menu de consulta de Saldos
    let btnConsultaSaldo = document.getElementById('consultaSaldos');
    btnConsultaSaldo.removeEventListener('click', consultasSaldo)
    btnConsultaSaldo.addEventListener('click', consultasSaldo)
    function consultasSaldo(){
        btnConsultaSaldo.removeEventListener('click', consultasSaldo);
        criar(btn1P,'', 'desaparecer');
        criar(btn3P,'', 'desaparecer');
        criar(btn4P,'', 'desaparecer');
        criar(btn6P,'', 'desaparecer');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        criar(btn00P,'', 'desaparecer');
        criar(btn_P,'', 'desaparecer');
        let h1C = document.createElement('h1');
        let h1Ct = document.createTextNode(`O seu saldo atual é:`);
        h1C.appendChild(h1Ct);
        let h2C = document.createElement('h2');
        let h2Ct = document.createTextNode(saldoConta + '€');
        h2C.appendChild(h2Ct);
        h1C.appendChild(h2C);
        h1C.id = 'informacaoSaldo'
        menu.appendChild(h1C);
        // Aguardar 2.5 segundos antes de voltar ao menu inciial
        setTimeout(function(){
            h1C.remove();
            voltar();
        }, 2500);
        return;
    }
    
    // Criar o botão e menu de consulta de NIB
    let btnConsultaNib = document.getElementById('consultaNib');
    btnConsultaNib.removeEventListener('click', consultasNib);
    btnConsultaNib.addEventListener('click', consultasNib)
    function consultasNib(){
        btnConsultaNib.removeEventListener('click', consultasNib);
        criar(btn1P,'', 'desaparecer');
        criar(btn3P,'', 'desaparecer');
        criar(btn4P,'', 'desaparecer');
        criar(btn6P,'', 'desaparecer');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        criar(btn00P,'', 'desaparecer');
        criar(btn_P,'', 'desaparecer');
        let h1C = document.createElement('h1');
        let h1Ct = document.createTextNode(`Balcão Número: ${balcaoP.innerHTML}`);
        h1C.appendChild(h1Ct);
        let h2C = document.createElement('h2');
        console.log(nib);
        let h2Ct = document.createTextNode(`+${balcaoP.innerHTML} ${nib}`);
        h2C.appendChild(h2Ct);
        h1C.appendChild(h2C);
        h1C.id = 'informacaoNib'
        menu.appendChild(h1C);
        // Aguardar 5 segundos antes de voltar ao menu inciial
        setTimeout(function(){
            h1C.remove();
            voltar();
        }, 5000);
        return btnConsultaNib.removeEventListener('click', consultasNib);
    }
    // Criar o botão e menu de consulta de IBAN
    let btnConsultaIban = document.getElementById('consultaIban');
    btnConsultaIban.removeEventListener('click', consultasIban);
    btnConsultaIban.addEventListener('click', consultasIban)
    function consultasIban(){
        btnConsultaIban.removeEventListener('click', consultasIban);
        criar(btn1P,'', 'desaparecer');
        criar(btn3P,'', 'desaparecer');
        criar(btn4P,'', 'desaparecer');
        criar(btn6P,'', 'desaparecer');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        criar(btn00P,'', 'desaparecer');
        criar(btn_P,'', 'desaparecer');
        let h1C = document.createElement('h1');
        let h1Ct = document.createTextNode(`Balcão Número: ${balcaoP.innerHTML}`);
        h1C.appendChild(h1Ct);
        let h2C = document.createElement('h2');
        let h2Ct = document.createTextNode(`PT50 ${balcaoP.innerHTML}${nib}`);
        h2C.appendChild(h2Ct);
        h1C.appendChild(h2C);
        h1C.id = 'informacaoIban'
        menu.appendChild(h1C);
        // Aguardar 5 segundos antes de voltar ao menu inciial
        setTimeout(function(){
            h1C.remove();
            voltar();
        }, 5000);
        return;
    }
    // Criar o botão e menu de consulta de Movimentos
    let btnConsultaMovimentos = document.getElementById('consultaMovimentos');
    btnConsultaMovimentos.removeEventListener('click', consultasMovimentos);
    btnConsultaMovimentos.addEventListener('click', consultasMovimentos)
    function consultasMovimentos(){
        btnConsultaMovimentos.removeEventListener('click', consultasMovimentos);
        criar(btn1P,'', 'desaparecer');
        criar(btn3P,'', 'desaparecer');
        criar(btn4P,'', 'desaparecer');
        criar(btn6P,'', 'desaparecer');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        criar(btn00P,'', 'desaparecer');
        criar(btn_P,'', 'desaparecer');
        // Criar uma div
        let divM = document.createElement('div');
        divM.id = 'informacaoMovimentosDiv'
        menu.appendChild(divM);
        let h1M = document.createElement('h1');
        let h1Mt = document.createTextNode(`Movimentos`);
        h1M.appendChild(h1Mt);
        let pM = document.createElement('p');
        let pMt = document.createTextNode(`Atualmente não tem qualquer movimento.*`);
        pM.appendChild(pMt);
        let pMf = document.createElement('p');
        for (let i = 0; i < 21 ; i++) {
            let br = document.createElement('br');
            pMf.appendChild(br);
        }
        let pMft = document.createTextNode('*Movimentos recentes podem não ser apresentado neste menu de imediato');
        pMf.appendChild(pMft);
        h1M.id = 'informacaoMovimentosH1'
        pM.id = 'informacaoMovimentosP'
        pMf.id = 'informacaoMovimentosPf'
        divM.appendChild(h1M);
        divM.appendChild(pM);
        divM.appendChild(pMf);
        // Aguardar 5 segundos antes de voltar ao menu inciial
        setTimeout(function(){
            h1M.remove();
            pM.remove();
            pMf.remove();
            divM.remove();
            voltar();
        }, 1000);
        return;
    }
    // Função que renova tudo para o menu inicial
    function voltar(){
        btnConsultaNib.removeEventListener('click', consultasNib);
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
        btn9P.parentElement.id = 'vouchers';
        btn_P.innerHTML = '';
        btn_P.parentElement.id = 'hidden';
        btn00P.innerHTML = 'Depósitos';
        btn00P.parentElement.id = 'depositos';
        btn7.id = 'btn7'
        btn9.id = 'btn9'
        btn_.id = 'btn_'
        btnConsultaNib.removeEventListener('click', consultasNib);
        btnConsultaSaldo.removeEventListener('click', consultasSaldo)
        btnConsultaIban.removeEventListener('click', consultasIban);
        btnConsultaMovimentos.removeEventListener('click', consultasMovimentos);
        btnVoltar.removeEventListener('click',voltar);
        btnConsultas.addEventListener('click', consultar);
        // Adicionar de volta todos os menus
        btnVouchers.addEventListener('click', vouchers);
        btnLevantar.addEventListener('click', levantar);
        btnMbWay.addEventListener('click', mbWay);
        btnDepositar.addEventListener('click', depositar);
    }
    btnVoltar.addEventListener('click',voltar);
    return;
}

