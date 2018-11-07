export class DiaDoMes {
    public evento: boolean;
    public dia: number;
    public mes: number;
    public ano: number;

    constructor(pEvento: boolean, pDia: number =null, pMes: number=null , pAno:number= null) {
        this.evento = pEvento;
        this.dia = pDia;
        this.mes = pMes;
        this.ano = pAno;
    }
}