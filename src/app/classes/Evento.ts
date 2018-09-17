import { DateTime } from "ionic-angular/umd";

export class Evento {
    public banner: string;
    public id: number
    public dia:Date;
    public atracoes :string;
    public local : string;
    public producao: string;
    public valores :string;
    public venda : string;
    public contatos: string;
    public infoExtra :string;
    public descricao : string;


    constructor(pBanner: string, pId: number,pAtracoes:string, pDia:Date,pLocal:string,
            pProducoes:string,pValores:string,pVenda:string,pContatos:string,
            pInfoExtra:string,pDescricao:string) 
    {
        
        
        this.banner = pBanner;
        this.id = pId;
        this.dia=pDia;
        this.atracoes=pAtracoes;
        this.local =pLocal;
        this.producao=pProducoes;
        this.valores =pValores;
        this.venda=pVenda;
        this.contatos =pContatos;
        this.infoExtra=pInfoExtra;
        this.descricao =pDescricao;

        
        //pDia.getFullYear().valueOf()

        
    }

}