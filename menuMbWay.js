
let btnMbWay = document.getElementById('mbWay');
btnMbWay.addEventListener('click', mbWay);
function mbWay(){
    // Remover todas as opções anteriores
    btnLevantar.removeEventListener('click', levantar)
    btnConsultas.removeEventListener('click', consultar);
    btnDepositar.removeEventListener('click', depositar);
    btnVouchers.removeEventListener('click', vouchers);
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
    criar(btn00P,'Aderir', 'aderir');
    criar(btn_P,'Outras Opções', 'voltar');
    let btnVoltar = document.getElementById('voltar');
    let btnAderir = document.getElementById('aderir');
    // Função que cria novos botões de sim ou não para aderir ao MBWay e evento de click no botão aderir
    function aderir(){
            btnAderir.removeEventListener('click',aderir)
            btnVoltar.addEventListener('click', voltar);
            btnVoltar.removeEventListener('click', mbWay)
            criar(btn00P,'Sim', 'confirmar');
            criar(btn_P,'Cancelar', 'cancelar');
            let mbWayDiv = document.createElement('div');
            mbWayDiv.id = 'mbWayDiv'
            let h1Mb = document.createElement('h1');
            let h1Mbt = document.createTextNode(`Tem a certeza que pretende aderir?`);
            h1Mb.appendChild(h1Mbt);  
            background.appendChild(mbWayDiv);
            mbWayDiv.appendChild(h1Mb);
            h1Mb.id = 'h1Mb';
            let btnConfirmar = document.getElementById('confirmar');
            function confirmar(){
                mbWayP.innerHTML = 'Aderente';
                btnConfirmar.removeEventListener('click',confirmar);
                document.getElementById('h1Mb').remove();
                let h1MbSaida = document.createElement('h1');
                let h1MbSaidat = document.createTextNode(`Obrigado`);
                h1MbSaida.appendChild(h1MbSaidat);  
                mbWayDiv.appendChild(h1MbSaida);
                h1MbSaida.id = 'h1MbSaida';
                criar(btn00P,'', 'hidden');
                criar(btn_P,'', 'hidden');
                setTimeout(function(){
                    document.getElementById('h1MbSaida').remove();
                    document.getElementById('mbWayDiv').remove();
                    voltar();
                }, 2000);
            }
            btnConfirmar.addEventListener('click',confirmar);
    }
    btnAderir.addEventListener('click',aderir)
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
        btnMbWay.removeEventListener('click', mbWay);
        btnAderir.removeEventListener('click',aderir)
        // Adicionar de volta todos os menus
        btnLevantar.addEventListener('click', levantar);
        btnConsultas.addEventListener('click', consultar);
        btnDepositar.addEventListener('click', depositar);
        btnVouchers.addEventListener('click', vouchers);
    }
    btnVoltar.addEventListener('click',voltar);
}