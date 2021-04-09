let btnVouchers = document.getElementById('vouchers');
btnVouchers.addEventListener('click', vouchers);
function vouchers(){
    // Remover todas as opções anteriores
    btnLevantar.removeEventListener('click', levantar)
    btnConsultas.removeEventListener('click', consultar);
    btnDepositar.removeEventListener('click', depositar);
    btnMbWay.removeEventListener('click', mbWay);
    // Esconder os botões necessarios
    btn1.id = 'hidden';
    btn3.id = 'hidden';
    btn4.id = 'hidden';
    btn6.id = 'hidden';
    btn7.id = 'hidden';
    btn9.id = 'hidden';
    criar(btn1P,'', 'hidden');
    criar(btn3P,'', 'hidden');
    criar(btn4P,'', 'hidden');
    criar(btn6P,'', 'hidden');
    criar(btn7P,'', 'hidden');
    criar(btn9P,'', 'hidden');
    criar(btn00P,'Verificar', 'verificar');
    criar(btn_P,'Outras Opções', 'voltar');
    let btnVoltar = document.getElementById('voltar');
    let btnVerificar = document.getElementById('verificar');
    // Função que cria novos botões de sim ou não para aderir ao MBWay e evento de click no botão aderir
    function verificar(){
            let vouchersDiv = document.createElement('div');
            btnVerificar.id = 'hidden';
            btnVoltar.id = 'hidden';
            vouchersDiv.id = 'vouchersDivAnim'
            background.appendChild(vouchersDiv);
            setTimeout(function(){
                vouchersDiv.id = 'vouchersDiv'
                let h1Mv = document.createElement('h1');
                h1Mv.id = 'h1Vouchers'
                // let h1MvT = document.createTextNode(`8697532415`);
                numeros = Math.floor(1000000000 + Math.random() * 90000000)
                let h1MvT = document.createTextNode(numeros);
                h1Mv.appendChild(h1MvT)
                vouchersDiv.appendChild(h1Mv);
                let h2Mv = document.createElement('h2');
                h2Mv.id = 'h1Vouchers'
                let h2MvT = document.createTextNode(`Não tem acesso a nenhum voucher, tente novamente mais tarde!`);
                h2Mv.appendChild(h2MvT)
                vouchersDiv.appendChild(h2Mv);
                setTimeout(function(){
                    h1Mv.remove();
                    h2Mv.remove();
                    vouchersDiv.remove();
                    voltar();
                }, 4000)
            }, 2000)
    }
    btnVerificar.addEventListener('click',verificar)
    // Função que renova tudo para o menu inicial
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
        btn9P.parentElement.id = 'vouchers';
        btn_P.innerHTML = '';
        btn_P.parentElement.id = 'hidden';
        btn00P.innerHTML = 'Depósitos';
        btn00P.parentElement.id = 'depositos';
        btn1.id = 'btn1';
        btn3.id = 'btn3';
        btn4.id = 'btn4';
        btn6.id = 'btn6';
        btn7.id = 'btn7';
        btn9.id = 'btn9';
        btn_.id = 'btn_';
        btn00.id = 'btn00';
        btnVoltar.removeEventListener('click',voltar);
        btnVerificar.removeEventListener('click',verificar)
        btnMbWay.addEventListener('click', mbWay);
        // Adicionar de volta todos os menus
        btnLevantar.addEventListener('click', levantar);
        btnConsultas.addEventListener('click', consultar);
        btnDepositar.addEventListener('click', depositar);
    }
    btnVoltar.addEventListener('click',voltar);
}