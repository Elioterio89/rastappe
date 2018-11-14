export class CardSlide {
    public banner: string;
    public id: number
    public nome:string;
    public endereco :string;


    constructor(pBanner: string, pId: number, pNome:string,pEndereco) {
        this.banner = pBanner;
        this.id = pId;
        this.nome =pNome;
        this.endereco=pEndereco;
    }
}