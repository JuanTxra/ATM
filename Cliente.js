export class Cliente{
    constructor(nome,nif){
        this._nome = nome;
        this._nif = nif;
    }

    get cliente(){
        return this._nome;
    }
}