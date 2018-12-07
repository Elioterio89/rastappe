import { DateTime } from "ionic-angular/umd";
import { Favorito } from "./Favorito";

export class Evento {
    public banner: string;//*******
    public id: number//*
    public dia:Date;//
    public nome:string;//
    public atracoes :string;//
    public local : string;//*******
    public producao: string;//
    public valores :string;//
    public venda : string;//
    public contatos: string;//
    public infoExtra :string;//
    public descricao : string;//
    public ano :number;//*
    public favorito :Favorito;//*

    constructor(pBanner: string, pId: number,pNome:string,pAtracoes:string, pDia:Date,pLocal:string,
            pProducoes:string,pValores:string,pVenda:string,pContatos:string,
            pInfoExtra:string,pDescricao:string,pFavorito:Favorito) 
    {
        
        //favoritoChange: 
        this.banner = pBanner;
        this.id = pId;
        this.dia=pDia;
        this.nome=pNome;
        this.atracoes=pAtracoes;
        this.local =pLocal;
        this.producao=pProducoes;
        this.valores =pValores;
        this.venda=pVenda;
        this.contatos =pContatos;
        this.infoExtra=pInfoExtra;
        this.descricao =pDescricao;
        this.ano = pDia.getFullYear();
        this.favorito = pFavorito;
        //pDia.getFullYear().toString()

        
    }

}