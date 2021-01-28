export class Favorit {
    _nombre:string;
    _pista:string;
    _artista:string;
    _albun:string;
    _imatge:string;
    _id:number;
    constructor(pista:string,artista:string,albun:string,imatge:string,nombre:string,id:number){
        this._pista=pista;
        this._artista=artista;
        this._albun=albun;
        this._imatge=imatge;
        this._nombre=nombre;
        this._id=id;
    }


    get pista():string {
        return this._pista;
    }

    get artista():string {
        return this._artista;
    }
    get albun():string{
        return this._albun;
    }
    get imatge():string{
        return this._imatge;
    }
    get nombre():string{
        return this._nombre;
    }
    get id():number{
        return this._id;
    }
}