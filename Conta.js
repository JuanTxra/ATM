export class Conta{
    constructor(cliente){
        this._cliente = cliente;
        this._agencia = Math.floor(1000 + Math.random() * 1000);
        this._saldo = 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    levantar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
        return valor;
    }
}